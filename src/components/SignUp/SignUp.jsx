import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase.init';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked ;
        console.log(email , password, terms);

        // reset error and status
        setErrorMessage("");
        setSuccess(false);

        if(!terms){
            setErrorMessage("Please accept the terms and conditions");
            return;
        }

        if(password.length < 6){
            setErrorMessage("Password must be at least 6 characters long");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setSuccess(true);
                
            })
            .catch((error) => {
                console.error("ERROR", error.message);
                setErrorMessage(error.message);
                setSuccess(false);
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
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={showPassword ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    <button 
                        onClick={()=> {
                            setShowPassword(!showPassword);
                        }}
                        className='btn btn-xs absolute right-2 top-12'>
                        {
                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye> 
                        }
                    </button>
                </div>
                <div className="form-control">
                    <label className="label justify-start gap-2 cursor-pointer">
                        <input type="checkbox" name='terms' className="checkbox" />
                        <span className="label-text">Accept Our Terms and 
                            Condition.
                        </span>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
                {
                    errorMessage && <p className='text-red-500'>{errorMessage}</p>
                }
                {
                    success && <p className='text-green-500'>User created successfully!</p>
                }
            </form>
        </div>
    );
};

export default SignUp;