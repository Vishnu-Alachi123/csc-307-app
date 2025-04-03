import React from "react";

function TableHeader() {
    return (
        <thead>
            <tr>
                <td>Name</td>
                <td>Jobs</td>
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
                    <button onClick={() => props.removeCharacter(index)}>
                        delete
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