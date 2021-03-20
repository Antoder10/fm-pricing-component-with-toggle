import React from 'react';

const PlanCard = ({plan, showMonthly}) => {
  const {name, priceMonth, priceYear, storage, users, transferRate, isFeatured} = plan;
  console.log(showMonthly)

  return (
    <div className={`flex flex-col shadow-md rounded-md mb-8 sm:mb-0 py-4 px-8 items-center ${isFeatured ? 'bg-gradient-to-r from-purple-400 to-purple-700 text-very-light-grayish-blue py-8' : 'text-grayish-blue bg-white'}`}>
      <span className="font-bold mb-6">{name}</span>
      <div className={`flex flex-row items-center mb-4 pb-6 border-b-2 w-full justify-center ${!isFeatured && 'text-dark-grayish-blue'}`}>
        <span className="text-2xl mr-2">$</span>
        <span className="text-6xl text-center">{`${showMonthly ? priceMonth : priceYear}`}</span>
      </div>
      <span className="border-b-2 mb-4 pb-4 w-full text-center">{storage}</span>
      <span className="border-b-2 mb-4 pb-4 w-full text-center">{users}</span>
      <span className="border-b-2 mb-4 pb-4 w-full text-center">{transferRate}</span>
      <button className="uppercase mb-4 mt-2 py-2 px-16 border-2 rounded-md border-purple-200">Learn More</button>
    </div>
  )
}

export default PlanCard;