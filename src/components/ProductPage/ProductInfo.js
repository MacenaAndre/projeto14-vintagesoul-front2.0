import styled from "styled-components";

export default function ProductInfo({ product }) { 
    
	function priceTags(price) {
		const formatedPrice = (price / 100).toFixed(2).split(".").join(",");
		const splitedPrice = ((price + 1) / 300).toFixed(2).split(".").join(",");
		return { formatedPrice, splitedPrice };
	}

	return (
		<Wrapper>
			<img src={product.image} alt={product.title} />
			<h1>{product.title}</h1>
			<h2>R$ {priceTags(product.price).formatedPrice}</h2>
			<h3>ou 3x R${priceTags(product.price).splitedPrice}</h3>
			<div>
				<span>
					Descrição:<p>{product.especifications.description}</p>
				</span>
			</div>

			{product.type === "vinis" ? (
				<>
					<span>
						Artista:<p>{product.especifications.company}</p>
					</span>

					<span>
						Ano de lançamento:<p>{product.especifications.year}</p>
					</span>
				</>
			) : (
				<>
					<span>
						Marca:<p>{product.especifications.company}</p>
					</span>
					<span>
						Ano de fabricação:<p>{product.especifications.year}</p>
					</span>
				</>
			)}
			<h4>Disponivel em estoque: {product.inventory}</h4>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	margin-top: 70px;
	margin-bottom: 15px;
	img {
		width: 100%;
		height: auto;
	}
	span {
		font-size: 17px;
		font-weight: 700;
		display: flex;
		margin: 10px 0;
	}
	h1 {
		font-size: 20px;
		font-weight: 700;
		margin-bottom: 20px;
	}
	h2 {
		font-size: 25px;
		font-weight: 700;
		margin: 5px 0;
	}
	h3 {
		font-size: 14px;
		font-weight: 400;
		margin-bottom: 25px;
	}
	p {
		font-size: 14px;
		font-weight: 400;
		text-indent: 0.5em;
		text-align: justify;
	}
	h4 {
		font-size: 14px;
		color: green;
		margin-top: 25px;
	}
`;
