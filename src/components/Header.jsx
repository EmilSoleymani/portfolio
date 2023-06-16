import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <div className="left-side">
                    <div className="logo">
                        <FontAwesomeIcon icon={faComputer}/>
                    </div>
                    <div className="title">
                        <h1>Emil Soleymani</h1>
                    </div>
                </div>

                <div className="right-side">
                    <div className="navbar-wrapper">
                        <nav>
                            <p>Home</p>
                            <p>About</p>
                            <p>Services</p>
                            <p>Contact</p>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header