import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { WrapperFormAuth } from "../styled-components";
import { ThreeDots } from "react-loader-spinner";
import logo from "../../assets/img/Vintage Soul Store.png";
import { SignInApi } from "../../service/VintageSoulService";
import WrapperInput from "../styled-components/WrapperInput";
import WrapperButton from "../styled-components/WrapperButton";

export default function SignIn() {
	const [emailSignIn, setEmailSignIn] = useState("");
	const [passwordSignIn, setPasswordSignIn] = useState("");
	const [buttonSignIn, setButtonSignIn] = useState(false);
	const navigate = useNavigate();

	function SignInConecction(e) {
		e.preventDefault();
		setButtonSignIn(true);
		const body = {
			email: emailSignIn,
			password: passwordSignIn,
		};

		SignInApi(body)
			.then((res) => {
				localStorage.setItem(
					"VintageSoul",
					JSON.stringify({ name: res.data.name, token: res.data.token })
				);
				navigate("/");
			})
			.catch((res) => {
				setButtonSignIn(false);
				alert(res);
			});
	}

	return (
		<>
			<WrapperFormAuth>
				{!buttonSignIn ? (
					<Link to={"/"}>
						<img src={logo} alt="logo"></img>
					</Link>
				) : (
					<img src={logo} alt="logo"></img>
				)}
				<form onSubmit={SignInConecction}>
					<WrapperInput
						placeholder="E-mail"
						type="email"
						value={emailSignIn}
						disabled={buttonSignIn}
						onChange={(e) => setEmailSignIn(e.target.value)}
						required
					></WrapperInput>
					<WrapperInput
						placeholder="Senha"
						type="password"
						value={passwordSignIn}
						disabled={buttonSignIn}
						onChange={(e) => setPasswordSignIn(e.target.value)}
						required
					></WrapperInput>
					{!buttonSignIn ? (
						<WrapperButton value={"Entrar"} disabled={buttonSignIn} />
					) : (
						<WrapperButton
							value={<ThreeDots color="white" height="13px" />}
							disabled={buttonSignIn}
						/>
					)}
				</form>
				{!buttonSignIn ? (
					<Link to="/sign-up">
						<p>Primeira Vez? Cadastre-se!</p>
					</Link>
				) : (
					<p>Primeira Vez? Cadastre-se!</p>
				)}
			</WrapperFormAuth>
		</>
	);
}
