import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { getCart, getToken } from "../../service/VintageSoulService";
import logo from "../../assets/img/logo.jpeg";
import { useState,useEffect } from "react";

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
		const promise = getCart();
		promise.catch((error) => {
			if (error.code === "ERR_NETWORK") {
				return alert("Falha ao conectar com o servidor");
			}
			alert(error.response.data);
		});
		promise.then((res) => {			
			setUserProducts(res.data);
		});
	}, []);
	return (
		<Wrapper>
			<img src={logo} alt="logo"></img>
			<Menu>
				{isLogged ? (
					<>
						<p>Olá, {isLogged.name}</p>
						<Link to={"/checkout"}>
							<p>ck</p>						
						</Link>
						<h2>{`(${userProducts.length})`}</h2>
						<p onClick={() => logout()}>L</p>
							
							
						
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
	img {
		height: 100%;
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
	width: 150px;
	h2{
		font-size: 10px;
	}
`;
