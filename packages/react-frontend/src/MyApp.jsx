import React,{useState} from "react";
import Table from "./table";
import Form from "./form";

function MyApp() {
    const [characters, setCharacters] = useState([]);
    
    function removeOneCharacter(index) {
        const updated = characters.filter((character, i) => {
            return i !== index;    
        });
        setCharacters(updated);
    }
    return (
        <div className="container">
            <Table 
            CharacterData = {characters}
            removeCharacter = {removeOneCharacter}
            />
            <Form />
        </div>
    );
}
export default MyApp;   