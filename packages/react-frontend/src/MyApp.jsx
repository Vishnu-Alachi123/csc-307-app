import React,{useState,useEffect} from "react";
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

    // function updateList(person){
    //     setCharacters([...characters,person]);
    // }

    function fetchUsers() {
        const promise = fetch("http://localhost:8000/users");
        return promise;
    }

    useEffect(() => {
        fetchUsers().then((res) => res.json())
        .then(json => setCharacters(json["users_list"]))
        .catch((error) => {console.log(error);});
    },[] );

    function postUser(person) {
        const promise = fetch("http://localhost:8000/users", {
            method: "POST",
            headers: { 
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(person),
        });
        return promise;
    }

    function updateList(person) {
        console.log(person)
        postUser(person).then( () => setCharacters([...characters, person]))
        .catch((error) => {
            console.log(error);
        })
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