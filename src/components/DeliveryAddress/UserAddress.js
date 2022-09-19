import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postSale } from "../../service/VintageSoulService";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import WrapperButton from "../styled-components/WrapperButton";

export default function UserAddress({ address, setBolean }) {
	const [buttonPurchase, setButtonPurchase] = useState(false);
	const navigate = useNavigate();

	function finalizePurchase(e) {
		setButtonPurchase(true);
		postSale()
			.then((res) => {
				navigate("/confirm-purchase");
			})
			.catch((res) => {
				setButtonPurchase(false);
				alert(res.response.data);
			});
	}

	return (
		<>
			<Header />
			<Wrapper>
				<Title>Endereço de entrega:</Title>
				<div>
					<h1>Estado:</h1>
					<h2>{address.state}</h2>
				</div>
				<div>
					<h1>Cidade:</h1>
					<h2>{address.city}</h2>
				</div>
				<div>
					<h1>Bairro:</h1>
					<h2>{address.district}</h2>
				</div>
				<div>
					<h1>Rua:</h1>
					<h2>{address.street}</h2>
				</div>
				<div>
					<h1>Número</h1>
					<h2>{address.number}</h2>
				</div>
				<Last>
					<h1>Complemento:</h1>
					<h2>{address.complement}</h2>
				</Last>
				{!buttonPurchase ? (
					<WrapperButton
						onClick={() => setBolean(false)}
						value="Editar endereço"
					/>
				) : (
					<WrapperButton
						value={<ThreeDots color="white" height="13px" />}
						disabled={buttonPurchase}
					/>
				)}
				{!buttonPurchase ? (
					<WrapperButton
						value={"Finalizar pedido"}
						disabled={buttonPurchase}
						onClick={() => finalizePurchase()}
					/>
				) : (
					<WrapperButton
						value={<ThreeDots color="white" height="13px" />}
						disabled={buttonPurchase}
					/>
				)}
			</Wrapper>
			<Footer />
		</>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 90vh;
	width: 100%;
	padding: 90px 20px 0px 20px;

	& div {
		display: flex;
		padding: 8px;
	}
	h2 {
		font-weight: 400;
		padding-left: 10px;
	}
`;
const Last = styled.div`
	margin-bottom: 30px;
`;
const Title = styled.div`
	font-size: 30px;
	margin-bottom: 20px;
`;
