import React, {
useRef,
useState,
useEffect } from
"https://cdn.skypack.dev/react";
import { render } from "https://cdn.skypack.dev/react-dom";

import gsap from "https://cdn.skypack.dev/gsap";

const questions = [
{
  id: 0,
  text: "Where is the headquarters of the United Nations Environment Programme?",
  answers: [
  "Chicago",
  "Silicon Valley, California",
  "New York",
  "Nairobi, Kenya"],

  correct: 1,
  selection: null },

{
  id: 1,
  text:
  "'As you like it' is written by?",
  answers: ["Anne Frank", "Oscar Wilde", "William Shakespeare", "George Orwell"],
  correct: 3,
  selection: null },

{
  id: 2,
  text: "Equal _____ of the congruent circles subtend equal angles at the centers.",
  answers: ["Segments", "Radii", "Arcs", "Chords"],
  correct: 4,
  selection: null },

{
  id: 3,
  text: "If a line intersects two concentric circles with centre O at A, B, C and D, then:",
  answers: ["AB/CD", "AB < CD", "AB = CD", "AB = CD"],
  correct: 4,
  selection: null },

{
  id: 4,
  text: "You are aware of Polio Eradication Programme in your city. Children are vaccinated because",
  answers: ["It creates immunity in the body", "Vaccination kills the polio causing microorganisms", "Prevents the entry of polio causing organisms in the body", "All of above"],
  correct: 1,
  selection: null },

{
  id: 5,
  text: "Cancer is a disease caused due to the uncontrolled growth of tissues in any part of body.  This disease comes under which of the following types?",
  answers: ["Congenital disease", "Non-infectious disease", "Infectious disease", "None of the above"],
  correct: 2,
  selection: null },

{
  id: 6,
  text:
  "When a body falls freely towards the earth, then its total energy",
  answers: ["First increases and then decreases", " Decreases", "Remains constant", "Increases"],
  correct: 3,
  selection: null },

{
  id: 7,
  text: "Which one of the following is not the unit of energy?",
  answers: ["Kilowatt", "Kilowatt hour", "Joule", "Newton meter"],
  correct: 1,
  selection: null },

{
  id: 8,
  text:
  "The type of energy possessed by a simple pendulum, when it is at the mean position is:",
  answers: ["Kinetic energy ", "Potential energy", "Kinetic + Potential energy", "Sound energy"],
  correct: 1,
  selection: null },

{
  id: 9,
  text: "Which of the following contains maximum number of molecules?",
  answers: [
  "19 CO2",
  "1 g N2",
  "1 g H2",
  "1 g CH4"],

  correct: 3,
  selection: null },
{
    id: 10,
    text: "The molecular formula of potassium nitrate is ________.",
    answers: [
    "KNO",
    "KNO2",
    "KON",
    "KNO3"],
  
    correct: 4,
    selection: null }
];



function useCounter(initialState) {
  const [value, setValue] = useState(initialState);
  const reset = () => setValue(0);

  const add = () => setValue(value => value += 1);

  return { value, add, reset };
}

function Question({
  data,
  buttonText,
  hasButton = true,
  onQuestionButtonClick,
  showAnswer = false,
  markSelection = null })
{
  const [answer, setAnswer] = useState(null);
  const parseValue = value => value ? parseInt(value.split("-")[1]) : null;
  const questionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
    questionRef.current.querySelector(".question-text"),
    {
      x: 40,
      opacity: 0 },

    {
      x: 0,
      opacity: 1,
      duration: 0.4 });


    gsap.fromTo(
    questionRef.current.querySelectorAll("li"),
    {
      opacity: 0,
      x: 40 },

    {
      x: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.1 });


  }, [data]);

  return /*#__PURE__*/(
    React.createElement("div", { className: "question", ref: questionRef }, /*#__PURE__*/
    React.createElement("div", { className: "question-inner" }, /*#__PURE__*/
    React.createElement("h2", { className: "question-text" }, data.text), /*#__PURE__*/
    React.createElement("ul", { className: "question-answers" },
    data.answers.map((text, index) => {
      const value = `q${data.id}-${index}`;
      return /*#__PURE__*/(
        React.createElement("li", {
          className:
          index === data.correct && showAnswer ? "is-true" : "",

          "data-selected": markSelection === index ? true : null }, /*#__PURE__*/

        React.createElement("input", {
          type: "radio",
          name: `q_${data.id}`,
          value: value,
          id: value,
          onChange: e => setAnswer(e.target.value),
          checked:
          !showAnswer ? answer === value : markSelection === index }), /*#__PURE__*/


        React.createElement("label", { className: "question-answer", htmlFor: value },
        text)));



    }))),


    hasButton && /*#__PURE__*/
    React.createElement("button", {
      className: "question-button",
      onClick: () => onQuestionButtonClick(parseValue(answer), data) },

    buttonText)));




}

