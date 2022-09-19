import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getCartApi } from "../../service/VintageSoulService";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import WrapperButton from "../styled-components/WrapperButton";
import CardCartItem from "./CradCartItem";

export default function CheckOut() {
    const [cart, setCart] = useState([]);
    const cartPrices = cart.map((value) => value.price*value.quantity)
    const initialValue = 0;
    const total = cartPrices.reduce((previousValue, currentValue) =>
        previousValue + currentValue,
        initialValue
    );
    const formatedTotal = (total/100).toFixed(2).split(".").join(",");

    useEffect(() => {
        getCartApi()
            .catch((res) => {
                alert(res.message);
            })
            .then((res) => {
                setCart(res.data);
            })
    }, [setCart]);

    return (
        <>
            <Header />
            <Wrapper>
                {cart.map((value, index) => (
                <CardCartItem
                    key={index}
                    id={value._id}
                    image={value.image}
                    title={value.title}
                    quantity={value.quantity}
                    price={value.price}
                />
                ))}
                <Total>
                    <h1>Total:</h1>
                    <h1>{formatedTotal}</h1>
                </Total>
                <Link to="/adress">
                    <WrapperButton value="Ir para endereço de entrega"></WrapperButton>
                </Link>
            </Wrapper>
            <Footer/>
        </>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 90vh;
    padding: 90px 0px 20px 0px;
`
const Total = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 10px 0px 40px 0px;

    & h1 {
        font-size: 27px;
    }
`
