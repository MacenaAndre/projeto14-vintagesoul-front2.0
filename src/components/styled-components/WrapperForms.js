import styled from "styled-components";

function WrapperFormAuth({ children }) {
	return (
		<SignIn>
			<Wrapper>{children}</Wrapper>
		</SignIn>
	);
}

const SignIn = styled.div`
	& img {
		height: 150px;
		max-width: 300px;
		width: 100%;
		object-fit: cover;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	background-color: #ffffff;
	padding-top: 80px;	
	p {		
		font-size: 15px;
		font-weight: 700;
		line-height: 18px;
		text-align: center;	
		margin-bottom: 40px;	
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 15px;
		width: 100%;
		height: auto;
	}
`;
export { WrapperFormAuth };
