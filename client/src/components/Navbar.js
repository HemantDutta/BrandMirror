import {Link} from "react-router-dom";

export const Navbar = () => {

    //Nav Menu Toggle
    function navMenuToggle() {
        let menu = document.getElementById("menu");
        let ham = document.getElementById("ham");

        if (menu.classList.contains("open")) {
            ham.classList.remove("fa-xmark");
            ham.classList.add("fa-bars");
            menu.classList.remove("open");
            setTimeout(() => {
                menu.style.display = "none";
            }, 400)
        } else {
            menu.style.display = "flex";
            ham.classList.remove("fa-bars");
            ham.classList.add("fa-xmark");
            setTimeout(() => {
                menu.classList.add("open");
            }, 50)
        }

    }

    return (
        <>
            <nav>
                <div className="navbar-container">
                    <div className="navbar-left">
                        <div className="brand">
                            <span className="gradient-text">BrandMirror</span>
                            <Link to={"/"}>BrandMirror</Link>
                        </div>
                    </div>
                    <div className="navbar-right">
                        <div className="contact">
                            <div className="text">
                                <span>Contact</span>
                                <span className="gradient-text">Contact</span>
                            </div>
                            <i className="fa-solid fa-arrow-right"/>
                        </div>
                        <div className="ham-menu" onClick={navMenuToggle}>
                            <i className="fa-solid fa-bars" id="ham"/>
                        </div>
                        <div className="menu" id="menu">
                            <Link to={"/join"}>Join Now&nbsp;<i className="fa-solid fa-arrow-right"/></Link>
                            <Link to={"/"}>Home&nbsp;<i className="fa-solid fa-arrow-right"/></Link>
                            <Link to={"/"}>About&nbsp;<i className="fa-solid fa-arrow-right"/></Link>
                            <Link to={"/"}>Contact Us&nbsp;<i className="fa-solid fa-arrow-right"/></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}