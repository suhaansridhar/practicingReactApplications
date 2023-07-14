import React from "react";

function FormData(){

    const [form, setForm] = React.useState({
        "FirstName" : "",
        "LastName" : "",
        "email" : "",
        "comments": ""
    })

    function handleChange(event){
        const {name, value} = event.target;
        setForm(prevForm => {
            return(
                {...prevForm, 
                [name] : value
                }
            )
        })
        console.log(form)
    }

    function submitButton(){
        setForm({
            "FirstName" : "",
            "LastName" : "",
            "email" : "",
            "comments": ""
        })
    }

    return(
        <div className="form--data--container">
            <div className="form--container">
                <div>
                    <label htmlFor="FirstName">First Name:</label>
                    <input type="text" value={form.FirstName} onChange={handleChange} name="FirstName"/>
                </div>
                <div>
                    <label htmlFor="LastName">Last Name:</label>
                    <input type="text" value={form.LastName} onChange={handleChange} name="LastName"/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" value={form.email} onChange={handleChange} name="email"/>
                </div>
                <div>
                    <label htmlFor="comments">Comments</label>
                    <input type="text" value={form.comments} onChange={handleChange} name="comments" />
                </div>
                <button className="submitButton" onClick={submitButton}>Submit</button>
            </div>
        </div>
    )
}

export default FormData;