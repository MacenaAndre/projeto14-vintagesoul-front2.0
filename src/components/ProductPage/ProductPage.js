import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductApi } from "../../service/VintageSoulService.js";
import styled from "styled-components";
import Header from "../Header/Header.js";
import ProductInfo from "./ProductInfo.js";
import WrapperButton from "../styled-components/WrapperButton.js";

export default function ProductPage() {
	const { idProduct } = useParams();
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);
	useEffect(() => {
		getProductApi({ idProduct })
			.then((res) => {
				setProduct(res.data);
				console.log(res.data);
			})
			.catch((res) => {
				alert(res.response.data);
			});
	}, [idProduct]);

	return (
		<>
			<Header />
			{!product.especifications ? (
				<p>loading...</p>
			) : (
				<Wrapper>
					<ProductInfo product={product} />
					<QuantityControl>
						<ButtonAdd>-</ButtonAdd>
						<input
							type="number"
							min="1"
							max={product.inventory}
							value={quantity}
							onChange={(e) => setQuantity(e.target.value)}
							required
						></input>
						<ButtonAdd onClick={() => alert("oi")}>+</ButtonAdd>						
					</QuantityControl>
					<WrapperButton value={"Adicionar ao carrinho"}/>
				</Wrapper>
			)}
		</>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	max-width: 600px;
`;
const ButtonAdd = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 20px;
	width: 20px;
	background-color: black;
	color: white;
	font-size: 15px;
	font-weight: 700;
	border-radius: 3px;	
`;
const QuantityControl = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 70px;
	input {
		display: flex;
		width: 20px;
		justify-content: center;
		align-items: center;
	}
`;
