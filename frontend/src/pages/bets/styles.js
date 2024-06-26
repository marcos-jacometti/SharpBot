import styled from "styled-components";
import { betsContainerMediaStyles, betsSignalsMediaStyles, containerMediaStyles, gamesContentMediaStyles, svgMediaStyles, titleMediaStyles } from "./responsive";

export const BetsContainer = styled.div`
    display: flex;
    ${betsContainerMediaStyles};
`;

export const GamesContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 82vw;
    height: 100vh;
    margin-left: 18vw;
    ${gamesContentMediaStyles};
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 70vw;
    background-color: #fff;
    border-radius: 1vh;
    height: 90vh;
    ${containerMediaStyles};

    .title {
        display: flex;
        align-items: center;
        padding: 1rem;
        gap: 1rem;
        display: flex;
        width: 68vw;
        height: 10vh;
        border-bottom: 0.1vh solid #e7e8eb;
        ${titleMediaStyles};

        svg {
            font-size: 1.5vw;
            ${svgMediaStyles};
        }
    }
`;

export const BetsSignals = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 80vh;
    width: 68vw;
    gap: 3vh;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 1.5rem;
    box-sizing: border-box;
    ${betsSignalsMediaStyles};

    &::-webkit-scrollbar {
        width: 0.4vw;
        border-radius: 1vh;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 1vh;
    }

    &::-webkit-scrollbar-track {
        background-color: #f5f5f5;
        border-radius: 1vh;
    }
`;