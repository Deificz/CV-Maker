import { useState } from "react";

export default function Education() {
    return (
        <>
        <h1>Education</h1>
        <form action="">
            <div className="row">
                <label htmlFor="school">School</label>
                <input id="school" name="school" type="text" placeholder="University of Sheesh" required></input>
            </div>

            <div className="row">
                <label htmlFor="program">Program</label>
                <input id="program" name="program" type="text" placeholder="BS Computer Science" required></input>
            </div>

            <div className="row">
                <label htmlFor="graduation">Date of Graduation</label>
                <input id="graduation" name="graduation" type="date" required></input>
            </div>

            <button className="add-educ"><i className="fa-solid fa-plus"></i></button>
            
        </form>
        </>
    )
}