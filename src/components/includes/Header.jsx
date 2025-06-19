"use client"
import React, { useEffect, useState } from "react";


import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import { getCompany } from "@/config/api";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [companyData, setCompanyData] = useState("");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let headerClasses = ["header"];
  if (scrolled) {
    headerClasses.push("scrolled");
  }


  useEffect(() => {
    async function loadData() {
      try {
        const data = await getCompany();
        setCompanyData(data);
      } catch (err) {
        console.error("Failed to load company data", err);
      }
    }

    loadData();
  }, []);

  return (
    <>
      <div className="first-transition"></div>
      <div className="page-transition"></div>

      <header className={headerClasses.join(" ")}>
        <Navbar expand="lg" className="bg-body-tertiaryx">
          <Link href="/" passHref legacyBehavior>
            <Navbar.Brand>
              <img src={companyData.companyLogo} alt="Logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="/about-us" passHref legacyBehavior>
                <Nav.Link>About Us</Nav.Link>
              </Link>
              <NavDropdown title="Our Tours" id="basic-nav-dropdown">
                <Link href="/napa-valley-wine-tour" passHref legacyBehavior>
                  <NavDropdown.Item>Napa Valley Wine Tours</NavDropdown.Item>
                </Link>
                <Link href="/sonoma-valley-wine-tours" passHref legacyBehavior>
                  <NavDropdown.Item>Sonoma Valley Wine Tours</NavDropdown.Item>
                </Link>
                <Link href="/alexander-valley-wine-tours" passHref legacyBehavior>
                  <NavDropdown.Item>Alexander Valley Wine Tours</NavDropdown.Item>
                </Link>
                <Link href="/russian-river-wine-tours" passHref legacyBehavior>
                  <NavDropdown.Item>Russian River Wine Tours</NavDropdown.Item>
                </Link>
                <Link href="/dry-creek-wine-tours" passHref legacyBehavior>
                  <NavDropdown.Item>Dry Creek Wine Tours</NavDropdown.Item>
                </Link>
                <Link href="/howell-mountain-wine-tours" passHref legacyBehavior>
                  <NavDropdown.Item>Howell Mountain Wine Tours</NavDropdown.Item>
                </Link>
                <Link href="/diamond-mountain-district-wine-tours" passHref legacyBehavior>
                  <NavDropdown.Item>Diamond Mountain Wine Tours</NavDropdown.Item>
                </Link>
                <Link href="/private-northern-california-wine-tours" passHref legacyBehavior>
                  <NavDropdown.Item>Private Wine Tours</NavDropdown.Item>
                </Link>
                <Link href="/spring-mountain-wine-tours" passHref legacyBehavior>
                  <NavDropdown.Item>Spring Mountain Wine Tours</NavDropdown.Item>
                </Link>
                <Link href="/discover-coombsville-tour" passHref legacyBehavior>
                  <NavDropdown.Item>Coombsville Tours</NavDropdown.Item>
                </Link>
              </NavDropdown>
              <Link href="/book-now" passHref legacyBehavior>
                <Nav.Link>Reservation</Nav.Link>
              </Link>
              <NavDropdown title="Fleet" id="basic-nav-dropdown">
                <Link href="/fleet/sedan" passHref legacyBehavior>
                  <NavDropdown.Item>Sedan</NavDropdown.Item>
                </Link>
                <Link href="/fleet/executive-sedan" passHref legacyBehavior>
                  <NavDropdown.Item>Executive Sedan</NavDropdown.Item>
                </Link><Link href="/fleet/executive-suvs" passHref legacyBehavior>
                  <NavDropdown.Item>Executive SUVs</NavDropdown.Item>
                </Link>
                <Link href="/fleet/executive-sprinters" passHref legacyBehavior>
                  <NavDropdown.Item>Executive Sprinters</NavDropdown.Item>
                </Link>
                <Link href="/fleet/mini-coaches" passHref legacyBehavior>
                  <NavDropdown.Item>Mini Coaches</NavDropdown.Item>
                </Link>

              </NavDropdown>
              <Link href="/gallery" passHref legacyBehavior>
                <Nav.Link>Gallery</Nav.Link>
              </Link>
              <Link href="/blog" passHref legacyBehavior>
                <Nav.Link>Blog</Nav.Link>
              </Link>
              <Link href="/faq" passHref legacyBehavior>
                <Nav.Link>Faq</Nav.Link>
              </Link>
              <Link href="/contact-us" passHref legacyBehavior>
                <Nav.Link>Contact Us</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
          <div className="hamburger-icon" onClick={toggleSidebar}>
            ☰
          </div>
          <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
            <p>
              Fall in love with California’s beautiful local wineries in a
              memorable style. We provide premium and elegant winery limousine
              service across California. Each expressing the unique terroir of
              the property.
            </p>

            <div className="maps">
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d51952563.63570164!2d-121.950824!3d37.367766!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8bebd2bf504e53bb%3A0xf29be080bd07bfef!2sEcko%20Worldwide%20Transportation%20-%20Luxury%20Limousine%20Chauffeured%20Service%20In%20Santa%20Clara!5e0!3m2!1sen!2sin!4v1724739183050!5m2!1sen!2sin"
                width="300"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe> */}
            </div>
            <div className="adrs">
              <h6>Address</h6>
              <p>{companyData.companyAddress}</p>
              <p>
                <a
                  onClick={() => (window.location.href = "tel:8773593256")}
                  style={{ color: "white", cursor: "pointer" }}
                >
                 {companyData.companyPhone}
                </a>
              </p>
              <p>
                <a
                  onClick={() =>
                  (window.location.href =
                    "mailto:res@californialimowinetours.com")
                  }
                  style={{ cursor: "pointer" }}
                >
                  {companyData.companyEmail}
                </a>
              </p>
            </div>

            <h6 className="widget-title">FOLLOW US</h6>
            <ul className="social-media">
              <li>
                <a
                  href="https://www.facebook.com/California-Limo-Wine-Tours-102500799056422"
                  aria-label="facebook"
                  target="_blank"
                >
                  <i className="lni lni-facebook-filled"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/wine_limo"
                  aria-label="twitter"
                  target="_blank"
                >
                  <svg
                    className="svgicon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/california_limowinetour/"
                  aria-label="instagram"
                  target="_blank"
                >
                  <i className="lni lni-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/california-limo-wine-tours1/"
                  aria-label="instagram"
                  target="_blank"
                >
                  <i className="lni lni-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>


        </Navbar>
      </header>
    </>
  );
};

export default Header;
