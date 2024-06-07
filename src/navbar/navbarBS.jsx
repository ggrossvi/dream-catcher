// import{Navbar,Container,Nav} from 'react-bootstrap';
import "./navbar.css";
import Logo from "../assets/logo.jpg";

export default function NavbarBootstrap() {
  return (

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //         <a className="navbar-brand" href="#">Navbar</a>
    //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span className="navbar-toggler-icon"></span>
    //         </button>
    //                 <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //                         <div className="navbar-nav">
    //                                 <a className="nav-item nav-link disabled" href="#">Home 
    //                                         <span className="sr-only">(current)</span></a>
    //                                 <a className="nav-item nav-link active" href="/members">Members</a>
    //                                 <a className="nav-item nav-link active" href="/events">Events</a>
    //                                 <a className="nav-item nav-link active" href="/jobs">Jobs</a>
    //                         </div>
    //                 </div>
    // </nav>  
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <div className="site-logo me-2">
          <img src={Logo} alt="logo" className="responsive-logo" />
          <a className="navbar-brand" href="#">Dream Catcher</a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Dream Catcher</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Signup</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Members</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Jobs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

  );

}