function Results({ wrong, correct, empty }) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "result" }, /*#__PURE__*/
    React.createElement("div", { className: "result-item is-correct" }, /*#__PURE__*/
    React.createElement("span", { className: "result-count" }, correct), /*#__PURE__*/
    React.createElement("span", { className: "result-text" }, /*#__PURE__*/
    React.createElement("svg", {
      width: "16",
      height: "16",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      className: "css-i6dzq1",
      viewBox: "0 0 24 24" }, /*#__PURE__*/

    React.createElement("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }), /*#__PURE__*/
    React.createElement("path", { d: "M22 4L12 14.01 9 11.01" })), "CORRECT")), /*#__PURE__*/




    React.createElement("div", { className: "result-item is-wrong" }, /*#__PURE__*/
    React.createElement("span", { className: "result-count" }, wrong), /*#__PURE__*/
    React.createElement("span", { className: "result-text" }, /*#__PURE__*/
    React.createElement("svg", {
      width: "16",
      height: "16",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      className: "css-i6dzq1",
      viewBox: "0 0 24 24" }, /*#__PURE__*/

    React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /*#__PURE__*/
    React.createElement("path", { d: "M15 9L9 15" }), /*#__PURE__*/
    React.createElement("path", { d: "M9 9L15 15" })), "WRONG")), /*#__PURE__*/




    React.createElement("div", { className: "result-item is-empty" }, /*#__PURE__*/
    React.createElement("span", { className: "result-count" }, empty), /*#__PURE__*/
    React.createElement("span", { className: "result-text" }, /*#__PURE__*/
    React.createElement("svg", {
      width: "16",
      height: "16",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      className: "css-i6dzq1",
      viewBox: "0 0 24 24" }, /*#__PURE__*/

    React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /*#__PURE__*/
    React.createElement("path", { d: "M8 12L16 12" })), "EMPTY"))));






}

function QuestionCorrection({ wrong, correct, empty }) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "correction" },
    questions.map(question => {
      return /*#__PURE__*/(
        React.createElement(Question, {
          hasButton: false,
          markSelection: question.selection,
          showAnswer: true,
          data: question }));


    })));


}

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [gameSize, setGameSize] = useState({});
  const totalQuestion = questions.length - 1;
  const gameRef = useRef(null);
  const gameOverlayRef = useRef(null);

  const question = useCounter(0);
  const correct = useCounter(0);
  const wrong = useCounter(0);
  const empty = useCounter(0);

  const handleNewQuestionClick = (selectedValue, currQuestion) => {
    if (totalQuestion >= question.value) {
      if (selectedValue === currQuestion.correct) {
        correct.add();
      } else if (
      selectedValue !== null &&
      selectedValue !== currQuestion.correct)
      {
        wrong.add();
      } else {
        empty.add();
      }
      questions[currQuestion.id].selection = selectedValue;
      question.add();
    }
  };

  const resetSelection = () => {
    questions.forEach(q => q.selection = null);
  };

  const handleRestartClick = () => {
    setGameFinished(false);
    setGameStarted(false);
    resetSelection();
    question.reset();
    correct.reset();
    wrong.reset();
    empty.reset();
  };

  const indicatorBg = index => {
    if (question.value > index) {
      return "#fff";
    } else if (question.value === index) {
      return "#29b5d5";
    } else {
      return "rgba(255,255,255,.2)";
    }
  };

  useEffect(() => {
    if (gameStarted) {
      document.body.classList.add("game-started");
    } else {
      document.body.classList.remove("game-started");
    }
  }, [gameStarted]);

  useEffect(() => {
    if (question.value > totalQuestion) {
      gameRef.current.scrollTop = 0;
    }
  }, [question.value]);

  return /*#__PURE__*/(
    React.createElement("div", {
      className: "game",
      ref: gameRef,
      "data-game-started": gameStarted ? true : null,
      "data-game-finished": question.value > totalQuestion ? true : null }, /*#__PURE__*/

    React.createElement("div", { className: "intro" }, /*#__PURE__*/
    React.createElement("div", { className: "intro-inner" }, /*#__PURE__*/
    React.createElement("h1", { className: "intro-title" }, "Quiz from S. Shaun Benedict"),
    !gameStarted && /*#__PURE__*/
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("p", { className: "intro-desc" },
    `The test contains ${questions.length} questions and there is no time limit. All after exam, should share the screenshot of the result page. 😃`), /*#__PURE__*/


    React.createElement("button", {
      className: "intro-button",
      onClick: () => setGameStarted(true) }, "Start Quiz")),





    gameStarted && /*#__PURE__*/
    React.createElement("div", { className: "indicator" },
    questions.map((q, index) => {
      return /*#__PURE__*/(
        React.createElement("span", {
          className: "indicator-item",
          style: {
            backgroundColor: indicatorBg(index) } }));



    })), /*#__PURE__*/


    React.createElement(Results, {
      wrong: wrong.value,
      correct: correct.value,
      empty: empty.value }), /*#__PURE__*/

    React.createElement("button", {
      className: "restart-button",
      onClick: () => handleRestartClick() }, "Restart Quiz"))), /*#__PURE__*/





    React.createElement("div", { className: "game-area" },
    questions[question.value] && /*#__PURE__*/
    React.createElement(Question, {
      data: questions[question.value],
      buttonText:
      question.value !== totalQuestion ? "Next Question" : "Finish Quiz",

      onQuestionButtonClick: handleNewQuestionClick }),



    !questions[question.value] && /*#__PURE__*/
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement(QuestionCorrection, { data: questions })))));





}

render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#app"));

//Please use your powers for good and not evil.
$(document).ready(function(){
	$(".popup-bg").delay(1200).fadeIn(600);
	$(".popup-bg").on('click', function() {
		$(this).fadeOut(800);
	});
		$(".close-x").on('click', function() {
		$(".popup-bg").fadeOut(800);
	});
});
