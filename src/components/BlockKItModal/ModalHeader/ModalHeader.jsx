import * as S from './ModalHeader.styles'

export const ModalHeader = ({ data }) => {
  return (
    <S.Header>
      <S.MyAppBLock>
        <S.AppLogo />
        {data.title && <S.AppTitle>{data.title.text}</S.AppTitle>}
      </S.MyAppBLock>
      <S.CloseButtonDiv>
        <S.CloseX />
      </S.CloseButtonDiv>
    </S.Header>
  )
}
