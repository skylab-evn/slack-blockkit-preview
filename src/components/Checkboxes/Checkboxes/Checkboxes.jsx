import * as S from './Checkboxes.styles';
import { Checkbox } from './Checkbox';

export const Checkboxes = ({ data }) => {
  return (
    <>
    
    <S.Main>
      <S.Text>{data.label.text}</S.Text>
    </S.Main>
    <S.CheckboxesDiv>
      {data?.element?.options?.map((item) => (
        <Checkbox label={item.text.text}/>
      ))}
    </S.CheckboxesDiv>
  
    </>
  );
};
