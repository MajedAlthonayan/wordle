import React from 'react'

export default function Modal({ isCorrect, turn, solution }) {
    return (
        <div className="modal">
            {isCorrect && turn > 1 && (
                <div>
                    <h1>You Win!</h1>
                    <p className="solution">Solution: {solution}</p>
                    <p>You found the solution in {turn} guesses!!</p>
                </div>
            )}
            {isCorrect && turn === 1 && (
                <div>
                    <h1>You Win!</h1>
                    <p className="solution">Solution: {solution}</p>
                    <p>You found the solution in {turn} guess!!</p>
                </div>
            )}
            {!isCorrect && (
                <div>
                    <h1>Unlucky!</h1>
                    <p className="solution">Solution: {solution}</p>
                    <p>Get Good kid hehe</p>
                </div>
            )}

        </div>
    )
}