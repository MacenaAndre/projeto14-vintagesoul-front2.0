import styled from "styled-components";

export default function WrapperInput({
	placeholder,
	type,
	value,
	disabled,
	...otherProps
}) {
	return (
		<Wrapper
			required
			disabled={disabled}
			value={value}
			placeholder={placeholder}
			type={type}
			{...otherProps}
		/>
	);
}

const Wrapper = styled.input`
	height: 58px;
	width: 90%;
	border-radius: 5px;
	background-color: #ffffff;
	border: 1px solid #000000;
	padding-left: 20px;
	margin: 5px 0px;
	font-size: 20px;
	font-weight: 400;
	line-height: 23px;
	color: #000000;

	&&::placeholder {
		font-size: 20px;
		font-weight: 400;
		line-height: 23px;
		color: #000000;
	}
	&&:disabled {
		background-color: lightgray;
		color: #afafaf;
	}
`;
