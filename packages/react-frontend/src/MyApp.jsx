import React,{useState} from "react";
import Table from "./table";
import Form from "./form";



function MyApp() {
    const [characters, setCharacters] = useState([]);
    const [showForm,setShowForm] = useState([]);
    
    function removeOneCharacter(index) {
        const updated = characters.filter((character, i) => {
            return i !== index;    
        });
        setCharacters(updated);
    }

    function toggleForm() { 
        setShowForm(!showForm)
    }

    function updateList(person){
        setCharacters([...characters,person]);
    }

    return (
        <div className="container">
            <Table 
            CharacterData = {characters}
            removeCharacter = {removeOneCharacter}
            />
            <button onClick={toggleForm}>
                {showForm ? "Hide Form" : "Add Job"}
            </button>

            {showForm && <Form handleSubmit ={updateList}/>}
        </div>
    );
}


export default MyApp;   