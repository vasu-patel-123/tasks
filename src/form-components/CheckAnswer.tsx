import React, { useState, JSX } from "react";
import { Form } from "react-bootstrap";

/*The CheckAnswer component allows a user to enter an answer to a short answer question, and then displays whether they got it correct or incorrect. The component takes in a parameter representing the expectedAnswer.

You will need a state to handle the user’s given answer
The user’s given answer should initially be the empty string
When the user’s given answer matches the expectedAnswer, display ✔️; otherwise display ❌ */

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");
    return (
        <div>
            <Form.Group controlId="formCheckAnswer">
                <Form.Control
                    value={userAnswer}
                    onChange={(e) => {
                        setUserAnswer(e.target.value);
                    }}
                />
            </Form.Group>
            <div>{userAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
