import * as S from './App.styles';
import './App.css';
import { BlockKit } from './components/BlockKit/BlockKit';
import dayjs from 'dayjs';
import { BlockKitModal } from './components/BlockKItModal/BlockKitModal';

function App() {
  const data = {
    type: 'modal',
    title: {
      type: 'plain_text',
      text: 'My App',
      emoji: true
    },
    submit: {
      type: 'plain_text',
      text: 'Submit',
      emoji: true
    },
    close: {
      type: 'plain_text',
      text: 'Cancel',
      emoji: true
    },
    blocks: [
      {
        "type": "input",
        "element": {
          "type": "plain_text_input",
          "multiline": true,
          "action_id": "plain_text_input-action"
        },
        "label": {
          "type": "plain_text",
          "text": "Label",
          "emoji": true
        }
      },
      {
        "type": "input",
        "element": {
          "type": "plain_text_input",
          "multiline": true,
          "action_id": "plain_text_input-action"
        },
        "label": {
          "type": "plain_text",
          "text": "Label",
          "emoji": true
        }
      }, {
        "type": "input",
        "element": {
          "type": "plain_text_input",
          "multiline": true,
          "action_id": "plain_text_input-action"
        },
        "label": {
          "type": "plain_text",
          "text": "Label",
          "emoji": true
        }
      }, {
        "type": "input",
        "element": {
          "type": "plain_text_input",
          "multiline": true,
          "action_id": "plain_text_input-action"
        },
        "label": {
          "type": "plain_text",
          "text": "Label",
          "emoji": true
        }
      }, {
        "type": "input",
        "element": {
          "type": "plain_text_input",
          "multiline": true,
          "action_id": "plain_text_input-action"
        },
        "label": {
          "type": "plain_text",
          "text": "Label",
          "emoji": true
        }
      }, {
        "type": "input",
        "element": {
          "type": "plain_text_input",
          "multiline": true,
          "action_id": "plain_text_input-action"
        },
        "label": {
          "type": "plain_text",
          "text": "Label",
          "emoji": true
        }
      }, {
        "type": "input",
        "element": {
          "type": "plain_text_input",
          "multiline": true,
          "action_id": "plain_text_input-action"
        },
        "label": {
          "type": "plain_text",
          "text": "Label",
          "emoji": true
        }
      }, {
        "type": "input",
        "element": {
          "type": "plain_text_input",
          "multiline": true,
          "action_id": "plain_text_input-action"
        },
        "label": {
          "type": "plain_text",
          "text": "Label",
          "emoji": true
        }
      }, {
        "type": "input",
        "element": {
          "type": "plain_text_input",
          "multiline": true,
          "action_id": "plain_text_input-action"
        },
        "label": {
          "type": "plain_text",
          "text": "Label",
          "emoji": true
        }
      }, {
        "type": "input",
        "element": {
          "type": "plain_text_input",
          "multiline": true,
          "action_id": "plain_text_input-action"
        },
        "label": {
          "type": "plain_text",
          "text": "Label",
          "emoji": true
        }
      },
      {
        "type": "divider"
      },
      {
        "type": "input",
        "element": {
          "type": "plain_text_input",
          "multiline": true,
          "action_id": "plain_text_input-action"
        },
        "label": {
          "type": "plain_text",
          "text": "Label",
          "emoji": true
        }
      }, {
        "type": "input",
        "element": {
          "type": "plain_text_input",
          "multiline": true,
          "action_id": "plain_text_input-action"
        },
        "label": {
          "type": "plain_text",
          "text": "Label",
          "emoji": true
        }
      }, {
        "type": "input",
        "element": {
          "type": "plain_text_input",
          "multiline": true,
          "action_id": "plain_text_input-action"
        },
        "label": {
          "type": "plain_text",
          "text": "Label",
          "emoji": true
        }
      }, {
        "type": "input",
        "element": {
          "type": "plain_text_input",
          "multiline": true,
          "action_id": "plain_text_input-action"
        },
        "label": {
          "type": "plain_text",
          "text": "Label",
          "emoji": true
        }
      },
    ]
  };

  const date = dayjs().format('HH:mm A');



  return (
    <div className="App">
      <h1>Slack BlockKit builder</h1>

      {data.type ? (
        <BlockKitModal data={data} />
      ) : (
        <>
          <S.Self>
            <S.LogoDiv>
              <S.Logo />
            </S.LogoDiv>
            <S.Main>
              <S.MainHeader>
                <S.Header>
                  <S.BotName>RegardifyBot</S.BotName>
                  <S.App>APP</S.App>
                  <S.DateDiv>{date}</S.DateDiv>
                </S.Header>
              </S.MainHeader>
              <S.MainBlock>
                <BlockKit data={data} />
              </S.MainBlock>
            </S.Main>
          </S.Self>{' '}
        </>
      )}
    </div>
  );
}

export default App;
