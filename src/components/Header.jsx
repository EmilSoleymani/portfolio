import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div class="header">
            <div class="header-content">
                <div class="left-side">
                    <div class="logo">
                        <FontAwesomeIcon icon={faComputer}/>
                    </div>
                    <div class="title">
                        <h1>Emil Soleymani</h1>
                    </div>
                </div>

                <div class="right-side">
                    <div class="navbar-wrapper">
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