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
                Home
            </div>
            {/*  Body End  */}
            {/*  Footer  */}
            <Footer/>
            {/*  Footer End  */}
        </>
    )
}