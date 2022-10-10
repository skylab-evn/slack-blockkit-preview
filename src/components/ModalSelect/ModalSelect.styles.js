import styled from "styled-components";
import { ReactComponent as DownIcon } from '../../images/downIcon.svg'

export const Main = styled.div`

 justify-content: space-between;
 align-items: center;
`

export const Text = styled.p`
 font-size: 15px;
 text-align: left;
`

export const Select = styled.div`
 width: 472px;
 height: 30px;
 border-radius:5px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 color:#7c7c7c;
 cursor: default;
 border: 1px solid #c1c1c1;
 padding:5px;
 font-size: 13px;
    font-weight: 400;
`


export const Icon = styled(DownIcon)`
    width: 25px;
    height: 20px;
`