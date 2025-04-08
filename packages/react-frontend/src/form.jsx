import React,{useState} from "react";


function Form() {
    const [person, setPerson] = useState({
        name: "",
        job: ""
    });

    function HandleChange(event) {
        const {name, value} = event.target;
        if(name ==="job")
            setPerson({name:person["name"],job:value});
        else setPerson({name:value, job:person["job"]});
    }
    return (
        <form>
            <label htmlfor ="name" >Name</label>
            <input
                type = "text"
                name="name"
                id = "name"
                onChange={HandleChange}
                value={person.name}
            />
            <label htmlFor="job">Job</label>
            <input
                type = "text"
                name="job"
                id = "job"
                onChange={HandleChange}
                value={person.job}
            />
        </form>
    )
}
export default Form;