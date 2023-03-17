import { useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

export const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
    setTimeout(() => {
        // 👇 Redirects to about page, note the `replace: true`
        navigate('/login', { replace: true });
        }, 3000);
    }, []);

  return <div>Loging out...</div>;
  
}