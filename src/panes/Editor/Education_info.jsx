import { useState } from "react";

export default function Education() {

    const [school, setSchool] = useState("");
    const [program, setProgram] = useState("");
    const [graduation, setGraduation] = useState("");
    const [education, showEducation] = useState(false);

    const handleSchool = (e) =>{
        setSchool(e.target.value);
    }
    const handleProgram = (e) =>{
        setProgram(e.target.value);
    }
    const handleGraduation = (e) =>{
        setGraduation(e.target.value);
    }
    const handleEducation = () =>{
        showEducation(!education);
    }

    return {
        school,
        program,
        graduation,
        renderEduc: (
            <>
            <h1 onClick={handleEducation}><i className="fa-solid fa-school"></i> Education</h1>
            {education &&  <form action="">
                <div className="row">
                    <label htmlFor="school">School</label>
                    <input
                    onChange={handleSchool} 
                    value={school}
                    id="school" 
                    name="school" 
                    type="text" 
                    placeholder="University of Sheesh" 
                    required></input>
                </div>
    
                <div className="row">
                    <label htmlFor="program">Program</label>
                    <input
                    onChange={handleProgram} 
                    value={program}
                    id="program" 
                    name="program" 
                    type="text" 
                    placeholder="BS Computer Science" 
                    required></input>
                </div>
    
                <div className="row">
                    <label htmlFor="graduation">Date of Graduation</label>
                    <input
                    onChange={handleGraduation}  
                    value={graduation}
                    id="graduation" 
                    name="graduation" 
                    type="date" 
                    required></input>
                </div>
                
            </form>}
            </>
        )
    }
}