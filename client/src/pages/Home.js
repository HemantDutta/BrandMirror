import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";

export const Home = () => {
    return (
        <>
            {/*  Header  */}
            <Navbar/>
            {/*  Header End  */}
            {/*  Body  */}
            <div className="home" id="home">
                {/*  Hero  */}
                <section className="hero" id="hero">
                    <div className="hero-container">
                        <div className="hero-left">
                            <span className="header">Get Ahead</span>
                            <span className="tag"> of your competition with BrandMirror: Unveiling Your <span className="gradient-text">Brand's Digital Reflection</span> for Strategic Growth and Informed Decision-Making.</span>
                        </div>
                        <div className="hero-right">
                            <button type="button">Get Started</button>
                        </div>
                    </div>
                </section>
                {/*  Hero End  */}
                {/*  About  */}
                <section className="about" id="about">
                    <div className="about-container">

                    </div>
                </section>
                {/*  About End  */}
            </div>
            {/*  Body End  */}
            {/*  Footer  */}
            <Footer/>
            {/*  Footer End  */}
        </>
    )
}