import * as S from './MarkwodnText.styles'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const MarkdownText = ({ data }) => {
  return (
    <S.Main>
      <S.Text>
        {data.text && (
          <ReactMarkdown
            children={data.text.text}
            remarkPlugins={[remarkGfm]}
          />
        )}
      </S.Text>
    </S.Main>
  )
}
