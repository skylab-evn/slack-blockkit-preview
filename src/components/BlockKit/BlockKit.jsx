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
    console.log(item.type);
    if (item.type === 'divider') {
      return (
      
        <Divier />
      
      )
    }
    if(item.type === 'image'){
      return (
        <S.Main>
          <MessageSlackImage data={item}/>
        </S.Main>
        )
    }
    // if (item.elements.type === 'button') {
    //   return (
    //   <S.Main>
    //     <Button data={item} />
    //   </S.Main>
    //   )
    // }
    if (item.element.type === 'checkboxes') {
      return (
      <S.Main>
        <Checkboxes data={item} />
      </S.Main>
      )
    }
    if (item.element.type === 'radio_buttons') {
      return (
      <S.Main>
        <RadioButtons data={item} />
      </S.Main>
      )
    }
    if (item.element.multiline === true) {
      return (
      <S.Main>
        <TextArea data={item} />
      </S.Main>
      )
    }
    if (item.element.type === 'timepicker') {
      return (
      <S.Main>
        <Timepicker data={item} />
      </S.Main>
      )
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
      return (
      <S.Main>
        <PlainText data={item} />
      </S.Main>
      )
    }
    if (item.type === 'header') {
      return <Header data={item} />;
    }
  });
};
