import { useState } from "react";

export default function Experience() {
    return (
        <>
        <h1>Work Experience</h1>
        <form action="">
            <div className="row">
                <label htmlFor="company">Company Name</label>
                <input id="company" name="company" type="text" placeholder="Company A" required></input>
            </div>

            <div className="row">
                <label htmlFor="position">Position</label>
                <input id="position" name="position" type="text" placeholder="Software Developer" required></input>
            </div>

            <div className="row">
                <label htmlFor="responsibility">Responsibilities</label>
                <textarea id="responsibility" name="responsibility" type="textbox"  maxLength = "69" rows={10} required></textarea>
            </div>

            <div className="row">
                <label htmlFor="span">Employment Span</label>
                <label htmlFor="start">Start</label>
                <input id="start" name="start" type="date" required></input>
                <label htmlFor="end">End</label>
                <input id="end" name="end" type="date" required></input>
            </div>

            <button className="add-educ"><i className="fa-solid fa-plus"></i></button>
            
        </form>
        </>
    )
}