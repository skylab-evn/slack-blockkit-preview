import styled from 'styled-components'
import { ReactComponent as LogoRegardify } from './images/LogoRegardify.svg'

export const Self = styled.div`
 display: flex;
 justify-content: center;
 margin-top: 100px;
 `

export const Main = styled.div`
   width: 100%;
   /*height: 100%; */
   display: flex;
   flex-direction: column;
   align-items: center;
   max-width: 412px;
 
`

export const MainBlock = styled.div``

export const Header = styled.div`
width:100%;
height: 20px;
display: flex;
align-items: center;

`



export const MainHeader = styled.div`
display: flex;
width: 100%;
`


export const BotName = styled.p`
 font-size: 16px;
 font-weight: 900;
`

export const App = styled.div`
 background-color: #dde8ed;
 padding: 2px;
 color: #363636;
 font-size: 10px;
 margin-left: 7px;
`
export const LogoDiv = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 margin-right:7px ;
`

export const Logo = styled(LogoRegardify)`
 width: 36px;
 height: 36px;
`

export const DateDiv = styled.div`
 margin-left: 7px;
 font-size: 12px;
 color: #616061;
`

