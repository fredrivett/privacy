import React from 'react';

import classes from './QuestionBlock.css';

const questionBlock = props => {
  let transformedQuestions = null;

  if (props.questionBlock.questions) {
    transformedQuestions = Object.keys(props.questionBlock.questions)
      .map(questionKey => {
        return [...Array(props.questionBlock.questions[questionKey])]
          .map(questionValue => {
            let question = (
              <React.Fragment key={question}>
                <label>{questionValue.label}</label>
                <input
                  type={questionValue.type}
                  value={questionValue.value}
                  onChange={(event) => props.change(event, questionKey)}
                />
              </React.Fragment>
            );

            if (questionValue.type === 'radio') {
              const radios = questionValue.options.map(option => {
                const radioId = `${questionKey}__${option}`;

                return (
                  <React.Fragment key={option}>
                    <input
                      type="radio"
                      id={radioId}
                      name="sellData"
                      value={option}
                      onChange={(event) => props.change(event, questionKey)}
                      checked={questionValue.value === option}
                    />
                    <label for={radioId} style={{display: 'inline-block', textTransform: 'capitalize'}}>{option}</label>
                  </React.Fragment>
                );
              });

              question = (
                <React.Fragment key={questionValue}>
                  <p style={{marginBottom: '0'}}>{questionValue.label}</p>

                  {radios}
                </React.Fragment>
              );
            }

            return (
              <React.Fragment key={questionKey}>
                {question}
              </React.Fragment>
            );
          });
      });
  }

  return (
    <section
      className={[
        'QuestionBlock',
        props.questionBlock.collapsed ? 'is-collapsed' : '',
      ].join(' ')}
    >
      <h1
        className="QuestionBlock__header"
        onClick={() => props.toggleCollapse(props.questionBlock)}
      >
        {props.questionBlock.header}
        <i className="fas fa-caret-down QuestionBlock__header-arrow"></i>
      </h1>

      <div className="QuestionBlock__questions">
        { transformedQuestions }
      </div>
    </section>
  );
};

export default questionBlock;
