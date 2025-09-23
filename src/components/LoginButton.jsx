"use client";
import { signIn } from "next-auth/react"

const LoginButton = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <button onClick={() => signIn()} className="px-5 py-1 border border-gray-300 rounded hover:bg-gray-100 outline-none mt-5 font-medium">Sign in</button>
        </div>
    );
};

export default LoginButton;