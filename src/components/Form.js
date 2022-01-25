import { useState } from "react";

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const [isConfirmValid, setIsConfirmValid] = useState(true);
    const confirmErr = "Passwords do not match!";

    const handleConfirm = (event) => {
        const newConfirm = event.target.value;

        setConfirmPassword(newConfirm);

        if (newConfirm !== password && newConfirm.length !== 0){
            setIsConfirmValid(false);
        }
        else{
            setIsConfirmValid(true);
        }
    }

    return (
        <form>
            <div>
            <label htmlFor="firstName">First Name</label>
            <input
            type="text"
            id="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            // value={firstName}
            />
            {firstName.length < 2 && <h2>First Name must be at least 2 characters long</h2>}
            <label htmlFor="lastName">Last Name</label>
            <input
            type="text"
            id="LastName"
            onChange={(e) => setLastName(e.target.value)}
            />
            {lastName.length < 2 && <h2>Last Name must be at least 2 characters long</h2>}

            <label htmlFor="email">Email</label>
            <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            />
            {email.length < 5 && <h2>Email must be at least 5 characters long</h2>}

            <label htmlFor="password">Password</label>
            <input
            type="text"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            />
            {password.length < 8 && <h2>Your password must be at least 8 characters long</h2>}

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
            type="text"
            id="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}


            />
            {confirmPassword.length < 8 && <h2>Confirmed password must be 8 characters long</h2>}
            {isConfirmValid && <span style={{ color: "red" }}>{confirmErr}</span>}

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