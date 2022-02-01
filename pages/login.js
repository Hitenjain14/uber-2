//@ts-nocheck
import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../firebase';

function Login() {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/');
      }
    });
  }, []);

  return (
    <Wrapper>
      <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" />
      <Title>Log In To Access Your Account</Title>
      <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <SignInButton
        onClick={() => {
          signInWithPopup(auth, provider);
        }}
      >
        Sign In With Google
      </SignInButton>
    </Wrapper>
  );
}

const Wrapper = tw.div`font-medium 
flex flex-col bg-gray-200 h-screen w-screen p-4 overflow-x-hidden
`;

const Title = tw.div`
text-5xl pt-4 text-gray-500
`;

const HeadImage = tw.img`
object-contain w-full
`;

const UberLogo = tw.img`
h-8 object-contain w-auto self-start mt-2 font-mono
`;

const SignInButton = tw.button`
bg-black text-white py-4 text-center mt-12 self-center w-full 
`;

export default Login;
