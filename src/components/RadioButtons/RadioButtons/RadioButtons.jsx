import { RadioButton } from './RadioButton';
import * as S from './RadioButton.styles';

export const RadioButtons = ({ data }) => {
  return (
    <>
    <S.Main>
      <S.Text>{data.label.text}</S.Text>
    </S.Main>
    <S.RadioButtonsDiv>
      {data?.element?.options?.map((item) => (
        <RadioButton  label={item.text.text}/>
      ))}
    </S.RadioButtonsDiv>
    </>
  );
};
