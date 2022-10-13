import styled from "styled-components";
import { ReactComponent as DownIcon } from '../../images/downIcon.svg'
import { ReactComponent as CalendarIcon } from '../../images/calendar.svg'

export const Main = styled.div`

 justify-content: space-between;
 align-items: center;
`

export const Text = styled.p`
font-size: 15px;
 text-align: left;
 margin: 10px 0;
font-weight: 600;
`

export const Datepicker = styled.div`
 width: 50%;
 height: 32px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 font-size: 13px;
 cursor: default;
 padding: 0px 5px;
 border-radius: 5px;
 background-color: inherit;
 border: 1px solid #c1c1c1;
 font-size: 13px;
 font-weight: 400;
 color: #1d1c1d;
`

export const Icon = styled(DownIcon)`
width: 20px;
height: 20px;
`
export const Calendar = styled(CalendarIcon)`
  width: 13px;
  height: 13px;
  margin-right: 5px;
`
export const Inner = styled.div`
 display: flex;
 align-items: center;
`