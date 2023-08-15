import { useState } from "react";


export default function Personal() {

    return (
        <>
        <h1>Personal</h1>
        <form action="">
            <div className="row">
                <label htmlFor="first-name">First Name </label>
                <input id="first-name" name="first-name" type="text" placeholder="John" required autoCapitalize="on" ></input>
            </div>

            <div className="row">
                <label htmlFor="last-name">Last Name </label>
                <input id="last-name" name="last-name" type="text" placeholder="Doe" required autoCapitalize="on"></input>
            </div>

            <div className="row">
                <label htmlFor="email">Email </label>
                <input id="email" name="email" type="email" placeholder="john_doe@email.com" required></input>
            </div>

            <div className="row">
                <label htmlFor="phone">Phone Number </label>
                <input id="phone" name="phone" type="number" placeholder="63912345678" required></input>
            </div>
        </form>
        </>
    )
}