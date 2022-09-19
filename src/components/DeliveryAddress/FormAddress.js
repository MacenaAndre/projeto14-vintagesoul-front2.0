import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { editUserAddress } from "../../service/VintageSoulService";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { WrapperFormAuth } from "../styled-components";
import WrapperButton from "../styled-components/WrapperButton";
import WrapperInput from "../styled-components/WrapperInput";

export default function FormAddress({ refreshAddress, setRefreshAddress }) {
    const [state, setState] = useState("");
	const [city, setCity] = useState("");
	const [district, setDistrict] = useState("");
	const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [complement, setComplement] = useState("");
	const [buttonAddress, setButtonAddress] = useState(false);
	
	
	

    function AddressConecction(e) {
		e.preventDefault();
		setButtonAddress(true);
		
		const address = {
			state,
			city,
			district,
			street,
			number: Number(number),
			complement
		};

		editUserAddress(address) 
			.catch((res) => {
				alert(res.message)
				setButtonAddress(false)
			})
			.then((res) => {
				setRefreshAddress(!refreshAddress);
			})
	}

	return (
		<>
            <Header/>
			<WrapperFormAuth>
				<Title>Preencha o seu endereço de Entrega:</Title>
				<form onSubmit={AddressConecction}>
					<WrapperInput
						placeholder="Estado"
						type="text"
						value={state}
						disabled={buttonAddress}
						onChange={(e) => setState(e.target.value)}
						required
					></WrapperInput>
					<WrapperInput
						placeholder="Cidade"
						type="text"
						value={city}
						disabled={buttonAddress}
						onChange={(e) => setCity(e.target.value)}
						required
					></WrapperInput>
					<WrapperInput
						placeholder="Bairro"
						type="text"
						value={district}
						disabled={buttonAddress}
						onChange={(e) => setDistrict(e.target.value)}
						required
					></WrapperInput>
					<WrapperInput
						placeholder="Rua"
						type="text"
						value={street}
						disabled={buttonAddress}
						onChange={(e) => setStreet(e.target.value)}
						required
					></WrapperInput>
                    <WrapperInput
						placeholder="Número"
						type="number"
                        min="1"
						value={number}
						disabled={buttonAddress}
						onChange={(e) => setNumber(e.target.value)}
						required
					></WrapperInput>
                    <WrapperInput
						placeholder="Complemento"
						type="text"
						value={complement}
						disabled={buttonAddress}
						onChange={(e) => setComplement(e.target.value)}
						required
					></WrapperInput>
					{!buttonAddress ? (
						<WrapperButton value={"Cadastrar"} disabled={buttonAddress} />
					) : (
						<WrapperButton
							value={<ThreeDots color="white" height="13px" />}
							disabled={buttonAddress}
						/>
					)}
				</form>
				<Footer/>
			</WrapperFormAuth>
		</>
	);
}

const Title = styled.h4`
    margin: 100px 0px 0px 0px;
`