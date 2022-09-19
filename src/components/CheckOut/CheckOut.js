import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCartApi } from "../../service/VintageSoulService";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import WrapperButton from "../styled-components/WrapperButton";
import CardCartItem from "./CradCartItem";
import {BsFillCartFill} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function CheckOut() {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [refresh, setRefresh] = useState(true);
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
    }, [setCart, refresh]);

    return (
        <>
            <Header />
            <Wrapper>
                <h3>Carrinho  <BsFillCartFill height="27px" width="27px"/></h3>
                {cart.map((value, index) => (
                <CardCartItem
                    key={index}
                    id={value._id}
                    image={value.image}
                    title={value.title}
                    quantity={value.quantity}
                    price={value.price}
                    refresh={refresh}
                    setRefresh={setRefresh}
                />
                ))}
                <Total>
                    <h1>Total</h1>
                    <h1>R$ {formatedTotal}</h1>
                </Total>                
                    <WrapperButton value="Ir para endereço de entrega"  onClick={()=>navigate("/adress")}/>
                
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

    & h3 {
        width: 90%;
        font-size: 27px;
        margin-bottom: 30px;
        margin-top: 10px;
    }
`
const Total = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 30px 0px 40px 0px;

    & h1 {
        font-size: 27px;
    }
`
