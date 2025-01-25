import styled from "styled-components"

export default function Title({text,color}) {
    return(
        <TitlePage color={color}>
        
        {text}
        
        </TitlePage>
    )
}

const TitlePage = styled.div`
    font-family: "Sarala", serif; 
    color: ${(props)=>props.color};
    font-size: x-large;
    height: 10vh;
    font-weight: 400;
    align-content: center;
    justify-content: center;
`