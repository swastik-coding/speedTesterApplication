import './instructions.css'


function toggleInstructions() {
    if(document.getElementById('info').style.display === 'none') {
        document.getElementById('info').style.display = 'block';
    } else {
        document.getElementById('info').style.display = 'none';
    }
}

function Instruction() {
    return (
        <>
        <button id='instructions' onClick={toggleInstructions}>Instructions</button>
        <p id='info'>
            This is a Typing Speed tester application. You have to type the quote given below. Once you start typing the clock will start and will stop only when you will type the quote. You will also start getting your live typing speed in wpm just after you start typing.
        </p>
        </>
    )
}

export default Instruction