import "./App.css";
import { useState } from "react";

function App() {
	const [notes, setNotes] = useState([]);
	const [inputNote, setInputNote] = useState("");

	function handleInputChange(e) {
		setInputNote(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (inputNote.trim !== "") {
			const newNote = {
				id: Date.now(),
				text: inputNote,
			};
			setNotes([...notes, newNote]);
			setInputNote("");
		}
	}

	function handleDeleteNote(id) {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	}

	return (
		<>
			<div
				className="App"
				onSubmit={handleSubmit}
			>
				<h1>Notes</h1>
				<form className="note-input">
					<input
						type="text"
						placeholder="Add a note"
						required
						autoFocus
						minLength={5}
						maxLength={255}
						autoComplete="off"
						value={inputNote}
						onChange={handleInputChange}
					/>
					<button>Add</button>
				</form>
				<ul className="note-list">
					{notes.map((note) => (
						<li key={note.id}>
							<span>{note.text}</span>
							<button
								onClick={handleDeleteNote.bind(null, note.id)}
							>
								Delete
							</button>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default App;
