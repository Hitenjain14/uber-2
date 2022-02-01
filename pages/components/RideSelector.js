//@ts-nocheck
import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { carList } from '../../data/carList';

function RideSelector({ pickupCoordinates, dropoffCoordinates }) {
  const [rideDuration, setRideDuration] = useState(1);

  const getDuration = (pickupCoordinates, dropoffCoordinates) => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates};${dropoffCoordinates}?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1IjoiaGl0ZW5qYWluMTQiLCJhIjoiY2t5aXB1ZzV4MWV5djJvcGxubnpmMHRkaiJ9.gTCZFJCYDDThZhIziHCigw',
        })
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.routes.length > 0) {
          setRideDuration(data.routes[0].duration / 100);
        }
      });
  };

  useEffect(() => {
    if (pickupCoordinates && dropoffCoordinates) {
      getDuration(pickupCoordinates, dropoffCoordinates);
    }
  }, [pickupCoordinates, dropoffCoordinates]);

  const numberFormat = (value) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(value);

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => (
          <>
            <Car key={index}>
              <CarImage src={car.imgUrl} />
              <CarDetails>
                <Service>{car.service}</Service>
                <Time>5 min away</Time>
              </CarDetails>
              <Price>{numberFormat(rideDuration * car.multiplier * 70)}</Price>
            </Car>
          </>
        ))}
      </CarList>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`;

const Price = tw.div`
text-sm
`;

const CarDetails = tw.div`
flex-1
`;

const Service = tw.div`
font-medium
`;

const Time = tw.div`
text-xs text-blue-500
`;

const Car = tw.div`
flex items-center p-4
`;

const CarImage = tw.img`
h-14 mr-4
`;

const Title = tw.div`
text-gray-500 text-xs text-center py-2 border-b 
`;

const CarList = tw.div`
overflow-y-scroll
`;

export default RideSelector;
