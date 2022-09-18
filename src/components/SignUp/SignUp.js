import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { WrapperFormAuth } from "../styled-components";
import { ThreeDots } from "react-loader-spinner";
import logo from "../../assets/img/Vintage Soul Store.png";
import { SignUpApi } from "../../service/VintageSoulService";
import WrapperInput from "../styled-components/WrapperInput";
import WrapperButton from "../styled-components/WrapperButton";

export default function SignUp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [buttonSignUp, setButtonSignUp] = useState(false);
	const navigate = useNavigate();

	function SignUpConecction(e) {
		e.preventDefault();
		setButtonSignUp(true);
		if (password !== passwordConfirm) {
			setButtonSignUp(false);
			return alert("As senhas digitadas não coincidem!");
		}
		const body = {
			name,
			email,
			password,
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
			<WrapperFormAuth>
				{!buttonSignUp ? (
					<Link to={"/"}>
						<img src={logo} alt="logo"></img>
					</Link>
				) : (
					<img src={logo} alt="logo"></img>
				)}
				<form onSubmit={SignUpConecction}>
					<WrapperInput
						placeholder="Nome"
						type="name"
						value={name}
						disabled={buttonSignUp}
						onChange={(e) => setName(e.target.value)}
						required
					></WrapperInput>
					<WrapperInput
						placeholder="E-mail"
						type="email"
						value={email}
						disabled={buttonSignUp}
						onChange={(e) => setEmail(e.target.value)}
						required
					></WrapperInput>
					<WrapperInput
						placeholder="Senha"
						type="password"
						value={password}
						disabled={buttonSignUp}
						onChange={(e) => setPassword(e.target.value)}
						required
					></WrapperInput>
					<WrapperInput
						placeholder="Confirme a senha"
						type="password"
						value={passwordConfirm}
						disabled={buttonSignUp}
						onChange={(e) => setPasswordConfirm(e.target.value)}
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
				{!buttonSignUp ? (
					<Link to="/sign-in">
						<p>Já tem cadastro? Faça o login</p>
					</Link>
				) : (
					<p>Já tem cadastro? Faça o login</p>
				)}
			</WrapperFormAuth>
		</>
	);
}
