
import styled from "styled-components";
import axios from "axios";
import Button from "./Button";
import { useNavigate } from "react-router-dom";



export default function BuyerForm ({CPF,setCPF,name,setName,seats}){
    const navigate = useNavigate()

    function submitForm(event){
        event.preventDefault()
        if (seats.length >= 1){


        const promise = axios.post(`https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`,{
            ids: {seats},
	        name: {name},
	        cpf: {CPF}
        })
        promise.then((res)=>{res.status = 200 ? navigate("/sucesso"): alert("Sinto Muito, houve algum erro.")})
        promise.catch((error)=>console.log(error))
        
    }else{
        alert("Você deve escolher pelo menos 1 assento")
    }}

    function handleCPFChange  (e) {
        const value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
        let formattedCPF = value;
    
        // Aplica a formatação
        if (value.length > 3 && value.length <= 6) {
          formattedCPF = value.replace(/(\d{3})(\d+)/, "$1.$2");
        } else if (value.length > 6 && value.length <= 9) {
          formattedCPF = value.replace(/(\d{3})(\d{3})(\d+)/, "$1.$2.$3");
        } else if (value.length > 9) {
          formattedCPF = value.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, "$1.$2.$3-$4");
        }
    
        setCPF(formattedCPF); // Atualiza o estado com o CPF formatado
      };
    
    
    return(
        <>
        <Form onSubmit={submitForm}>
            <label >Nome do comprador(a)</label>
           <input type="text" 
           placeholder="Digite seu nome..."
            required
            onChange={(e)=>{setName(e.target.value)}}
            ></input>
           <label>CPF do comprador(a)</label>
           <input type="text" 
           placeholder="Digite seu CPF neste formato: XXX.XXX.XXX-XX"
           value={CPF} 
           onChange={handleCPFChange}
           pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
           required></input>
           <Button type="submit" text="Reservar assento(s)" ></Button>
        </Form>
        </>
      )
}

const Form = styled.form`
margin-top: 2vh;
width: 90%;

display: flex;
flex-direction: column;
gap: 1vh;
    label{
        font-family: "Sarala", serif; 
        color: white;
        font-size: medium;
    }

    input{
        height: 6vh;
        border-radius: 8px;
        font-family: "Sarala", serif;
        overflow: auto;
        border: 1px solid #D4D4D4;
        margin-bottom: 2vh;

    }
    input::placeholder{
        color: #AFAFAF;
    }

    

    
`