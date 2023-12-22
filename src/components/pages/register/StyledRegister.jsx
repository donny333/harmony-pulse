import styled from "styled-components";

const StyledRegister = styled.section`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;

    overflow-y: scroll;

    ::-webkit-scrollbar{
        display: none;
    }

    > form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 300px;
        > div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            > label {
                width: 130px;
                display: inline-block;
            }
            > input {
                border: none;
                border-radius: 5px;
                line-height: 2em;
                width: 270px;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            }
        }
        > p {
            margin: 0;
            font-size: 14px;
            color: red;
        }
        > button {
            background-color: white;
            border: none;
            height: 2em;
            width: 100%;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            margin-top: 15px;
            border-radius: 5px;
            transition: 250ms;
        }
        > button:hover {
            cursor: pointer;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
    }
`;

export default StyledRegister;