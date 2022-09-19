import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WrapperFormAuth } from "../styled-components";
import { ThreeDots } from "react-loader-spinner";
import { SignUpApi } from "../../service/VintageSoulService";
import WrapperInput from "../styled-components/WrapperInput";
import WrapperButton from "../styled-components/WrapperButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styled from "styled-components";

export default function DeliveryAdress() {
    const [state, setState] = useState("");
	const [city, setCity] = useState("");
	const [district, setDistrict] = useState("");
	const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [complement, setComplement] = useState("");
	const [buttonSignUp, setButtonSignUp] = useState(false);
	const navigate = useNavigate();

	function SignUpConecction(e) {
		e.preventDefault();
		setButtonSignUp(true);
		if (district !== street) {
			setButtonSignUp(false);
			return alert("As senhas digitadas não coincidem!");
		}
		const body = {
			state,
			city,
			district,
		};

		SignUpApi(body)
			.then((res) => {
				alert("Usuário cadastrado com sucesso!");
				navigate("/sign-in");
			})
			.catch((res) => {
				setButtonSignUp(false);
				alert(res.response.data);
			});
	}

	return (
		<>
            <Header/>
			<WrapperFormAuth>
				<Title>Preencha o seu endereço de Entrega:</Title>
				<form onSubmit={SignUpConecction}>
					<WrapperInput
						placeholder="Estado"
						type="text"
						value={state}
						disabled={buttonSignUp}
						onChange={(e) => setState(e.target.value)}
						required
					></WrapperInput>
					<WrapperInput
						placeholder="Cidade"
						type="text"
						value={city}
						disabled={buttonSignUp}
						onChange={(e) => setCity(e.target.value)}
						required
					></WrapperInput>
					<WrapperInput
						placeholder="Bairro"
						type="text"
						value={district}
						disabled={buttonSignUp}
						onChange={(e) => setDistrict(e.target.value)}
						required
					></WrapperInput>
					<WrapperInput
						placeholder="Rua"
						type="text"
						value={street}
						disabled={buttonSignUp}
						onChange={(e) => setStreet(e.target.value)}
						required
					></WrapperInput>
                    <WrapperInput
						placeholder="Número"
						type="number"
                        min="1"
						value={number}
						disabled={buttonSignUp}
						onChange={(e) => setNumber(e.target.value)}
						required
					></WrapperInput>
                    <WrapperInput
						placeholder="Complemento"
						type="text"
						value={complement}
						disabled={buttonSignUp}
						onChange={(e) => setComplement(e.target.value)}
						required
					></WrapperInput>
					{!buttonSignUp ? (
						<WrapperButton value={"Cadastrar"} disabled={buttonSignUp} />
					) : (
						<WrapperButton
							value={<ThreeDots color="white" height="13px" />}
							disabled={buttonSignUp}
						/>
					)}
				</form>
				<Footer/>
			</WrapperFormAuth>
		</>
	);
}

const Title = styled.h4`
    margin: 30px 0px;
`