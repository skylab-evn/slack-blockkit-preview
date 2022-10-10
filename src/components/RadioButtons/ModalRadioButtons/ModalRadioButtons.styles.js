import styled from 'styled-components';

export const Main = styled.div``;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 600;
  text-align: left;
`;

export const RadioButtonsDiv = styled.div`
 
`

export const Inner = styled.div`
 display: flex;
 justify-content: flex-start;
 align-items: center;
 margin: 0;
`
export const Radio = styled.input.attrs({ type: "radio" })`
width: 13px;
height: 13px; 
margin: 0px 12px 0px 0px;
`;

export const RadioLabel = styled.p`
margin:10px 0px;
font-weight: 400;
font-size: 15px;
`
