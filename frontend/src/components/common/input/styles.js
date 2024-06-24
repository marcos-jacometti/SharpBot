import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5vw;
    border-radius: 1vh;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4), 0 12px 30px 0 rgba(0, 0, 0, 0.3);
    padding: 1rem;
    height: 4vh;
    
    svg{
        font-size: 1vw;
    }

    input{
        border: none;
        background-color: transparent;
        width: 100%;
        font-size: 0.8vw;
        outline: none;
    }
`;