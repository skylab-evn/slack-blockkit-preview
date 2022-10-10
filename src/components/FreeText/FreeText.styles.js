import styled from "styled-components";

export const Main = styled.div`
  
`

export const Input = styled.input`
width: 100%;
height: 20px;
border-radius: 5px;
outline: none;
border: 1px solid #c1c1c1;
padding: 5px;

&:focus{
    transition: 0.2s;
    box-shadow: 0px 0px 8px #0e85ff;
    border: 1px solid #617cff;
}
`

export const Label = styled.p`
 margin: 0 !important;
 text-align: left;
 font-size:15px;

`