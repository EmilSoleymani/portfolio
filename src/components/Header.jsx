import { useContext } from "react";
import { ThemeContext } from "../App";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

    const { isDark, setIsDark } = useContext(ThemeContext)

    return (
        <header className="header">
            <div className="container">
                <div className="logo-wrapper">
                    <FontAwesomeIcon icon={faComputer} />
                </div>
                <button onClick={() => setIsDark(!isDark)} className="icon">{isDark ? "Dark" : "Light"}</button>
            </div>
        </header>
    )
}

export default Header