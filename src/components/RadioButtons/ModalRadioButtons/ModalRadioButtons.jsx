import * as S from './ModalRadioButtons.styles';
import { ModalRadioButton } from './ModalRadioButton';

export const ModalRadioButtons = ({ data }) => {
  return (
    <>
    <S.Main>
      <S.Text>{data.label.text}</S.Text>
    </S.Main>
    <S.RadioButtonsDiv>
      {data?.element?.options?.map((item) => (
        <ModalRadioButton label={item.text.text} />
      ))}
    </S.RadioButtonsDiv>
    </>
  );
};
