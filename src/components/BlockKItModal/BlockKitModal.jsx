import * as S from './BlockKitModal.styles'
import { ModalContent } from './ModalContent/ModalContent'
import { ModalFooter } from './ModalFooter/ModalFooter'
import { ModalHeader } from './ModalHeader/ModalHeader'

export const BlockKitModal = ({ data }) => {
  return (
    <S.Self>
      <S.Main>
        <ModalHeader data={data} />
        <ModalContent data={data} />
        <ModalFooter data={data} />
      </S.Main>
    </S.Self>
  )
}
