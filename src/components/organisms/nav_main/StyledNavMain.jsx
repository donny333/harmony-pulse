import styled from "styled-components";

const StyledNavMain = styled.nav`
    background-color: white;
    width: 100%;
    height: 100%;
    z-index: 2;
    padding-left: 30px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 10px;

    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    a{
        text-decoration: none;
        color: #9a9a9a;
    }
    a.active{
        color: #089cd4;
    }
`;

export default StyledNavMain;