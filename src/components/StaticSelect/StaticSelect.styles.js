import styled from "styled-components";
import { ReactComponent as DownIcon } from '../../images/downIcon.svg'


export const Main = styled.div`

`

export const StaticSelect = styled.div`
 width: 50%;
 height: 36px;
 padding:0px 5px;
 border-radius: 5px;
 background-color: inherit;
 border: 1px solid #c1c1c1;
 text-align: left;
 color:#7c7c7c;
 cursor: default;
 display: flex;
 align-items: center;
 justify-content: space-between;
 font-size: 13px;
 font-weight: 400;

`

export const Label = styled.h3`
  font-size: 15px;
 text-align: left;
 margin: 10px 0;
font-weight: 600;
`

export const Icon = styled(DownIcon)`
    width: 20px;
  height: 22px;
`
