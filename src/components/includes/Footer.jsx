"use client";
import React from "react";
import Link from "next/link";

import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 wow fadeIn">
              <div className="logo">
                {" "}
                <a href="#">
                  {" "}
                  <img src="../assets/images/logo.png" alt="Image" />{" "}
                </a>{" "}
              </div>
              <p>
                California Wine Tours leads the way in planning exclusive wine
                tour experiences based upon your unique preferences. Whether you
                a first-timer or an experienced wine connoisseur, we’ll plan a
                trip that will provide great memories while meeting your
                desires. No one knows California’s wine country like we do. We
                are ready to plan your trip.
              </p>
              {/* end logo */}
            </div>
            {/* end col-3 */}
            <div className="col-lg-4 col-6 wow fadeIn" data-wow-delay="0.15s">
              <h6 className="widget-title"> Company Info </h6>
              <ul>
                <li>
                  <b>Adress:</b>
                  <br />
                  2576 Lafayette St, Santa Clara, CA 95050, United States.
                </li>
                <li>
                  <b>Phone:</b>
                  <br />
                  877-359-3256{" "}
                </li>
                <li>
                  <b>Email:</b>
                  <br />
                  res@clwt.com
                </li>
              </ul>
            </div>
            {/* end col-2 */}
            <div className="col-lg-2 col-6 wow fadeIn" data-wow-delay="0.30s">
              <h6 className="widget-title"> QUICK LINKS</h6>
              <Nav className="me-auto">
                <Link href="/about-us" passHref legacyBehavior>
                  <Nav.Link>About Us</Nav.Link>
                </Link>
                <Link href="/book-now" passHref legacyBehavior>
                  <Nav.Link>Reservation</Nav.Link>
                </Link>
                <Link href="/contact-us" passHref legacyBehavior>
                  <Nav.Link>Contact Us</Nav.Link>
                </Link>
              </Nav>
            </div>

            <div className="col-12 wow fadeIn">
              <div className="footer-bottom">
                {" "}
                <span>© {new Date().getFullYear()} California Limo Wine Tour </span>{" "}
                <span>
                  Maintained by{" "}
                  <a href="https://www.hashtagbizsolutions.com" target="_blank">
                    Hashtag Biz Solutions
                  </a>
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
