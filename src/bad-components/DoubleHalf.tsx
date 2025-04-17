import React from "react";
import { Button } from "react-bootstrap";
import { useDhValue } from "./DoubleHalfState";
/*The DoubleHalf component provides two buttons. One doubles the value, the other halves the value.

Currently, the component is commented out because it is broken and crashes your application. Uncomment the component’s instantiation in src/App.tsx, and then fix the Component so that it works correctly.

You must NOT add or remove components; you can only modify the existing components. Hint: You are free to delete files if they serve no purpose, though… */

function Doubler({
    setDhValue,
    dhValue,
}: {
    setDhValue: (val: number) => void;
    dhValue: number;
}): React.JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver({
    setDhValue,
    dhValue,
}: {
    setDhValue: (val: number) => void;
    dhValue: number;
}): React.JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useDhValue();
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue} />
            <Halver dhValue={dhValue} setDhValue={setDhValue} />
        </div>
    );
}
