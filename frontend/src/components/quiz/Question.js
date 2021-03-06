import React from 'react';
import Swal from 'sweetalert2';

import Timer from "./Timer";

function Question(props) {

    const clickAnswer = (event) => {
        props.setIndex(1 + props.index);
        props.setTimeLeft(30);

        if (event.target.value === props.question.correctAnswer) {
            questionCorrect();
        } else {
            questionIncorrect();
        }
        console.log(props.points)
    }

    const questionCorrect = () => {
        if (props.timeLeft >= 0) {
            props.setIndex(props.index + 1);
            props.setPoints(props.points + 10)
                Swal.fire({
                    title: `${props.index + 1} Correct! Total points: ${props.points + 10}`,
                    imageUrl: 'https://i.imgur.com/r3VHXOc.gif',
                    imageWidth: 300,
                    imageHeight: 200,
                    imageAlt: 'Mans stomach',
                    confirmButtonColor: '#C4F43C'
                });
        }
    };

    const questionIncorrect = () => {
        if (props.timeLeft >= 0) {
        props.setIndex(props.index + 1);
            Swal.fire({
                title: `${props.index + 1} Incorrect. The correct answer was: '${props.question.correctAnswer}'. Total points: ${props.points}`,
                imageUrl: 'https://i.imgur.com/eJTOaZh.gif',
                imageWidth: 300,
                imageHeight: 200,
                imageAlt: 'Men exercising',
                confirmButtonColor: '#C4F43C'
            });
        }
    };

    return (
        
        <div>
            <h1 className="question">
                {props.question.question.replace('&#039;', "'")
                .replace('&#O39', "'")
                .replace('&quot;', '"')
                .replace('&QUOT;', '"')
                .replace('&qu0t;','"')
                .replace('&ecirc;', 'ê')
                .replace('&ndash;', '-')
                .replace('&ldquo;', '"')
                .replace('&rdquo;', '"')
                .replace('&eacute;', 'é')
                .replace('&ocirc;', 'ô')
                .replace('&uuml;', 'ü')
                .replace('&Uuml;', 'Ü')
                }
            </h1>
            <h2 className="category-difficulty">
              {props.question.category} | {props.question.difficulty}
            </h2>
            <div className="allAnswers">              
                {props.question.answers.map((answer, answerID) => (
                    <button
                        className = "answer-button" 
                        key = {answerID}
                        onClick = {clickAnswer}
                        value = {answer}
                    > ✨ {answer} ✨
                    </button> 
                ))}
            </div>
            {/* <Timer 
                timeLeft = {props.timeLeft}
                setTimeLeft = {props.setTimeLeft}
                index = {props.index}
                setIndex = {props.setIndex}
            /> */}
        </div>
    )
}

export default Question
