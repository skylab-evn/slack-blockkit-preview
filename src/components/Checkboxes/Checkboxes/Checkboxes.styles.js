import styled from 'styled-components';

export const Main = styled.div`

width: 412px;
display: flex;
justify-content: flex-start;
`;


export const Text = styled.p`
margin-top: 15px;
width: 100%;
  text-align: left;
  font-weight: 600;
`;

export const CheckboxesDiv = styled.div`
 
`

export const Inner = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 margin: 0;
`

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
width: 13px;
height: 13px; 
margin: 0px 12px 0px 0px;
`;

export const CheckboxLabel = styled.p`
margin:7px 0px;
font-weight: 400;
font-size: 15px;
`


