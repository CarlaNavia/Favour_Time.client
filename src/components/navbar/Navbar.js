import React from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";
import './navbar.css';
import { Navbar, Nav , Button } from 'react-bootstrap';

const NavBar = (props) => {

  function getImageProfile(){
    if (props.user.imageProfile === "") {
      return props.user.imageProfile;
    } else {
      return "/default-user-image.png";
    }
  }
  const { user, logout, isLoggedin } = props;


  return(
    <>
    <Navbar fixed="top" bg="light" expand="lg">
     <Link to='/' className="logoNavbar">
     <h1 className="nameLogo">FAVOUR TIME</h1>
     </Link>  
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">

      <Nav className="mr-auto">
          <Button variant="outline-danger" size="lg">
          <Link to={"/profile"} className='buttonLink'>
            <img src={getImageProfile()} alt="profile" className="imgButtonProfile"/> Profile
          </Link>
          </Button>

          <Button variant="outline-danger" className="space" size="lg">
            <Link to={"/packs"} className='buttonLink'>
            <img src='../../../Icons/tiempo-es-dinero.png' alt="Coins" className="imgButton"/> {user.credits} Credits
            </Link>
          </Button>
         
          <Button variant="outline-danger" size="lg">
          <Link to='/faqs' className='buttonLink'>
             <img src='../../../Icons/informacion.png' alt="info" className="imgButton"/> Info
          </Link>
          </Button>

         
      </Nav>
    </Navbar.Collapse>

    </Navbar>
    </>
  )

//     return (
//       <nav className="navbar" role="navigation" aria-label="main navigation">
//       {isLoggedin ? (
//         <>
//       <div className="navbar-brand">
//       <Link to='/' className="navbar-item">FAVOUR TIME</Link>  
//         <Link to='/#'
//           onClick={() => {
//             setisActive(!isActive);
//           }}
//           role="button"
//           className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
//           aria-label="menu"
//           aria-expanded="false"
//           data-target="navbarBasicExample"
//         >
//           <span aria-hidden="true"></span>
//           <span aria-hidden="true"></span>
//           <span aria-hidden="true"></span>
//         </Link>
        
//       </div>
//       <div
//         id="navbarBasicExample"
//         className={`navbar-menu ${isActive ? "is-active" : ""}`}
//       >
//         <div className="navbar-end">
//           <Link to='/faqs' className="navbar-item">Faq</Link>
//           <Link to={"/packs"} className='navbar-item'>{user.credits} credits</Link>
//           <Link to={"/profile"} className='navbar-item'>
//            <img src={getImageProfile()} alt="profile" style={{width: 30,  borderRadius: 50}}/> Profile
//           </Link>
//           <Link to='/#' className="navbar-item" onClick={logout} >Logout</Link>
//         </div>
//       </div>
      
//       </>
//       ) : (
//         <>
//         <div className="navbar-brand">
//         <Link to='/' className="navbar-item">FAVOUR TIME</Link>
//         <Link to='/#'
//           onClick={() => {
//             setisActive(!isActive);
//           }}
//           role="button"
//           className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
//           aria-label="menu"
//           aria-expanded="false"
//           data-target="navbarBasicExample"
//         >
//           <span aria-hidden="true"></span>
//           <span aria-hidden="true"></span>
//           <span aria-hidden="true"></span>
//         </Link>
        
//       </div>
     
//       <div
//         id="navbarBasicExample"
//         className={`navbar-menu ${isActive ? "is-active" : ""}`}
//       >
//         <div className="navbar-end">
//           <Link to='/home' className="navbar-item">Home</Link>
//           <Link to='/faqs' className="navbar-item">Faq</Link>
//           <Link to='/login' className="navbar-item">Login</Link>
//           <Link to='/signup' className="navbar-item">Signup</Link>
//         </div>
//       </div>
//       </>
//       )}
//  </nav>
//     );
}

export default withAuth(NavBar);
