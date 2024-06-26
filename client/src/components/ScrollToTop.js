import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export const ScrollToTop = () => {

    const path = useLocation();

    useEffect(
        () => {
            window.scrollTo(0, 0);
        },
        [path]
    );

    return null;
}