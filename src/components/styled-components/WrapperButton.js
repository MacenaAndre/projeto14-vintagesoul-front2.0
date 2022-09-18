import styled from "styled-components";

export default function WrapperButton({ value, disabled }) {
	return <Wrapper disabled={disabled}>{value}</Wrapper>;
}
const Wrapper = styled.button`
	height: 58px;
	width: 90%;
	border-radius: 5px;
	background-color: #000000;
	border: 1px solid #000000;
	box-shadow: none;
	cursor: pointer;
	font-size: 20px;
	font-weight: 700;
	line-height: 23px;
	text-align: center;
	color: #ffffff;
	margin-top: 5px;
	margin-bottom: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	/* &&:disabled {
		background-color: #ffffff;
		opacity: 0.7;
	} */
`;
