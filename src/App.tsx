import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div
            className="App"
            style={{ border: "3px solid black", padding: "4px" }}
        >
            <header className="App-header">Vasu Patel</header>
            <h1>
                <span style={{ color: "red" }}>Hello World</span>
            </h1>
            <p>
                COS420 Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <ol>
                <li>Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
            </ol>
            <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fsearch%3Fq%3Dcomputer&psig=AOvVaw1mzKWIjnBqfIaAg6ct9jjl&ust=1740600619635000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMCu3-PQ34sDFQAAAAAdAAAAABAE/800x600"
                alt="This isan image of a computer"
            />
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "auto",
                                height: "auto",
                                backgroundColor: "red",
                            }}
                        >
                            First column.
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "auto",
                                height: "auto",
                                backgroundColor: "red",
                            }}
                        >
                            Second column.
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
