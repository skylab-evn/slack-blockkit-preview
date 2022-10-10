import * as S from './Header.styles'

export const Header = ({ data }) => {
  return (
    <S.Main>
      <S.Text>{data.text.text}</S.Text>
    </S.Main>
  )
}
