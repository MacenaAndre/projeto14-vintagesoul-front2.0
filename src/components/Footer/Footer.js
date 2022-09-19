import styled from "styled-components";

export default function Footer() {
    return (
        <>
            <WrapperFooter>
                <h1>Projeto Vintage Soul Store por:</h1>
                <h2>Francksuel Barbosa e André Macêna</h2>
            </WrapperFooter>
        </>
    );
};

const WrapperFooter = styled.div`
    height: 150px;
    margin-top: 40px;
    width: 100%;
    padding: 30px;
    background-color: black;
    box-shadow: 0px -6px 6px 0px #00000045;
    bottom: 0px;
    & h1 {
        color: white;
    }
    h2 {
        color: white;
        font-weight: 400;
    }
`