import { signIn } from "next-auth/react";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center mx-auto">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
        width={200}
        height={200}
      />
      <a
        onClick={signIn}
        className="px-20 py-4 z-10 text-2xl cursor-pointer-mt-16 bg-blue-500 rounded-md text-white"
      >
        Login
      </a>
    </div>
  );
};

export default Login;
