import React, { Component } from 'react';
import QuestionBlock from './QuestionBlock/QuestionBlock';
import Sidebar from './Sidebar/Sidebar';

import './App.css';

class App extends Component {
  state = {
    // auth: {
    //   account: {
    //     header: 'Your account',
    //     questions: {
    //       name: {
    //         value: 'myname',
    //         type: 'text',
    //         label: 'Your name',
    //       },
    //       email: {
    //         value: 'myemail',
    //         type: 'email',
    //         label: 'Your work email address',
    //       },
    //       password: {
    //         value: 'mypassword',
    //         type: 'password',
    //         label: 'Password',
    //       },
    //     }
    //   },
    // }
    questionBlocks: {
      organisation: {
        header: 'Your Organisation',
        collapsed: false,
        questions: {
          name: {
            type: 'text',
            label: 'Your organisations name',
            value: '',
          },
          address: {
            type: 'text',
            label: 'Your organisations address',
            value: '',
          },
          hqCountry: {
            type: 'text',
            label: 'Your organisations country',
            value: '',
          },
          privacyPolicyUrl: {
            type: 'url',
            label: 'Your organisations privacy policy URL',
            value: '',
          },
        }
      },
      businessPractices: {
        header: 'Business Practices',
        collapsed: true,
        questions: {
          sellData: {
            type: 'radio',
            label: 'Do you sell personal data for profit?',
            value: '',
            options: ['yes', 'no'],
          },
          advertising: {
            type: 'text',
            label: 'Do you process personal data to sell advertising for profit?',
            value: '',
          },
          minimiseData: {
            type: 'text',
            label: 'Do you actively seek to minimise the personal data that you hold?',
            value: '',
          },
          peopleManagementCertification: {
            type: 'text',
            label: 'Do you have one or more people management certifications? (Investors in People?)',
            value: '',
          },
          qualityManagementCertification: {
            type: 'text',
            label: 'Do you have one or more quality management certifications? (ISO 9000, Six Sigma?)',
            value: '',
          },
          sociallyResponsibleCertification: {
            type: 'text',
            label: 'Do you have one or more socially responsible certifications? (ISO 26000, Global Reporting Initiative, The Voluntary Principles?)',
            value: '',
          },
        },
      },
      consentAndRights: {
        header: 'Consent & Rights',
        collapsed: true,
        questions: {
          lawfulBasis: {
            type: 'text',
            label: 'Do you have a lawful basis for processing each type of personal data?',
            value: '',
          },
          consent: {
            type: 'text',
            label: 'Where appropriate, have your data subjects freely given consent for the processing of their personal data for specified, explicit and legitimate purposes?',
            value: '',
          },
          awareWithdraw: {
            type: 'text',
            label: 'Where appropriate, have you made your data subjects aware of the right to withdraw their consent at any time?',
            value: '',
          },
          awareErase: {
            type: 'text',
            label: 'Have you made your data subjects aware of the right to access, rectify or erase their personal data?',
            value: '',
          },
          deleteLogs: {
            type: 'text',
            label: 'When you erase your data subjects’ personal data, do you remove it from log files, database backups, and object storage?',
            value: '',
          },
          portData: {
            type: 'text',
            label: 'Have you made your data subjects aware of the right to port their data to competitors?',
            value: '',
          },
          complaint: {
            type: 'text',
            label: 'Have you made your data subjects aware of the right to lodge a complaint to a supervisory authority?',
            value: '',
          },
          quicklyRespond: {
            type: 'text',
            label: 'How quickly do you respond to personal data access requests?',
            value: '',
          },
          notifyDataBreach: {
            type: 'text',
            label: 'How quickly do you notify your data subjects about data breaches?',
            value: '',
          },
        },
      },
    }
  }

  inputChangedHandler = (event, block, question) => {
    const qBlocks = {...this.state.questionBlocks};
    const qBlock = qBlocks[block];

    qBlock.questions[question].value = event.target.value;

    this.setState({questionBlocks: qBlocks});
  }

  toggleCollapseHandler = (block) => {
    const qBlocks = {...this.state.questionBlocks};

    Object.keys(qBlocks).forEach((key) => {
      qBlocks[key].collapsed = block === key ? !qBlocks[key].collapsed : true;
    });

    this.setState({questionBlocks: qBlocks});
  }

  render() {
    const questionBlocks = Object.keys(this.state.questionBlocks).map(block => {
      return (
        <QuestionBlock
          questionBlock={this.state.questionBlocks[block]}
          change={(event, key) => this.inputChangedHandler(event, block, key)}
          toggleCollapse={() => this.toggleCollapseHandler(block)}
        />
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Privacy thing</h1>
        </header>
        <div className="Main">
          <form className="Questions">
            {questionBlocks}
          </form>
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default App;
