import * as S from './ModalSelect.styles'

export const ModalSelect = ({ data }) => {
  return (
    <>
      <S.Main>
       <S.Text>{data.label.text}</S.Text>
        <S.Select>
          {data.element.placeholder.text}
          <S.Icon />
        </S.Select>
      </S.Main>
    </>
  )
}
