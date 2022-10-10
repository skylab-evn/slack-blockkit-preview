import styled from "styled-components";

export const Main = styled.div`
/* width: 100%; */
 display: flex;
 justify-content: flex-end;
 align-items: center;
 position: relative;

 `

export const Inner = styled.div`
 display: flex;
 padding: 20px;
 

`

export const Line = styled.div`
 display: flex;
 justify-content: center;
 height: 1px;
 width:100%;
 background-color: #dbdbdb;
 margin-top: 20px;
`

export const CancelButton = styled.button`
height: 36px;
 color:#1d1c1d;
 background-color: inherit;
 padding:0 12px;
 outline: none;
 border: 1px solid #bdbdbd;
 border-radius: 5px;
 cursor: pointer;
 font-size: 15px;
font-weight: 700;
 &:hover{
    background-color: #f3f3f3;
    transition: 0.2s;
}
`

export const SubmitButton = styled.button`
height: 36px;
 color: white;
 background-color: #007a5a;
 padding:0 12px;
  outline: none;
 border-radius: 5px;
 border: 1px solid #007a5a;
 margin: 0px 0px 0px 12px;
 cursor: pointer;
 font-size: 15px;
font-weight: 700;
&:hover{
    background-color: #018d68;
    transition: 0.2s;
}
`