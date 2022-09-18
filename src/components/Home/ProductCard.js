import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ProductCard({ title, image, genre, price, id }) {
    const navigate = useNavigate();
    const formatedPrice = (price/100).toFixed(2).split(".").join(",");
    const splitedPrice = ((price + 1)/300).toFixed(2).split(".").join(",")

    return (
        <>
            <Card onClick={() => navigate(`/product/${id}`)}>
                <img src={image} alt="productimage"></img>
                <h1>{title}</h1>
                <h2>{genre.map((value, index) => {
                    if(index === genre.length - 1) {
                       return  <span key={index}>{value}</span>
                    } else {
                       return  <span key={index}>{value}, </span>
                    }
                })}</h2>
                <h3>R$ {formatedPrice}</h3>
                <h4>ou 3x R$ {splitedPrice}</h4>
            </Card>
        </>
    );
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #edede9;
	height: 230px;
	width: 160px;
	margin: 15px;
	padding: 10px 5px;
    border-radius: 15px;
    cursor: pointer;

    & img {
        width: 90%;
        height: 120px;
    }

    h1 {
        margin-top: 10px;
        font-size: 13px;
        padding-left: 10px;
        width: 100%;
    }

    h2{
        margin-top: 3px;
        font-size: 10px;
        font-weight: 400;
        color: grey;
        padding-left: 10px;
        width: 100%;
    }

    h3 {
        margin-top: 32px;
        font-size: 13px;
        padding-left: 10px;
        width: 100%;
    }
    h4 {
        margin-top: 3px;
        font-size: 10px;
        color: red;
        padding-left: 10px;
        width: 100%;
    }
`