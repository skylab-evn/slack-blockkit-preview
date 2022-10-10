import * as S from './BlockKit.styles'
import { Divier } from '../Divider/Divider.styles';
import { FreeText } from '../FreeText/FreeText';
import { PlainText } from '../PlainText/PlainText';
import { StaticSelect } from '../StaticSelect/StaticSelect';
import { MarkdownText } from '../MarkdownText/MarkdownText';
import { Datepicker } from '../Datepicker/Datepicker';
import { Header } from '../Header/Header';
import { Button } from '../Button/Button';
import { TextArea } from '../TextArea/TextArea/TextArea';
import { Timepicker } from '../Timepicker/Timepicker/Timepicker';
import { Checkboxes } from '../Checkboxes/Checkboxes/Checkboxes';
import { RadioButtons } from '../RadioButtons/RadioButtons/RadioButtons';
import { MessageSlackImage } from '../Image/MessageImage/MessageImage';


export const BlockKit = ({ data }) => {
  return data.blocks.map((item) => {
    // console.log(item.type);
    if(item.type === 'image'){
      return <MessageSlackImage data={item}/>
    }
    if (item.type === 'section' && item.accessory.type === 'button') {
      return <Button data={item} />;
    }
    if (item.element.type === 'checkboxes') {
      return <Checkboxes data={item} />;
    }
    if (item.element.type === 'radio_buttons') {
      return <RadioButtons data={item} />;
    }
    if (item.element.multiline === true) {
      return <TextArea data={item} />;
    }
    if (item.element.type === 'timepicker') {
      return <Timepicker data={item} />;
    }
    if (item.element.type === 'plain_text_input') {
      return (
        <S.Main>
      <FreeText data={item} />
      </S.Main>
      )
    }
    if (item.element.type === 'static_select') {
      return (
       <S.Main>
        <StaticSelect data={item} />
        </S.Main>
      )
    }
    if (item.type === 'divider') {
      return <Divier />;
    }
    if ( item.element.type === 'datepicker') {
      return(
        <S.Main>
        <Datepicker data={item} />
        </S.Main>
      ) 
    }
    if (item.text.type === 'mrkdwn') {
      return <MarkdownText data={item} />;
    }
    if (item.type === 'section') {
      return <PlainText data={item} />;
    }
    if (item.type === 'header') {
      return <Header data={item} />;
    }
  });
};
