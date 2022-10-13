import styled from 'styled-components';
import { ReactComponent as DownIcon } from '../../../images/downIcon.svg';
import { ReactComponent as ClockICon } from '../../../images/clock.svg'

export const Main = styled.div`
  width: 390px;
`;

export const Text = styled.p`
 font-size: 15px;
 text-align: left;
 margin: 10px 0;
font-weight: 600;
`;

export const Timepicker = styled.div`
  width: 50%;
  height: 32px;
  border: 1px solid #c1c1c1;  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0px 5px;
  color: #1d1c1d;
  font-size: 13px;
  `

export const TimepickerInner = styled.div`
display: flex;
align-items: center;
`;

export const TimepickerDownIcon = styled(DownIcon)`
width: 20px;
height: 20px;
`;

export const Clock = styled(ClockICon)`
 width: 15px;
 height: 15px;
 margin-right:7px;
 `