import React, {useState, useEffect} from 'react';

import data from './data.json';

import PlansList from './components/PlansList';
import Toggle from './components/Toggle';

const App = () => {
  const [plans, setPlans] = useState([]);
  const [showMonthly, setShowMonthly] = useState(true);


  useEffect(() => {
    setPlans(data);
  }, [])

  return (
    <div className="flex flex-col sm:h-screen bg-blue-100" >
      <Toggle showMonthly={showMonthly} setShowMonthly={setShowMonthly}/>
      <PlansList plans={plans} showMonthly={showMonthly}/>
    </div>
  );
}

export default App;
