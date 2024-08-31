"use client";  // This marks the component as a Client Component in Next.js

import styles from '../app/ui/home.module.css';

import Login from './Components/Login';
import { useState } from 'react';
export default function Home() {
  const [show_connexion, set_show_connexion] = useState<boolean>(false);
  return (
    <div className='bg-white' style={{
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
  <nav>
  <ul className={styles.nav + ' flex justify-end'}>
    <li className='p-5 bg-blue-700 rounded-md border cursor-pointer'>
      <a  onClick={()=> {
        set_show_connexion(true);
      }} className={styles.connexion}>Connexion</a>
    </li>
  </ul>
</nav>

    {show_connexion ? <Login /> :null}
    </div>
    
  );
}
