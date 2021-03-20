import React from 'react';

import PlanCard from './PlanCard';

const PlansList = ({plans, showMonthly}) => {
  return (
    <div className="flex flex-col px-8 sm:flex-row sm:justify-center sm:items-center">
      {plans.map(plan => {
        return <PlanCard plan={plan} showMonthly={showMonthly} />
      })}
    </div>
  )
}

export default PlansList;