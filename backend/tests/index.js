const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const fs = require("fs-extra");
const path = require("path");

chai.use(chaiHttp);

describe("API ENDPOINT TESTING", () => {
  it("GET Landing Page", (done) => {
    chai
      .request(app)
      .get("/api/v1/landing-page")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("Object");
        expect(res.body).to.have.property("hero");
        expect(res.body.hero).to.have.all.keys(
          "travellers",
          "treasures",
          "cities"
        );
        expect(res.body).to.have.property("mostPicked");
        expect(res.body.mostPicked).to.have.an("array");
        expect(res.body).to.have.property("category");
        expect(res.body.category).to.have.an("array");
        expect(res.body).to.have.property("testimonial");
        expect(res.body.testimonial).to.have.an("Object");
        done();
      });
  });

  it("GET Detail Page", (done) => {
    chai
      .request(app)
      .get("/api/v1/detail-page/5e96cbe292b97300fc902222")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("Object");
        expect(res.body).to.have.property("sumBooking");
        expect(res.body).to.have.property("country");
        expect(res.body).to.have.property("isPopular");
        expect(res.body).to.have.property("unit");
        expect(res.body).to.have.property("imageId");
        expect(res.body.imageId).to.have.an("array");
        expect(res.body).to.have.property("featureId");
        expect(res.body.featureId).to.have.an("array");
        expect(res.body).to.have.property("activityId");
        expect(res.body.activityId).to.have.an("array");
        expect(res.body).to.have.property("_id");
        expect(res.body).to.have.property("title");
        expect(res.body).to.have.property("price");
        expect(res.body).to.have.property("city");
        expect(res.body).to.have.property("description");
        expect(res.body).to.have.property("categoryId");
        expect(res.body.categoryId).to.have.an("Object");
        expect(res.body).to.have.property("testimonial");
        expect(res.body.testimonial).to.have.an("Object");
        expect(res.body).to.have.property("bank");
        expect(res.body.bank).to.have.an("array");
        done();
      });
  });

  it("POST Booking Page", (done) => {
    const date = new Date();
    const image = __dirname + "/buktibayar.jpeg";
    const data = {
      image,
      itemId: "5e96cbe292b97300fc902232",
      duration: 3,
      bookingStartDate: date.toString(),
      bookingEndDate: date.setDate(date.getDate() + 3).toString(),
      firstName: "Yuli",
      lastName: "Puspita",
      email: "yuli@mail.com",
      phoneNumber: "+6289771818009",
      accountHolder: "yuli",
      bankFrom: "Mandiri",
    };

    chai
      .request(app)
      .post("/api/v1/booking-page")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .field("itemId", data.itemId)
      .field("duration", data.duration)
      .field("bookingStartDate", data.bookingStartDate)
      .field("bookingEndDate", data.bookingEndDate)
      .field("firstName", data.firstName)
      .field("lastName", data.lastName)
      .field("email", data.email)
      .field("phoneNumber", data.phoneNumber)
      .field("accountHolder", data.accountHolder)
      .field("bankFrom", data.bankFrom)
      .attach("image", fs.readFileSync(data.image), "buktibayar.jpeg")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        expect(res.body).to.be.an("Object");
        expect(res.body).to.have.property("message");
        expect(res.body.message).to.equal("Success booking");
        expect(res.body).to.have.property("booking");
        expect(res.body.booking).to.have.an("Object");
        expect(res.body.booking).to.have.all.keys(
          "payments",
          "_id",
          "bookingStartDate",
          "bookingEndDate",
          "invoice",
          "itemId",
          "total",
          "memberId",
          "__v"
        );
        expect(res.body.booking.payments).to.have.all.keys(
          "status",
          "proofPayment",
          "bankFrom",
          "accountHolder"
        );
        expect(res.body.booking.itemId).to.have.all.keys(
          "_id",
          "title",
          "price",
          "duration"
        );
        done();
      });
  });
});
