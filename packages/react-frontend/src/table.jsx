import React from "react";
import { ImCross } from "react-icons/im";

function TableHeader() {
    return (
        <thead>
            <tr>
                <td>Name</td>
                <td>Jobs</td>
                <td></td>
            </tr>
        </thead>
    );
}

function TableBody(props) {
    const rows = props.CharacterData.map((row,index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button style={{
                        backgroundColor: "transparent",
                        border : "None"}} 
                        onClick={() => props.removeCharacter(props.CharacterData[index])}>
                        
                        <ImCross color="black" backcov/>
                    </button>
                </td>
            </tr>
        );
    }
    );
    return (
        <tbody>
            {rows}
        </tbody>
    );
}

function Table(props) {
    return(
        <table>
            <TableHeader/>
            <TableBody CharacterData = {props.CharacterData}
            removeCharacter = {props.removeCharacter}/>
        </table>
    )
}
export default Table;