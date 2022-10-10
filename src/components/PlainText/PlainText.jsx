import * as S from './PlainText.styles'

export const PlainText = ({ data }) => {
  return (
    <S.Main>{data.text && <S.PlainText>{data.text.text}</S.PlainText>}</S.Main>
  )
}
