/* eslint-disable react/prop-types */
import React from 'react';
import BackLinkArrow from '../BackLinkArrow';
import AlternativesForm from '../AlternativesForm';
import Widget from '../Widget';
import Button from '../Button';

export default function QuestionWidget({
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;
  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <AlternativesForm
          onSubmit={(event) => {
            event.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map((altenative, altenativeIndex) => {
            const altenativeId = `alternative__${altenativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === altenativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={altenativeId}
                htmlFor={altenativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >

                <input
                  style={{ display: 'none' }}
                  id={altenativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(altenativeIndex)}
                  type="radio"
                />
                {altenative}
              </Widget.Topic>
            );
          })}

          {/* <pre>
              {JSON.stringify(question, null, 4)}

            </pre> */}

          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
          {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
          {isQuestionSubmited && !isCorrect && <p>Você errou!</p>}
        </AlternativesForm>
      </Widget.Content>

    </Widget>

  );
}
