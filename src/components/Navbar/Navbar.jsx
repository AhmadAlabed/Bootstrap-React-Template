import logo from "../../assets/images/landing-page/logo.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container my-2">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto ms-5 ms-lg-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Become a renter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Rental deals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  How it work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Why choose us
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-5 ms-lg-0">
              <li>
                <button className="btn">Sign in</button>
              </li>
              <li>
                <button className="btn btn-primary">Sign up</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
