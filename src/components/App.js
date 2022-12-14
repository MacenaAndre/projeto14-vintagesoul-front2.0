import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckOut from "./CheckOut/CheckOut";
import ConfirmPurchase from "./ConfirmPurchase/ConfirmPurchase";
import DeliveryAddress from "./DeliveryAddress/DeliveryAddress";

import Home from "./Home/Home";
import ProductPage from "./ProductPage/ProductPage";
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
                    <Route path="/product/:idProduct" element={<ProductPage />}></Route>
                    <Route path="/adress" element={<DeliveryAddress/>}></Route>
                    <Route path="/confirm-purchase" element={<ConfirmPurchase/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
};