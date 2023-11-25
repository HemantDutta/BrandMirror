import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Join} from "./pages/Join";
import {Contact} from "./pages/Contact";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/join"} element={<Join/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
