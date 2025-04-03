import React,{useState} from "react";
import Table from "./table";

function MyApp() {
    const [characters, setCharacters] = useState([
        {
            name : "Charlie",
            job : "Janitor"
        },
        {
            name : "Mac",
            job : "Bouncer"
        },
        {
            name : "Dee",
            job : "Aspiring actress"
        },
        {
            name : "Dennis",
            job : "Bartender"
        }
    ])
    
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
        </div>
    );
}
export default MyApp;   