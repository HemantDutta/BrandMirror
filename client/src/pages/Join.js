import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";

export const Join = () => {

    //Form Switcher
    function formSwitcher(x) {
        let inButton = document.getElementById("signIn");
        let upButton = document.getElementById("signUp");
        let upForm = document.getElementById("upForm");
        let inForm = document.getElementById("inForm");

        if (x === "in") {
            upButton.classList.remove("active");
            inButton.classList.add("active");
            upForm.classList.remove("active");
            setTimeout(() => {
                upForm.style.display = "none";
                inForm.style.display = "flex";
                setTimeout(()=>{
                    inForm.classList.add("active");
                },50)
            }, 200)

        } else if (x === "up") {
            upButton.classList.add("active");
            inButton.classList.remove("active");
            inForm.classList.remove("active");
            setTimeout(() => {
                inForm.style.display = "none";
                upForm.style.display = "flex";
                setTimeout(()=>{
                    upForm.classList.add("active");
                },50)
            }, 200)
        }
    }

    return (
        <>
            {/*  Navbar  */}
            <Navbar/>
            {/*  Navbar End  */}
            {/*  Body  */}
            <div className="join" id="join">
                <div className="join-container">
                    <div className="header">
                        <span className="head">Take the first step</span>
                        <span className="tag">into the world of <span className="cali gradient-text">Brand Image Analysis</span> with BrandMirror</span>
                    </div>
                    <div className="form-container">
                        <div className="form-switcher">
                            <button type="button" className="active" id="signUp" onClick={() => {
                                formSwitcher("up")
                            }}>Sign Up
                            </button>
                            <button type="button" id="signIn" onClick={() => {
                                formSwitcher("in")
                            }}>Sign In
                            </button>
                        </div>
                        <form className="sign-up-form active" id="upForm">
                            <div className="input-field">
                                <label htmlFor="name">Enter Name</label>
                                <input type="text" name="name" id="name" placeholder="e.g. Elon Musk"/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="bName">Enter Brand Name</label>
                                <input type="text" name="bName" id="bName" placeholder="e.g. Tesla"/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="email">Enter Email</label>
                                <input type="email" name="email" id="email" placeholder="e.g. elon@gmail.com"/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">Enter Password</label>
                                <input type="password" name="password" id="password"/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="cPassword">Confirm Password</label>
                                <input type="password" name="cPassword" id="cPassword"/>
                            </div>
                            <div className="btn-field">
                                <button type="button" className="click">Register</button>
                            </div>
                        </form>
                        <form className="sign-up-form" id="inForm">
                            <div className="input-field">
                                <label htmlFor="name">Enter Email</label>
                                <input type="text" name="name" id="name" placeholder="Email"/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="inPassword">Enter Password</label>
                                <input type="password" name="inPassword" id="inPassword"/>
                            </div>
                            <div className="btn-field">
                                <button type="button" className="click">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/*  Body End  */}
            {/*  Footer  */}
            <Footer/>
            {/*  Footer End  */}
        </>
    )
}