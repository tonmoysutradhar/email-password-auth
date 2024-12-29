import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase.init';

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState("");

    const handleSignUp = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email , password);

        // reset error and status
        setErrorMessage("");

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                
            })
            .catch((error) => {
                console.error("ERROR", error.message);
                setErrorMessage(error.message);
            })
        
    }

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-8">
            <h2 className="text-4xl font-bold mx-auto pt-8">Sign Up Now!</h2>
            <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
                {
                    errorMessage && <p className='text-red-500'>{errorMessage}</p>
                }
            </form>
        </div>
    );
};

export default SignUp;