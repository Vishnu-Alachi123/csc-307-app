import React,{useState,useEffect} from "react";
import Table from "./Components/table";
import Form from "./Components/form";
import "./main.css"




function MyApp() {
    const [characters, setCharacters] = useState([]);
    const [showForm,setShowForm] = useState([]);
    
    function removeOneCharacter(person) {
        const id = person.id;
        const promise = fetch(`http://localhost:8000/users/${id}`,{
            method: "DELETE"
        }).then( (res) => {
            if(res.status === 204){
                setCharacters(characters.filter((char) => char.id !== id));
            }else {
                console.log(`Failed to deleted user. Status : ${res.status}`)
            }
        })
        .catch((error) => console.log(error))
        return promise
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
        console.log(person);
        postUser(person).then((res) => 
            {
                if(res.status ===201){
                    return res.json();
                    //setCharacters([...characters, person]);
                }else{
                    console.log(`Post failed due to error ${res.status}`);
                };
            })
        .then((data) => {
            setCharacters([...characters, data]);
            console.log(data);
            })
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
            <button className="hide_button" onClick={toggleForm}>
                {showForm ? "Hide Form" : "Add Job"}
            </button>

            {showForm && <Form handleSubmit ={updateList}/>}
        </div>
    );
}


export default MyApp;   