import styled from "styled-components";

export const Container = styled.div`
     ${props => props.$visible && `
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 85vw;
        height: 100vh;
        background-color: #3e90f8;
        z-index: 100;
    `}
`;

export const Close = styled.div`
    position: absolute;
    right: 7vw;
    top: 4.5vh;

    button {
        svg {
            font-size: 10.5vw;
        }
    }
`;