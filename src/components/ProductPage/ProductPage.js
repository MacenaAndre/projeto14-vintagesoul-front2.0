import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
	getProductApi,
	getToken,
	postCartApi,
} from "../../service/VintageSoulService.js";
import styled from "styled-components";
import Header from "../Header/Header.js";
import ProductInfo from "./ProductInfo.js";
import WrapperButton from "../styled-components/WrapperButton.js";
import Footer from "../Footer/Footer.js";

export default function ProductPage() {
	const navigate = useNavigate();
	const { idProduct } = useParams();
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);
	useEffect(() => {
		getProductApi({ idProduct })
			.then((res) => {
				setProduct(res.data);
			})
			.catch((res) => {
				alert(res.response.data);
			});
	}, [idProduct]);

	function increaseQuantity() {
		const newValue = Number(quantity) + 1;
		setQuantity(newValue);
	}
	function decreaseQuantity() {
		const newValue = Number(quantity) - 1;
		setQuantity(newValue);
	}

	function addToCart(e) {
		e.preventDefault();
		const isLogged = getToken();
		if (!isLogged) {
			alert("Você não está logado!");
			navigate("/sign-in");
		}
		const request = postCartApi({
			image: product.image,
			title: product.title,
			price: product.price,
			idProduct: product._id,
			quantity: quantity,
		});
		request.then(() => {
			alert("Produto adicionado ao carrinho");
			navigate("/");
		});
		request.catch((error) => {
			if (error.code === "ERR_NETWORK") {
				return alert("Falha ao conectar com o servidor");
			}
			alert(error.response.data);
		});
	}

	return (
		<>
			<Header />
			{!product.especifications ? (
				<p>loading...</p>
			) : (
				<Wrapper>
					<ProductInfo product={product} />
					<form onSubmit={addToCart}>
						<QuantityControl>
							<p>Quantidade:</p>
							<ButtonAdd onClick={() => decreaseQuantity()}>-</ButtonAdd>
							<input
								type="number"
								min="1"
								max={product.inventory}
								value={quantity}
								onChange={(e) => setQuantity(e.target.value)}
								required
							></input>
							<ButtonAdd onClick={() => increaseQuantity()}>+</ButtonAdd>							
						</QuantityControl>
						<h4>Disponivel em estoque: {product.inventory}</h4>
						
						<WrapperButton value={"Adicionar ao carrinho"} />
					</form>
				</Wrapper>
			)}
			<Footer />
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
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	h4 {
		font-size: 14px;
		color: green;
		margin-top: 3px;
		margin-bottom: 25px;
	}
	p{
		margin-right: 15px;
	}
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
	justify-content: center;
	align-items: center;
	width: 100%;
	input {
		display: flex;
		width: 40px;
		text-align: center;
		margin: 0 2px;
	}
`;
