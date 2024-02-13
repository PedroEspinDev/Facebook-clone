import { signIn } from "next-auth/react";
import React from "react";
import imageFacebook from "../public/images/login-logo-facebook.png";
import Image from "next/image";

const Login = () => {
  return (
    <div className="flex flex-col items-center mx-auto">
      <Image src={imageFacebook} width={300} height={100} />
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
