"use client";  // This marks the component as a Client Component in Next.js
import React, { useState } from 'react' ;
import google from './images/google.png';
import facebook from './images/fb.png';
import Image from 'next/image';
import email_icon from './images/email.jpg';
import password_icon from './images/lock_in.png';
import password_exist from './images/lock_x.png';
export default function Login() {
  const [sign_in ,set_SignedIn] = useState<boolean>(true);
  const [sign_up ,set_SignedUp] = useState<boolean>(false);
  const [password ,set_Password] = useState<string>('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    
    event.preventDefault();
    console.log(event)
    // Handle login logic here
  };

 
  return (
    <div className="bg-white w-96 p-6 grid gap-4 shadow-lg z-50 border  rounded-md">
  <div className='grid grid-cols-2 items-center gap-4'>
    <h2 id='conn' className="text-center p-4 font-bold text-lg text-blue-400 cursor-pointer hover:underline md:underline-offset-4  transition-all duration-300 rounded-md"
    onClick={() => {
      set_SignedIn(true);
      set_SignedUp(false);
    }}
    >
      Connexion
    </h2>
    <h2 className='text-center font-bold text-gray-400 hover:underline md:underline-offset-4 cursor-pointer'
    onClick={() =>{
      set_SignedIn(false);
      set_SignedUp(true);
    }}
    >
      Inscription
    </h2>
  </div>

  <form className="grid gap-4 mt-4" onSubmit={handleSubmit}>
    {
      sign_up && (
        <>
          <div >
            <input
              type="text"
              id="username"
              className="w-full p-2 border bg-slate-100 rounded-md"
              placeholder="Nom d'utilisateur"
            />
          </div>
          <div>
            <input type='text' placeholder="Phone Number" className='w-full p-2 border bg-slate-100 rounded-md' />
          </div>
          <div>
            <input type='text' placeholder="Adresse " className='w-full p-2 border bg-slate-100 rounded-md' />
          </div>
          <div>
            <input type='text' placeholder="Cin " className='w-full p-2 border bg-slate-100 rounded-md' />
          </div>
          <div>
            <input type='text' placeholder="City " className='w-full p-2 border bg-slate-100 rounded-md' />
          </div>
         
        </>
      )
    }
    <div className=''>
    <div className="relative w-full">
  <input
    type="text"
    id="username"
    className="w-full p-2 pl-10 border bg-slate-100 rounded-md"
    placeholder={sign_in ? "Adresse e-mail / mobile" : "Adresse e-mail"}
  />
  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <i className="glyphicon glyphicon-envelope">
    <Image src={email_icon} alt="email" className="w-6 h-6 mr-7 -ml-1 rounded-md" />  
    </i> 
  </span>
</div>

    </div>
    <div className="relative w-full">
  <input
    type="password"
    id="password"
    className="w-full p-2 pl-10 border text-black bg-slate-100 rounded-md"
    placeholder="Mot de passe"
    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
      set_Password(e.target.value);
    }}
  />
  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    {
      password.length > 0 ? (
        <Image
          src={password_exist}
          alt="lock"
          className="w-5 h-5"
        />
      )
     : <Image src={password_icon} alt="lock" className="w-5 h-5" />
    }
    
  </span>
</div>
<span className="text-gray-600">J&apos;ai oublié mon mot de passe</span>


    {
     sign_in &&     
     <div className="flex items-center">
     <input type="checkbox" id="rememberMe" className="mr-2" />
     <label htmlFor="rememberMe" className='text-red-500'>Se souvenir de moi</label>
   </div>  
    }

    <button type="submit" className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
    {sign_in ? (
  <span className="text-white">Se connecter</span>
) : (
  <span className="text-white">S&apos;inscrire</span>
)}

    </button>
  </form>
  <div className="text-gray-400 text-center relative  space-x-4 flex items-center">
  <span className="absolute left-9 px-15 w-24  border-t border-gray-100" style={{ transform: 'translateX(-30%)' }}></span>
  <span className="px-32 text-center items-center">ou</span>

  <span className="absolute right-9 px-15 w-24 border-t border-gray-100" style={{ transform: 'translateX(30%)' }}></span>
</div>

  <div className="mt-4 text-center">
    <button className="flex items-center justify-center w-full bg-blue-600 border p-2 rounded-md text-gray-400 hover:bg-gray-100">
      <Image src={facebook} alt="Facebook" className="w-6 h-6 mr-12 -ml-7 rounded-md" />
      Se connecter avec Facebook
    </button>
    <button className="flex items-start justify-center w-full bg-blue-600 text-gray-400 border p-2 mt-2 rounded-md hover:bg-gray-100">
      <Image src={google} alt="Google" className="w-6 h-6 mr-12 -ml-12 text-left rounded-md" />
      Se connecter avec Google
    </button>
  </div>
</div>

  );
}
