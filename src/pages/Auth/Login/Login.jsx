import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import SocalLogin from '../SocalLogin/SocalLogin';

const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {signInUser} = useAuth();

    const handleLogin = (data) => {
        console.log("OK", data);
        signInUser(data.email, data.password)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <h3 className='text-3xl text-primary text-center mb-5'>Welcome!</h3>
            <form onSubmit={handleSubmit(handleLogin)}>
               <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                 <div className="card-body">
                    <fieldset className="fieldset">
                        {/* Email */}
                    <label className="label">Email</label>
                    <input type="email" {...register("email", {required: true})} className="input" placeholder="Email" />
                     {errors.email?.type === "required" && <p className='text-red-500'>Email is required</p>}

                    {/* Password */}
                    <label className="label">Password</label>
                    <input type="password" {...register("password", {required: true, minLength: 6,
                        pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
                    })} className="input" placeholder="Password" />

                    {
                        errors.password?.type === "required" && <p className='text-red-500'>Password is required</p>
                    }
                    {
                        errors.password?.type === "minLength" && <p className='text-red-500'>Password must be 6 characters</p>
                    }
                    {
                        errors.password?.type === "pattern" && <p className='text-red-500'>Password must have at least one uppercase, at least one lowercase, at least one number, and at least one special characters</p>
                    }
                    {/*  */}
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-primary text-black mt-4">Login</button>
                    </fieldset>
                      <p>New to zapShift <Link className='text-primary' to="/register">Register</Link> </p>
                </div>
               </div> 
             
            </form>
            <SocalLogin/>
        </div>
    );
};

export default Login;