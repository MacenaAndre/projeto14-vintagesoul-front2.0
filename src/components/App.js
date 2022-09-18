import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckOut from "./CheckOut/CheckOut";
import Home from "./Home/Home";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import { GlobalStyle } from "./styled-components";

export default function App () {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/sign-in" element={<SignIn/>}></Route>
                    <Route path="/sign-up" element={<SignUp/>}></Route>
                    <Route path="/checkout" element={<CheckOut/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
};