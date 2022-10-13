import styled from "styled-components";

export const Main = styled.div`
 
`

export const Input = styled.div`
/* width: 100%; */
padding: 0px 5px;
height: 36px;
border-radius: 5px;
outline: none;
border: 1px solid #c1c1c1;
/* padding: 7px; */
color: #1d1c1d;
  font-size: 13px;
 font-weight: 400;
 display: flex;
 align-items: center;
&:focus{
    transition: 0.2s;
    box-shadow: 0px 0px 8px #0e85ff;
    border: 1px solid #617cff;
}
`

export const Label = styled.p`
 font-size: 15px;
 text-align: left;
 margin: 10px 0;
 font-weight: 600;
`