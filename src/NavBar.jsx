
import { Link } from 'react-router-dom';

import CentennialRamenLogo from './images/logo_transparent.png'


function NavBar(){
    return(
        <header>
        <div class="image-text-row">
        <img src={CentennialRamenLogo} alt="ramen_logo" width="100" height="100" />
        <div class="text-content">
            <h1>JONAS HARVIE   </h1>
        </div>
        </div>
        <nav>
        <ul class="mainmenu">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT ME</Link></li>
            <li><Link to="/projects">PROJECTS</Link></li>
            <li><Link to="/services">SERVICES</Link></li>
            <li><Link to="/contact">CONTACT ME</Link></li>
            
        </ul>
        </nav>
    </header>
    )
}

export default NavBar