import * as React from 'react';
import { useState } from 'react';
// import { auth } from '../fire';
// import { createUserWithEmailAndPassword } from 'firebase/auth'

const Register=()=> {

    const [user,setUser] = useState('');
    const [authState,setAuthState] = useState('');
    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');

    // const onSignUpHandle = () => {
    //     if(email !== null && password !== null) {
    //         createUserWithEmailAndPassword(auth, email, password)
    //         .then((user) => {
    //             setUser(user.user.email);
    //             setAuthState('home')
    //         })
    //         .catch((err) => {
    //             alert(err)
    //         })
    //     }
    // }

    return (
        <div className=' w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
            <h1 className='text-5xl font-semibold'>Register</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>New to Image Looker! Register Yourself</p>
            <div className='mt-8'>
                <div className='flex flex-col'>
                    <label className='text-lg font-medium'>Email</label>
                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder="Enter your email"/>
                </div>
                <div className='flex flex-col mt-4'>
                    <label className='text-lg font-medium'>Password</label>
                    <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder="Enter your email"
                        type={"password"}
                    />
                </div>
                <div className='mt-8 flex justify-between items-center'>
                     
                    
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button 
                    onClick={""}
                        // onClick={onSignUpHandle}
                        className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>
                        Register
                    </button>
                    
                </div>
                 
            </div>
        </div>
    )
}
export default Register;