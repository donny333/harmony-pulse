import styled from "styled-components";

const StyledBackground = styled.div`
    background-color: #c3d7df;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    display: grid;
    grid-template-columns: 15vw 70vw 15vw;
    grid-template-rows: 15vw 1fr 15vw;

    .lightColorDiv{
        background-color: #cedfe5;
    }
    >div:nth-child(2){
        grid-column: 3;
    }
    >div:nth-child(3){
        grid-row: 3;
    }
    >div:nth-child(4){
        grid-column: 3;
        grid-row: 3;
    }

`;

export default StyledBackground;