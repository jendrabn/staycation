const Item = require("../models/Item");
const Activity = require("../models/Activity");
const Booking = require("../models/Booking");
const Category = require("../models/Category");
const Bank = require("../models/Bank");
const validationResult = require("express-validator").validationResult;
const Member = require("../models/Member");

module.exports = {
  landingPage: async (req, res) => {
    try {
      const mostPicked = await Item.find()
        .select("_id title country city price unit")
        .limit(5)
        .populate({ path: "imageId", select: "_id imageUrl" });

      const travellers = await Activity.countDocuments();
      const treasures = await Booking.countDocuments();
      const cities = await Item.countDocuments();

      const category = await Category.find()
        .select("_id name")
        .limit(3)
        .populate({
          path: "itemId",
          select: "_id title country city isPopular imageId",
          perDocumentLimit: 4,
          option: { sort: { sumBooking: -1 } },
          populate: {
            path: "imageId",
            select: "_id imageUrl",
            perDocumentLimit: 1,
          },
        });

      for (let i = 0; i < category.length; i++) {
        for (let j = 0; j < category[i].itemId.length; j++) {
          const item = await Item.findOne({ _id: category[i].itemId[j]._id });
          item.isPopular = false;
          await item.save();
          if (category[i].itemId[0] === category[i].itemId[j]) {
            item.isPopular = true;
            await item.save();
          }
        } 
      }

      const testimonial = {
        _id: "asd1293uasdads1",
        imageUrl: "images/testimonial2.jpg",
        name: "Happy Family",
        rate: 4.7,
        content:
          "What a great trip with my family and I should try again next time soon ...",
        familyName: "Angga",
        familyOccupation: "Product Designer",
      };

      res.status(200).json({
        hero: { travellers, treasures, cities },
        mostPicked,
        category,
        testimonial,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  detailPage: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Item.findById(id)
        .populate({
          path: "featureId",
          select: "_id qty name imageUrl",
        })
        .populate({
          path: "activityId",
          select: "_id type name imageUrl",
        })
        .populate({
          path: "imageId",
          select: "_id imageUrl",
        })
        .populate({
          path: "categoryId",
          select: "_id name",
          populate: {
            path: "itemId",
            select: "_id name imageUrl country city isPopular",
          },
        });

      const bank = await Bank.find();

      const testimonial = {
        _id: "asd1293uasdads1",
        imageUrl: "/images/testimonial-detailspage.jpg",
        name: "Happy Family",
        rate: 4.25,
        content:
          "What a great trip with my family and I should try again and again next time soon...",
        familyName: "Angga",
        familyOccupation: "UI Designer",
      };

      res.status(200).json({ ...item._doc, testimonial, bank });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  bookingPage: async (req, res) => {
    try {
      const {
        itemId,
        duration,
        bookingStartDate,
        bookingEndDate,
        firstName,
        lastName,
        email,
        phoneNumber,
        accountHolder,
        bankFrom,
      } = req.body;

      const errors = validationResult(req);

      if (!req.file) {
        return res.status(400).json({ message: "Image is required" });
      }

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const item = await Item.findById(itemId);

      if (!item) {
        return res.status(404).json({ message: "Item not found" });
      }

      Item.sumBooking += 1;
      await item.save();

      let total = item.price * duration;
      let tax = total * 0.1;

      const invoice = Math.floor(1000000 + Math.random() * 9000000);

      const member = await Member.create({
        firstName,
        lastName,
        email,
        phoneNumber,
      });

      const newBooking = {
        bookingStartDate,
        bookingEndDate,
        invoice,
        itemId: {
          _id: item._id,
          title: item.title,
          price: item.price,
          duration,
        },
        total: total + tax,
        memberId: member._id,
        payments: {
          proofPayment: `images/${req.file.filename}`,
          bankFrom,
          accountHolder,
        },
      };

      const booking = await Booking.create(newBooking);

      res.status(201).json({
        message: "Success booking",
        booking,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
