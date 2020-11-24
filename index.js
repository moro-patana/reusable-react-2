import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const CharacterCounterInput = ({ text, defaults }) => {
	const maxLength = 280;
	const [textArea, setTextArea] = useState("")
	const className = textArea.length > maxLength ? "tooLong" : "";
    function addTextToMood(text) {
		setTextArea(prev => prev += text + " ")
	}
	return (
		<div className={`counterInput ${className}`}>
			<div>
				{defaults.map(b => {
					return <button key={b} onClick={() => addTextToMood(b)}>{b}</button>;
				})}
			</div>
			<textarea 
			placeholder={text}
			value={textArea}
			onChange={(e) => 
			setTextArea(e.target.value)
			}
			 />
			<div>{textArea.length}/{maxLength}</div>
		</div>
	);
};

const App = () => {
	let defaultMoods = ['Great', 'Okay', 'Bad'];

	return (
		<section>
			<h2>Mood Tracker</h2>
			<CharacterCounterInput text={'How was your day?'} defaults={defaultMoods} />
		</section>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
