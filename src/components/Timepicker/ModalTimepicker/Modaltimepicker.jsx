import * as S from './Modaltimepicker.styles';

export const ModalTimepicker = ({ data }) => {
  return (
    <S.Main>
      <S.Text>{data.label.text}</S.Text>
      <S.Timepicker>
        <S.TimepickerInner>
          <S.Clock/>
          {data.element.initial_time} PM</S.TimepickerInner>
        <S.TimepickerDownIcon />
      </S.Timepicker>
    </S.Main>
  );
};
