import {useState} from 'react';
const useWordle = (solution) =>{
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([...Array(6)])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)


    const formatGuess = () => {
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((l) => {
            return {key: l, color: 'grey'}
        })

        // find green letters
        formattedGuess.forEach((l, i) => {
            if(solutionArray[i] === l.key){
                formattedGuess[i].color = 'green'
                solutionArray[i] = null
            }
        })

        //find any yelow letters

        formattedGuess.forEach((l, i) => {
            if(solutionArray.includes(l.key) && l.color !== 'green'){
                formattedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(l.key)] = null
            }
        })
        return formattedGuess
    }

    const addNewGuess = (formattedGuess) => {
        if(currentGuess === solution){
            setIsCorrect(true)
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })

        setTurn((prevTurn) => {
            return prevTurn + 1
        })

        setCurrentGuess('')

    }

    const handleKeyup = ({ key }) => {
        if(key === 'Enter'){
            if(turn > 5){
                return
            }
            if(history.includes(currentGuess)){
                return
            }
            if(currentGuess.length != 5){
                return
            }
            const formatted = formatGuess()
            addNewGuess(formatted)
        }
        if(key === 'Backspace'){
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return
        }

        if (/^[A-Za-z]$/.test(key)) {
            if(currentGuess.length < 5){
                setCurrentGuess((prev) => {
                    return prev + key
                })

            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}

}
export default useWordle