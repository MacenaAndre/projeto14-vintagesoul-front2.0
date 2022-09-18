import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductApi } from "../../service/VintageSoulService.js";
import styled from "styled-components";
import Header from "../Header/Header.js";

export default function ProductPage() {
	const { idProduct } = useParams();
	const [product, setProduct] = useState({});
	useEffect(() => {
		getProductApi({ idProduct })
			.then((res) => {
				setProduct(res.data);
			})
			.catch((res) => {
				alert(res.response.data);
			});
	}, [idProduct]);

	function priceTags(price) {
		const formatedPrice = (price / 100).toFixed(2).split(".").join(",");
		const splitedPrice = ((price + 1) / 300).toFixed(2).split(".").join(",");
		return { formatedPrice, splitedPrice };
	}

	return (
		<>
			<Header />
			<Wrapper>
				<img src={product.image} alt={product.title} />
				<h1>{product.title}</h1>
				<h2>R$ {priceTags(product.price).formatedPrice}</h2>
				<h3>ou 3x R${priceTags(product.price).splitedPrice}</h3>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;	
	margin-top: 70px;
	max-width: 600px;
	img {
		width: 100%;
		height: auto;
	}
	h1 {
		font-size: 20px;
		margin: 10px 0;
	}
	h2 {
		font-size: 25px;
		font-weight: 700;
	}
	h3 {
		font-size: 14px;
		font-weight: 400;
		margin: 5px 0;
	}
`;