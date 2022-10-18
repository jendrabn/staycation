import React from "react";
import Button from "../elements/Button";
import IconText from "./IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-auto" style={{ width: 350 }}>
            <IconText></IconText>
            <p className="brand-tagline">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          <div className="col mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="support@staycation.id">
                  support@staycation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  021 - 2208 - 1996
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Staycation, Kemang, Jakarta
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col text-center copyrights">
            Copyright {new Date().getFullYear()} • All rights reserved •
            Staycation
          </div>
        </div>
      </div>
    </footer>
  );
}
