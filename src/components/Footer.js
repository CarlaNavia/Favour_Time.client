import React from 'react'
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <footer>
        <div className="bottom">
          <center>  
            <span className="credit">Create By <Link to="/#">Carla Navia & Jonathan Jimenez</Link> | </span>
            <span className="far fa-copyright"></span><span> 2020 All rights reserved.</span>
          </center>
        </div>
      </footer>
    )
}


