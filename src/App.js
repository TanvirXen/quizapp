import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Row, Container, Col, Button, Form } from "react-bootstrap";
function App() {
	const [questions, setquestions] = useState([]); //react hook for state management
	const [type, settype] = useState("easy"); //react hook for state management + to know current type of question selected + initially selected is easy

	// Array of objeccts for setting questions
	const question = [
		{
			questionText: "If 5x plus 32 equals 4 minus 2x what is the value of x ?",
			answerOptions: [
				{ answerText: "- 4", isCorrect: true },
				{ answerText: "- 3", isCorrect: false },
				{ answerText: "- 2", isCorrect: false },
				{ answerText: "12", isCorrect: false },
			],
			type: "easy",
		},
		{
			questionText:
				"Which of the following numbers is farthest from the number 1 on the number line?",
			answerOptions: [
				{ answerText: "-7", isCorrect: false },
				{ answerText: "-6", isCorrect: false },
				{ answerText: "-10", isCorrect: true },
				{ answerText: "-11", isCorrect: false },
			],
			type: "easy",
		},
		{
			questionText: "What is the capital of France?",
			answerOptions: [
				{ answerText: "New York", isCorrect: false },
				{ answerText: "London", isCorrect: false },
				{ answerText: "Paris", isCorrect: true },
				{ answerText: "Dublin", isCorrect: false },
			],
			type: "easy",
		},
		{
			questionText:
				"A car got 33 miles per gallon using gasoline that cost $2.95 per gallon. Approximately what was the cost, in dollars, of the gasoline used in driving the car 350 miles?",
			answerOptions: [
				{ answerText: "23", isCorrect: false },
				{ answerText: "33", isCorrect: false },
				{ answerText: "30", isCorrect: true },
				{ answerText: "40", isCorrect: false },
			],
			type: "easy",
		},
		{
			questionText: "Who is CEO of Tesla?",
			answerOptions: [
				{ answerText: "Jeff Bezos", isCorrect: false },
				{ answerText: "Elon Musk", isCorrect: true },
				{ answerText: "Bill Gates", isCorrect: false },
				{ answerText: "Tony Stark", isCorrect: false },
			],
			type: "medium",
		},
		{
			questionText: "If 5x plus 32 equals 4 minus 2x what is the value of x ?",
			answerOptions: [
				{ answerText: "- 4", isCorrect: true },
				{ answerText: "- 3", isCorrect: false },
				{ answerText: "- 2", isCorrect: false },
				{ answerText: "12", isCorrect: false },
			],
			type: "medium",
		},
		{
			questionText:
				"Which of the following numbers is farthest from the number 1 on the number line?",
			answerOptions: [
				{ answerText: "-7", isCorrect: false },
				{ answerText: "-6", isCorrect: false },
				{ answerText: "-10", isCorrect: true },
				{ answerText: "-11", isCorrect: false },
			],
			type: "medium",
		},
		{
			questionText: "What is the capital of France?",
			answerOptions: [
				{ answerText: "New York", isCorrect: false },
				{ answerText: "London", isCorrect: false },
				{ answerText: "Paris", isCorrect: true },
				{ answerText: "Dublin", isCorrect: false },
			],
			type: "medium",
		},
		{
			questionText:
				"A car got 33 miles per gallon using gasoline that cost $2.95 per gallon. Approximately what was the cost, in dollars, of the gasoline used in driving the car 350 miles?",
			answerOptions: [
				{ answerText: "23", isCorrect: false },
				{ answerText: "33", isCorrect: false },
				{ answerText: "30", isCorrect: true },
				{ answerText: "40", isCorrect: false },
			],
			type: "medium",
		},
		{
			questionText: "The iPhone was created by which company?",
			answerOptions: [
				{ answerText: "Apple", isCorrect: true },
				{ answerText: "Intel", isCorrect: false },
				{ answerText: "Amazon", isCorrect: false },
				{ answerText: "Microsoft", isCorrect: false },
			],
			type: "hard",
		},
		{
			questionText:
				"Which of the following numbers is farthest from the number 1 on the number line?",
			answerOptions: [
				{ answerText: "-7", isCorrect: false },
				{ answerText: "-6", isCorrect: false },
				{ answerText: "-10", isCorrect: true },
				{ answerText: "-11", isCorrect: false },
			],
			type: "hard",
		},
		{
			questionText: "What is the capital of France?",
			answerOptions: [
				{ answerText: "New York", isCorrect: false },
				{ answerText: "London", isCorrect: false },
				{ answerText: "Paris", isCorrect: true },
				{ answerText: "Dublin", isCorrect: false },
			],
			type: "hard",
		},
		{
			questionText:
				"A car got 33 miles per gallon using gasoline that cost $2.95 per gallon. Approximately what was the cost, in dollars, of the gasoline used in driving the car 350 miles?",
			answerOptions: [
				{ answerText: "23", isCorrect: false },
				{ answerText: "33", isCorrect: false },
				{ answerText: "30", isCorrect: true },
				{ answerText: "40", isCorrect: false },
			],
			type: "hard",
		},
		{
			questionText: "How many Harry Potter books are there?",
			answerOptions: [
				{ answerText: "1", isCorrect: false },
				{ answerText: "4", isCorrect: false },
				{ answerText: "6", isCorrect: false },
				{ answerText: "7", isCorrect: true },
			],
			type: "hard",
		},
		{
			questionText: "How many Harry Potter books are there?",
			answerOptions: [
				{ answerText: "1", isCorrect: false },
				{ answerText: "4", isCorrect: false },
				{ answerText: "6", isCorrect: false },
				{ answerText: "7", isCorrect: true },
			],
			type: "easy",
		},
	];
	//array of object ends

	const [currentQuestion, setCurrentQuestion] = useState(0); //state for knowing current question
	const [showScore, setShowScore] = useState(false); //state boolean for showing either to show score or show question
	const [score, setScore] = useState(0); // inremental state for calculating score

	//function for checking if the answer is correct or wrong
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	//function ends

	//function to change the level and initially set other to states to inital
	async function handleLevel(e) {
		setShowScore(false);
		setCurrentQuestion(0);
		setScore(0);
		console.log(typeof questions);
		const data = question.filter((q) => q.type === e);
		console.log(Object.entries(data));
		setquestions(data);
	}
	//function ends

	//function for reseting the question and other states
	async function reset() {
		setShowScore(false);
		setCurrentQuestion(0);
		setScore(0);
	}
	//function ends

	// useEffect is another react hook for commencing the function at page load
	useEffect(() => {
		handleLevel("easy");
	}, []);
	//useEffect  ends

	//at initial load array of question is blank ,So its initial question value is 0 and it cannot map the questions so with the if operator it loads a blank div if questions is 0
	if (questions.length == 0) {
		return <div></div>;
	}
	return (
		<div className="App">
			<Container className="main">
				<Row>
					<Col md={2}></Col>
					<Col md={8}>
						<h1>Project-Quiz App</h1>
						<h2>Select Question</h2>
						<div className="category">
							<Form.Select
								onChange={(e) => {
									handleLevel(e.target.value);
									settype(e.target.value);
								}}
							>
								<option value="easy" selected>
									Easy
								</option>
								<option value="medium">Medium</option>
								<option value="hard">Hard</option>
							</Form.Select>
						</div>
					</Col>
					<Col md={2}></Col>
				</Row>
				<Row>
					<Col md={2}></Col>
					<Col md={10}>
						<h2>Questions Set- {type} </h2>
						{showScore ? (
							<div className="score-section">
								<p style={{ color: "green" }}>
									{" "}
									You scored {score} out of {questions.length}
								</p>
								<div style={{ width: "120px" }}>
									<Button variant="danger" onClick={() => reset()}>
										Reset
									</Button>
								</div>
							</div>
						) : (
							<>
								<div className="question-section">
									<div className="question-count">
										<span style={{ color: "white" }}>
											Question {currentQuestion + 1}
										</span>
										/{questions.length}
									</div>
									<div className="question-text">
										{questions[currentQuestion].questionText}
									</div>
								</div>
								<div className="answer-section">
									{questions[currentQuestion].answerOptions.map(
										(answerOption) => (
											<button
												onClick={() =>
													handleAnswerOptionClick(answerOption.isCorrect)
												}
											>
												{answerOption.answerText}
											</button>
										)
									)}
								</div>
							</>
						)}
					</Col>
					<Col md={2}></Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
