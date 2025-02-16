import { useState } from "react";
import { evaluate } from "mathjs"
import "./Calculator.css"
export default function Calculator() {
    const [value, setValue] = useState("")
    const display = (e) => {
        setValue(value + e.target.value)
    }

    const calculate  = () => {
        try {
            setValue(evaluate(value))
        }
        catch {
            setValue("Error")
        }
    }
    return (
        <section className="cal">
            <h1 className="header">Calculator</h1>
            <table border="1">
                <tbody>
                    <tr>
                        <td colSpan="3">
                            <input type="text" id="result" value={value} readOnly/>
                        </td>
                        <td>
                            <input type="button" value="C" onClick={() => {setValue("")}} />
                        </td>
                    </tr>
                    <tr>
                        <td><input type="button" value="1" onClick={display} /></td>
                        <td><input type="button" value="2" onClick={display} /></td>
                        <td><input type="button" value="3" onClick={display} /></td>
                        <td><input type="button" value="/" onClick={display} /></td>
                    </tr>
                    <tr>
                        <td><input type="button" value="4" onClick={display} /></td>
                        <td><input type="button" value="5" onClick={display} /></td>
                        <td><input type="button" value="6" onClick={display} /></td>
                        <td><input type="button" value="-" onClick={display} /></td>
                    </tr>
                    <tr>
                        <td><input type="button" value="7" onClick={display} /></td>
                        <td><input type="button" value="8" onClick={display} /></td>
                        <td><input type="button" value="9" onClick={display} /></td>
                        <td><input type="button" value="+" onClick={display} /></td>
                    </tr>
                    <tr>
                        <td><input type="button" value="." onClick={display} /></td>
                        <td><input type="button" value="0" onClick={display} /></td>
                        <td><input type="button" value="=" onClick={calculate} /></td>
                        <td><input type="button" value="*" onClick={display} /></td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}
