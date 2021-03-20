import React from 'react';

const Toggle = ({showMonthly, setShowMonthly}) => {
  return (
    <div className="flex flex-col text-grayish-blue mb-12 mt-6 items-center">
      <h2 className="text-2xl">Our Pricing</h2>
      <div className="flex flex-row items-center mt-6">
        <span className="text-sm text-light-grayish-blue">Monthly</span>
        <div
          className={`w-16 h-8 flex items-center rounded-full p-1 mx-4 bg-gray-400 ${!showMonthly && "bg-purple-500"}`}
          onClick={() => setShowMonthly(!showMonthly)}
        >
          <div className={`bg-white w-6 h-6 rounded-full shadow-md transform transition duration-500 ease-in-out ${!showMonthly && "translate-x-8"}`} />
        </div>
        <span className="text-sm text-light-grayish-blue">Annually</span>
      </div>
    </div>
  )
}

export default Toggle;