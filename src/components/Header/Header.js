import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { getCartApi, getToken } from "../../service/VintageSoulService";
import logo from "../../assets/img/logo.jpeg";
import { useState, useEffect } from "react";
import {BsFillCartFill} from "react-icons/bs";
import {BiLogOut} from "react-icons/bi";


export default function Header() {
	const [userProducts, setUserProducts] = useState([]);
	const isLogged = getToken();
	const navigate = useNavigate();

	function logout() {
		if (window.confirm("Deseja sair da sua conta?")) {
			window.localStorage.removeItem("VintageSoul");
			navigate("/sign-in");
		}
	}

	useEffect(() => {
		const promise = getCartApi();
		promise.catch((error) => {
			if (error.code === "ERR_NETWORK") {
				return alert("Falha ao conectar com o servidor");
			}			
		});
		promise.then((res) => {
			setUserProducts(res.data);
		});
	}, []);
	return (
		<Wrapper>
			<Link to={"/"}>
				<img src={logo} alt="logo"></img>
			</Link>
			<Menu>
				{isLogged ? (
					<>
						<p>Olá, {isLogged.name}</p>
						<div>
						<Link to={"/checkout"}>
						<BsFillCartFill color="white" width="25px" height="25px" />
						</Link>
						<h2>{`(${userProducts.length})`}</h2>
						<BiLogOut color="white" width="25px" height="25px" onClick={() => logout()} />
						</div>
					</>
				) : (
					<>
						<Link to={"/sign-in"}>
							<p>Entrar</p>
						</Link>
						<Link to={"/sign-up"}>
							<p>Cadastre-se</p>
						</Link>
					</>
				)}
			</Menu>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 70px;
	background-color: black;
	color: white;
	padding: 15px;
	position: fixed;
	top: 0;
	left: 0;	
	z-index: 1;
	box-shadow: 0px 6px 6px 0px #00000045;

	img {
		height: 70px;
	}
	p {
		color: white;
		font-size: 14px;
		font-weight: 700;
	}
`;
const Menu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 200px;
	h2 {
		font-size: 10px;
	}
	div{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 65px;
	}
`;
