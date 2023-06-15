import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import { useContext } from 'react';
import { Store } from '../../Store';

const Headers = () => {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <>
      <div className="superNav border-bottom py-2 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
              <span className="d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3">
                <strong>info@gmail.com</strong>
              </span>
              <span className="me-3">
                <i className="fa-solid fa-phone me-1 text-danger" />{" "}
                <strong>+91 8830711743</strong>
              </span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block d-md-block-d-sm-block d-xs-none text-end">
              <span className="me-3">
                <i className="fa-solid fa-truck text-muted me-1" />
                <Link className="text-muted" to="/privacy/shipping">
                  Shipping
                </Link>
              </span>
              <span className="me-3">
                <i className="fa-solid fa-file  text-muted me-2" />
                <Link className="text-muted" to="/privacy/policy">
                  Policy
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="fa-solid fa-shop me-2" />{" "}
            <strong>
              <Link to="/">BlueStone</Link>
            </strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
            <div className="input-group">
              {/* <span className="border-danger input-group-text bg-danger text-white">
                <i className="fa-solid fa-magnifying-glass" />
              </span> */}
              <input
                type="text"
                className="form-control border-dark"
                style={{ color: "#7a7a7a" }}
              />
              <button className="btn btn-dark text-white">Search</button>
            </div>
          </div>
          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <div className="ms-auto d-none d-lg-block">
              <div className="input-group">
                {/* <span className="border-danger input-group-text bg-danger text-white">
                  <i className="fa-solid fa-magnifying-glass" />
                </span> */}
                <input
                  type="text"
                  className="form-control border-dark"
                  style={{ color: "#7a7a7a" }}
                />
                <button className="btn btn-dark text-white">Search</button>
              </div>
            </div>
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link
                  className="nav-link mx-2 text-uppercase active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 text-uppercase" to="/aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle mx-2 text-uppercase"
                  href="#"
                  id="submenu1"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul className="dropdown-menu" aria-labelledby="submenu1">
                  <li>
                    <Link className="dropdown-item" to="/category/Bangle">
                      BANGLE
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/category/Bracelet">
                      BRACELET
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/category/Chain">
                      CHAIN
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/category/Earings">
                      EARINGS
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/category/Mangalsutra">
                      MANGALSUTRA
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/category/Necklace">
                      NECKLACE
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/category/Pendent">
                      PENDENT
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/category/Rings">
                      RINGS
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle mx-2 text-uppercase"
                  href="#"
                  id="submenu2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Collections
                </a>
                <ul className="dropdown-menu" aria-labelledby="submenu2">
                  <li>
                    <a className="dropdown-item" href="#">
                      GOLD
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      DIAMOND
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      POLKI
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      BABY COLLECTIONS
                    </a>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link mx-2 text-uppercase" to="/contactus">
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul></ul>
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link to="/cart" className="nav-link mx-2 text-uppercase">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle mx-2 text-uppercase"
                  href="#"
                  id="submenu3"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul className="dropdown-menu" aria-labelledby="submenu3">
                  <li>
                    <Link className="dropdown-item" to="/signin">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/signup">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Headers;
