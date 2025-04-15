import React from "react";
import { ImCross } from "react-icons/im";
import './table.css';

function TableHeader() {
    return (
        <thead>
            <tr>
                <td className="table-title">ID</td>
                <td className="table-title">Name</td>
                <td className="table-title">Jobs</td>
                <td></td>
            </tr>
        </thead>
    );
}

function TableBody(props) {
    const rows = props.CharacterData.map((row,index) => {
        return (
            <tr key={index}>
                <td>{row.id}</td>
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
        <div className="table_container">
            <table>
                <TableHeader/>
                <TableBody CharacterData = {props.CharacterData}
                    removeCharacter = {props.removeCharacter}/>
            </table>
        </div>
        
    )
}
export default Table;