import styled from "styled-components";

const StyledLinksMain = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    a{
        text-decoration: none;
        color: #9a9a9a;
    }
    a.active{
        color: #089cd4;
    }
`;

export default StyledLinksMain;