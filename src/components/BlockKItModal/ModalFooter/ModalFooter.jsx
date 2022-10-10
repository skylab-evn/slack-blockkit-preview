import * as S from './ModalFooter.styles'

export const ModalFooter = ({ data }) => {
  return (
    <>
      <S.Line />
      <S.Main>
        <S.Inner>
          {data.close && <S.CancelButton>{data.close.text}</S.CancelButton>}
          {data.submit && <S.SubmitButton>{data.submit.text}</S.SubmitButton>}
        </S.Inner>
      </S.Main>
    </>
  )
}
