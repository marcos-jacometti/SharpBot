import React, { useEffect } from "react";
import { Container, Up, Close, Info } from "../styles";
import { IoClose } from "react-icons/io5";
import SelectExpert from "../../../../common/select/expert";

export default function CheckoutExpert({visible, setVisible}){
    useEffect(() => {
        if (visible) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [visible]);

    return(
        <Container $visible={visible}>
             <Up>
                <Close>
                    <button onClick={() => setVisible(false)}>
                        <IoClose />
                    </button>
                </Close>
                <h4>Antes de continuar, nos responda 1 pergunta!</h4>
                <Info>
                    <SelectExpert />
                </Info>
            </Up>
        </Container>
    );
}