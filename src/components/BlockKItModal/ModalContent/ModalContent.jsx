import { Divier } from '../../Divider/Divider.styles';
import { FreeText } from '../../FreeText/FreeText';
import { PlainText } from '../../PlainText/PlainText';
import { MarkdownText } from '../../MarkdownText/MarkdownText';
import * as S from './ModalContent.styles';
import { ModalSelect } from '../../ModalSelect/ModalSelect';
import {ModalDatepicker} from '../../ModalDatepicker/ModalDatepicker'
import { Header } from '../../Header/Header';
import { ModalButton } from '../../ModalButton/ModalButton';
import { ModalTextArea } from '../../TextArea/ModalTextArea/ModalTextArea';
import { ModalTimepicker } from '../../Timepicker/ModalTimepicker/Modaltimepicker';
import { ModalCheckboxes } from '../../Checkboxes/ModalCheckboxes/ModalCheckboxes';
import { ModalRadioButtons } from '../../RadioButtons/ModalRadioButtons/ModalRadioButtons';
import { ModalSlackImage } from '../../Image/ModalSlackImage/image'

export const ModalContent = ({ data }) => {
  
  return ( <S.ScrollBlock>{data.blocks.map((item) => {
    if (item.type === 'divider') {
      return (
        <S.Main>
          <div style={{margin:'10px 0px'}}>
          <Divier />
          </div>
        </S.Main>
      );
    }
    if(item.type === 'image'){
      return(
        <S.Main>
         <ModalSlackImage data={item}/>
       </S.Main>
      )
    }
    if (item.element.type === 'checkboxes') {
      return (
        <S.Main>
          <ModalCheckboxes data={item} />
        </S.Main>
      );
    }
    
    if (item.element.type === 'radio_buttons') {
      return (
        <S.Main>
          <ModalRadioButtons data={item} />
        </S.Main>
      );
    }
    if (item.element.multiline === true) {
      return (
        <S.Main>
          <ModalTextArea data={item} />
        </S.Main>
      );
    }
    if (item.type === 'section' && item.accessory.type === 'button') {
      return (
        <S.Main>
          <ModalButton data={item} />
        </S.Main>
      );
    }
    if (item.element.type === 'timepicker') {
      return (
        <S.Main>
          <ModalTimepicker data={item} />
        </S.Main>
      );
    }
    if (item.type === 'header') {
      return (
        <S.Main>
          <Header data={item} />
        </S.Main>
      );
    }
    if (item.element.type === 'plain_text_input') {
      return (
        <S.Main>
          <FreeText data={item} />
        </S.Main>
      );
    }
    if (item.element.type === 'datepicker') {
      return (
        <S.Main>
          <ModalDatepicker data={item} />
        </S.Main>
      );
    }
    if (item.element.type === 'static_select') {
      return (
        <S.Main>
          <ModalSelect data={item} />
        </S.Main>
      );
    }
  
    if (item.text.type === 'mrkdwn') {
      return (
        <S.Main>
          <MarkdownText data={item} />
        </S.Main>
      );
    }
    if (item.type === 'section') {
      return (
        <S.Main>
          {' '}
          <PlainText data={item} />
        </S.Main>
      );
    }
  })}</S.ScrollBlock>);
};
