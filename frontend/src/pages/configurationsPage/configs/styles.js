import styled from "styled-components";
import { configContainerMediaStyles, configsMediaStyles, containerMediaStyles, svgMediaStyles, tagsMediaStyles, titleMediaStyles } from "./responsive";

export const ConfigContainer = styled.div`
    display: flex;
    ${configContainerMediaStyles};
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 82vw;
    height: 100vh;
    margin-left: 18vw;
    ${containerMediaStyles};
`;

export const Configs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    width: 30vw;
    height: 50vh;
    border-radius: 1vh;
    ${configsMediaStyles};

    .title {
        display: flex;
        align-items: center;
        padding: 1rem;
        gap: 1rem;
        display: flex;
        width: 28vw;
        height: 10vh;
        border-bottom: 0.1vh solid #e7e8eb;
        ${titleMediaStyles};

        svg {
            font-size: 1.5vw;
            ${svgMediaStyles};
        }
    }
`;

export const Tags = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 40vh;
    width: 28vw;
    ${tagsMediaStyles};
`;