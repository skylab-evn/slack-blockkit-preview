import * as S from './Datepicker.styles'
import dayjs from 'dayjs'

export const Datepicker = ({ data }) => {
 
  return (
    <>
      <S.Main>
        <S.Text>{data.label.text}</S.Text>
        <S.Datepicker>
          <S.Inner>
            <S.Calendar />  
            {dayjs(data.element.initial_date).format('MM/DD/YYYY')}
          </S.Inner>
          <S.Icon />
        </S.Datepicker>
      </S.Main>
    </>
  )
}
