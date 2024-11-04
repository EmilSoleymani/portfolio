import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer } from "@fortawesome/free-solid-svg-icons";

import { useLocation } from 'react-router-dom';

const Header = () => {
    const { hash, pathname, search } = useLocation();
 
    return (
        <div className="header">
            <div className="header-content">
                <div className="left-side">
                    <div className="title">
                    <div className="logo">
                        <FontAwesomeIcon icon={faComputer}/>
                    </div>
                        <h1>Emil Soleymani</h1>
                    </div>
                </div>

                <div className="right-side">
                    <div className="navbar-wrapper">
                        <nav>
                            <a className={pathname === '/' ? 'selected' : null} href='/'>Home</a>
                            <a className={pathname === '/projects' ? 'selected' : null} href='/projects'>Projects</a>
                            <a className={pathname === '/blog' ? 'selected' : null}href='/blog'>Blog</a>
                            <a className={pathname === '/contact' ? 'selected' : null} href='/contact'>Contact</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header