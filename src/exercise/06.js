// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername, id}) {
    // 🐨 add a submit event handler here (`handleSubmit`).
    // 💰 Make sure to accept the `event` as an argument and call
    // `event.preventDefault()` to prevent the default behavior of form submit
    // events (which refreshes the page).
    // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    //
    // 🐨 get the value from the username input (using whichever method
    // you prefer from the options mentioned in the instructions)
    // 💰 For example: event.target.elements[0].value
    // 🐨 Call `onSubmitUsername` with the value of the input

    // 🐨 add the onSubmit handler to the <form> below

    // 🐨 make sure to associate the label to the input.
    // to do so, set the value of 'htmlFor' prop of the label to the id of input
    const usernameRef = React.useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitUsername(usernameRef.current.value);
    };

    React.useEffect(() => {
        usernameRef.current.focus();
    }, [])

    const [error, setError] = React.useState(null);
    const [valid, setValid] = React.useState(true);

    const isInputValid = (input) => {
        return input === input.toLowerCase()
    };

    const handleChange = (e) => {
        setValid(isInputValid(e.target.value))
        if (valid) {
            setError('');
        } else {
            setError('Username must be lower case');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input ref={usernameRef} name="username" id={id} type="text" onChange={handleChange}/>
                <br />
                <em className="error error-msg" role="alert">
                    {error}
                </em>
            </div>
            <button type="submit" disabled={!valid}>Submit</button>
        </form>
    )
}

function App() {
    const onSubmitUsername = username => alert(`You entered: ${username}`)
    return <UsernameForm id="username" onSubmitUsername={onSubmitUsername}/>
}

export default App
