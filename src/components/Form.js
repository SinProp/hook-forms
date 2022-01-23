import { useState } from "react";
const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <form>
            <div>
            <label htmlFor="firstName">First Name</label>
            <input
            type="text"
            id="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            />
            
            <label htmlFor="lastName">Last Name</label>
            <input
            type="text"
            id="LastName"
            onChange={(e) => setLastName(e.target.value)}
            />
            
            <label htmlFor="email">Email</label>
            <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            />
            
            <label htmlFor="password">Password</label>
            <input
            type="text"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
            type="text"
            id="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            />

        <h2>First Name: {firstName}</h2>
        <h2>Last Name: {lastName}</h2>
        <h2>Email: {email}</h2>
        <h2>Password: {password}</h2>
        <h2>Confirm Password: {confirmPassword}</h2>

        </div>
        </form>
        );

    };

export default Form;