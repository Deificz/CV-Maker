import { useState } from "react";

export default function Experience() {

    //State Variables
    const [companyA, setCompanyA] = useState("");
    const [positionA, setPositionA] = useState("");
    const [responsibilityA, setResponsibilityA] = useState("");
    const [startA, setStartA] = useState("");
    const [endA, setEndA] = useState("");

    const [companyB, setCompanyB] = useState("");
    const [positionB, setPositionB] = useState("");
    const [responsibilityB, setResponsibilityB] = useState("");
    const [startB, setStartB] = useState("");
    const [endB, setEndB] = useState("");

    const [work1, showWork1] = useState(false);
    const [work2, showWork2] = useState(false);

    const handleWork1 = () =>{
        showWork1(!work1);
    }

    const handleWork2 = () =>{
        showWork2(!work2);
    }

    //Event Listeners
    const handleCompanyA = (e) => {
        setCompanyA(e.target.value);
    }
    const handlePositionA= (e) => {
        setPositionA(e.target.value);
    }
    const handleReponsibilityA = (e) => {
        setResponsibilityA(e.target.value);
    }
    const handleStartA = (e) => {
        setStartA(e.target.value);
    }
    const handleEndA = (e) => {
        setEndA(e.target.value);
    }

    const handleCompanyB = (e) => {
        setCompanyB(e.target.value);
    }
    const handlePositionB= (e) => {
        setPositionB(e.target.value);
    }
    const handleReponsibilityB = (e) => {
        setResponsibilityB(e.target.value);
    }
    const handleStartB = (e) => {
        setStartB(e.target.value);
    }
    const handleEndB = (e) => {
        setEndB(e.target.value);
    }
  
    return {
        companyA,positionA,responsibilityA,startA,endA,
        companyB,positionB,responsibilityB,startB,endB,
        renderExp: (
            <>
            <h1 onClick={handleWork1}><i className="fa-solid fa-briefcase"></i> Work Experience 1</h1>
            {work1 && <form action="">
                <div className="row">
                    <label htmlFor="company">Company Name</label>
                    <input
                    onChange={handleCompanyA} 
                    value={companyA}
                    id="company" 
                    name="company" 
                    type="text" 
                    placeholder="Company A" 
                    required></input>
                </div>
    
                <div className="row">
                    <label htmlFor="position">Position</label>
                    <input
                    onChange={handlePositionA}  
                    value={positionA}
                    id="position" 
                    name="position" 
                    type="text" 
                    placeholder="Software Developer" 
                    required></input>
                </div>
    
                <div className="row">
                    <label htmlFor="responsibility">Responsibilities</label>
                    <textarea
                    onChange={handleReponsibilityA} 
                    value={responsibilityA}
                    id="responsibility" 
                    name="responsibility" 
                    type="textbox"  
                    maxLength = "69" 
                    rows={10} 
                    required></textarea>
                </div>
    
                <div className="row">
                    <label htmlFor="span">Employment Span</label>
                    <label htmlFor="start">start:</label>
                    <input
                    onChange={handleStartA} 
                    value={startA}
                    id="start" 
                    name="start" 
                    type="date" 
                    required></input>
                    <label htmlFor="end">end:</label>
                    <input
                    onChange={handleEndA} 
                    value={endA}
                    id="end" 
                    name="end" 
                    type="date" required></input>
                </div>
            </form>}

            <h1 onClick={handleWork2}><i className="fa-solid fa-briefcase"></i> Work Experience 2 (Optional)</h1>
            {work2 && <form action="">
                <div className="row">
                    <label htmlFor="companyB">Company Name</label>
                    <input
                    onChange={handleCompanyB} 
                    value={companyB}
                    id="companyB" 
                    name="companyB" 
                    type="text" 
                    placeholder="Company B" 
                    required></input>
                </div>
    
                <div className="row">
                    <label htmlFor="positionB">Position</label>
                    <input
                    onChange={handlePositionB}  
                    value={positionB}
                    id="positionB" 
                    name="positionB" 
                    type="text" 
                    placeholder="Software Developer" 
                    required></input>
                </div>
    
                <div className="row">
                    <label htmlFor="responsibilityB">Responsibilities</label>
                    <textarea
                    onChange={handleReponsibilityB} 
                    value={responsibilityB}
                    id="responsibilityB" 
                    name="responsibilityB" 
                    type="textbox"  
                    maxLength = "69" 
                    rows={10} 
                    required></textarea>
                </div>
    
                <div className="row">
                    <label htmlFor="spanB">Employment Span</label>
                    <label htmlFor="startB">start:</label>
                    <input
                    onChange={handleStartB} 
                    value={startB}
                    id="startB" 
                    name="startB" 
                    type="date" 
                    required></input>
                    <label htmlFor="endB">end:</label>
                    <input
                    onChange={handleEndB} 
                    value={endB}
                    id="endB" 
                    name="endB" 
                    type="date" required></input>
                </div>
            </form>}
            </>
        )
    }
       
    
}