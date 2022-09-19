import Header from "../Header/Header";
import banner from "../../assets/img/banner.jpeg"
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { getProductsApi } from "../../service/VintageSoulService";
import ProductCard from "./ProductCard";
import Footer from "../Footer/Footer";
import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai";

export default function Home() {
	const [productList, setProductList] = useState([]);
	let [limit, setLimit] = useState(1);

	useEffect(() => {
		getProductsApi(limit)
			.catch((res) => {
				alert(res.message);
			})
			.then((res) => {
				setProductList(res.data);
			})
	}, [limit])
	
	function nextPage() {		
		if(productList.length === 12){
			const newValue = Number(limit) + 1;
			setLimit(newValue);
		}	
	}
	function previousPage() {
		if (limit>1){
			const newValue = Number(limit) - 1;
			setLimit(newValue);
		}	
	}

	return (
		<>
			<Header/>
			<Banner src={banner} alt="banner"></Banner>			
			<WrapperHome>			
				<h1>Listando Todos os produtos</h1>
				<Products>
					{productList.map((value, index) => (
						<ProductCard
							key={index}
							id={value._id}
							title={value.title}
							image={value.image}
							genre={value.genre}
							price={value.price}
						/>
					))}
				</Products>
				<ScrollPage>
					<AiOutlineArrowLeft color="gray" onClick={() => previousPage()} />
					<h1>{limit}</h1>
					<AiOutlineArrowRight color="gray" onClick={() => nextPage()} />
				</ScrollPage>				
			</WrapperHome>
			<Footer/>
					</>
	);
}

const Banner = styled.img`
	width: 100%;
	height: 280px;
	object-fit: fill;
	margin-top: 70px;	
`
const WrapperHome = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;	
	max-width: 800px;
	margin: 30px auto 0 auto;
`
const Products = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 20px;
`
const ScrollPage = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	margin: 40px;

	& h1 {
		font-weight: 400;
		color: gray;
		cursor: pointer;
	}
`