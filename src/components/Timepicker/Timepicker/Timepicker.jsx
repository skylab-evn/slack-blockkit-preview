import * as S from './Timepicker.styles';

export const Timepicker = ({ data }) => {
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
