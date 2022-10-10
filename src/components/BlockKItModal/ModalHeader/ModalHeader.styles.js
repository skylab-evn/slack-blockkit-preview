import styled from "styled-components";
import { ReactComponent as Logo } from '../../../images/LogoRegardify.svg'
import { ReactComponent as CloseIcon } from '../../../images/closeIcon.svg'


export const Header = styled.div`
 display: flex;
 justify-content:space-between ;
 align-items: center;
 padding:0px 20px;
`
export const AppTitle = styled.p`
 font-size: 22px;
 color: #1d1c1d;
 font-weight: 900;
`

export const MyAppBLock = styled.div`
 display: flex;
 align-items: center;
`

export const AppLogo = styled(Logo)`
 width: 36px;
 height: 36px;
 margin: 0px 16px 0px 0px;
`
export const CloseX = styled(CloseIcon)`
 width: 20px;
 height: 20px;

`


export const CloseButtonDiv = styled.div`
 width: 36px;
 height: 36px;
 background-color: inherit;
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;
 border-radius: 5px;
 &:hover{
    background-color: #f5f5f5;
    transition: 0.2s;
 }
`
