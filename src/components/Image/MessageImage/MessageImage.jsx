import * as S from './MessageImage.styles'

export const MessageSlackImage = ({data}) => {
    return(
        <S.Main>
            {data.title.text && <S.Text>{data.title.text}</S.Text>}
            <S.Image src={data.image_url}/>
        </S.Main>
    )
}