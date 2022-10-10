import styled from "styled-components";
import { ReactComponent as DownIcon } from '../../images/downIcon.svg'


export const Main = styled.div`

`

export const StaticSelect = styled.div`
 width: 180px;
 height: 20px;
 padding:5px;
 border-radius: 5px;
 background-color: inherit;
 border: 1px solid #c1c1c1;
 text-align: left;
 color:#7c7c7c;
 cursor: default;
 margin-top: 20px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 font-size: 13px;
`

export const Label = styled.h3`
 text-align: left;
 font-size:15px;
 margin: 0;
`

export const Icon = styled(DownIcon)`
    width: 10px;
    height: 10px;
`
