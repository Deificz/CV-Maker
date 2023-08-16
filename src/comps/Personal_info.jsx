import { useState } from "react";


export default function Personal() {

    //State Variables
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [personal, showPersonal] = useState(false);

    //Event Listeners
    const handleFirstName = (e) =>{
        setFirstName(e.target.value);
    }
    const handleLastName = (e) =>{
        setLastName(e.target.value);
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handlePhone = (e) =>{
        setPhone(e.target.value);
    }
    const handlePersonal = () =>{
        showPersonal(!personal);
        
    }

    return {
        firstName,
        lastName,
        email,
        phone,
        renderPersonal: (
        <>
            <h1 onClick={handlePersonal}><i className="fa-solid fa-user-large personal-icon"></i> Personal</h1>
            {personal && <form action=""> 
                <div className="row">
                    <label htmlFor="first-name">First Name </label>
                    <input 
                    onChange={handleFirstName}
                    value={firstName}
                    id="first-name" 
                    name="first-name" 
                    type="text" 
                    placeholder="John" 
                    required 
                    autoCapitalize="on" ></input>
                </div>

                <div className="row">
                    <label htmlFor="last-name">Last Name </label>
                    <input 
                    onChange={handleLastName} 
                    value={lastName}
                    id="last-name" 
                    name="last-name" 
                    type="text" 
                    placeholder="Doe" 
                    required 
                    autoCapitalize="on"></input>
                </div>

                <div className="row">
                    <label htmlFor="email">Email </label>
                    <input 
                    onChange={handleEmail} 
                    value={email}
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="john_doe@email.com" 
                    required></input>
                </div>

                <div className="row">
                    <label htmlFor="phone">Phone Number </label>
                    <input 
                    onChange={handlePhone} 
                    value={phone}
                    id="phone" 
                    name="phone" 
                    type="number" 
                    placeholder="63912345678" 
                    required></input>
                </div>
            </form>}
        </>
        ),
    }
}