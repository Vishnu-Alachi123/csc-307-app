import React,{useState} from "react";
import "./form.css"


function Form(props) {
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

    function submitForm() {
        props.handleSubmit(person);
        setPerson({name: "",job: ""});
    }
    return (
        <div className="form_container">
            <form>
                <label htmlFor ="name" >Name</label>
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
                <input type="button" value="Submit" onClick={submitForm} />
            </form>
        </div>
        
    )
}
export default Form;