import styled from 'styled-components';

export const Main = styled.div`
width: 100%;
display: flex;
text-align: left;
`;

export const Text = styled.p`
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
margin:10px 0px;
font-weight: 400;
font-size: 15px;
`

