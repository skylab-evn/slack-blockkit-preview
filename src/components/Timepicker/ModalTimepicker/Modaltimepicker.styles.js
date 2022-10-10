import styled from 'styled-components';
import { ReactComponent as DownIcon } from '../../../images/downIcon.svg';
import { ReactComponent as ClockIcon } from '../../../images/clock.svg'

export const Main = styled.div``;

export const Text = styled.p`
  font-size: 15px;
  text-align: left;
  font-weight: 600;
`;

export const Timepicker = styled.div`
  padding: 5px;
  border: 1px solid #c1c1c1;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: default;
  color: #1d1c1d;
  font-size: 13px;
 font-weight: 400;
`;

export const TimepickerInner = styled.div`
 display: flex;
 align-items: center;
`;

export const TimepickerDownIcon = styled(DownIcon)`
 width: 20px;
 width: 20px;
`;

export const Clock = styled(ClockIcon)`
 width: 15px;
 height: 15px;
 margin-right:7px;
`
