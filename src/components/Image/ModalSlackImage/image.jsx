import * as S from './image.styles'

export const ModalSlackImage = ({data}) => {
    return (
        <S.Main>
            {data.title.text && <S.Text>{data.title.text}</S.Text>}
           <S.Image src={data.image_url} alt="ddd" />
          
        </S.Main>
    )
}