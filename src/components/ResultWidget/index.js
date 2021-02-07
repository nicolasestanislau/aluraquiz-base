/* eslint-disable react/prop-types */
import React from 'react';
import Widget from '../Widget';
import BackLinkArrow from '../BackLinkArrow';

export default function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        Tela de Resultado:
      </Widget.Header>

      <Widget.Content>
        <p>
          Você acertou
          {' '}
          {results.reduce((somatoriaAtual, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return somatoriaAtual + 1;
            }
            return somatoriaAtual;
          }, 0)}
          {/* {results.filter((x) => x).length} */}
          {' '}

          questões, parabéns
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              #0
              {index + 1}
              {' '}
              Resultado:
              {result === true ? 'acertou!' : 'errou!' }
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}
