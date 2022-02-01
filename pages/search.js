import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

function Search() {
  const router = useRouter();
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login');
      }
    });
  }, []);
  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </FromToIcons>
        <InputBoxes>
          <Input
            onChange={(event) => setPickup(event.target.value)}
            value={pickup}
            type="text"
            required
            placeholder="Enter pickup location"
          />
          <Input
            onChange={(event) => setDropoff(event.target.value)}
            value={dropoff}
            type="text"
            required
            placeholder="Where to?"
          />
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>
      <Link
        href={{
          pathname: '/confirm',
          query: {
            pickup: pickup,
            dropoff: dropoff,
          },
        }}
      >
        <ConfirmLoc>Confirm Locations</ConfirmLoc>
      </Link>
    </Wrapper>
  );
}

const Wrapper = tw.div`
bg-gray-200 h-screen font-medium
`;

const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2
`;

const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`;

const ConfirmLoc = tw.div`
bg-black text-gray-200 text-center hover:text-white  
  p-2 m-4 cursor-pointer transform hover:scale-x-105 transition
  rounded-3xl
`;

const ButtonContainer = tw.div`
bg-white px-4
`;

const BackButton = tw.img`
h-12 cursor-pointer
`;

const FromToIcons = tw.div`
w-10 flex flex-col items-center
`;

const InputContainer = tw.div`
bg-white flex items-center px-4 space-x-2 mb-2
`;

const Circle = tw.img`
h-2.5 
`;

const Line = tw.img`
h-10 
`;

const Square = tw.img`
h-3 
`;

const InputBoxes = tw.div`
flex flex-col flex-1
`;

const Input = tw.input`
h-10 bg-gray-200 font-medium
my-2 rounded-2 p-2 outline-none border-none 
`;

const PlusIcon = tw.img`
w-10 h-10 font-medium bg-gray-200 rounded-full ml-3
`;

export default Search;
