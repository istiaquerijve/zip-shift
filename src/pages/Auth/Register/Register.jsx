import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import SocalLogin from '../SocalLogin/SocalLogin';
// import { register } from 'swiper/element';



const Register = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {registerUser} = useAuth()
    const handleRegistrion = (data) => {
        console.log("Ok", data.photo[0]);
        // const profileImg = data.photo[0]
        
        registerUser(data.email, data.password)
        .then(result => {
            console.log(result.user);
            
        })
        .catch(error => {
            console.log(error);
            
        })
    }

    return (
         <div>
             <h3 className='text-3xl text-primary text-center mb-5'>Welcome!</h3>
            <form onSubmit={handleSubmit(handleRegistrion)}>
                <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            {/* name */}
                    <label className="label">Name</label>
                    <input type="text" {...register("name", {required: true})} className="input" placeholder="Your name" />
                    {errors.name?.type === "required" && <p className='text-red-500'>Name is required</p>}

                            {/* photo */}
                    <label className="label">Photo</label>
                    <input type="file" {...register("photo", {required: true})} className="file-input" placeholder="Your photo" />
                    {errors.photo?.type === "required" && <p className='text-red-500'>Photo is required</p>}

                            {/* email */}
                    <label className="label">Email</label>
                    <input type="email" {...register("email", {required: true})} className="input" placeholder="Email" />
                    {errors.email?.type === "required" && <p className='text-red-500'>Email is required</p>}

                    {/* password */}
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
                    <button className="btn btn-primary text-black mt-4">Register</button>
                    </fieldset>
                    <p>Have an account <Link className='text-primary' to="/login">LogIn</Link> </p>
                    </div>
                 </div>   
            </form>
            <SocalLogin/>
        </div>
    );
};

export default Register;