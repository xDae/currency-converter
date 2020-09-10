import React from 'react';

import './App.css';

import BoxConverter from "./components/BoxConverter";
import RateHistory from "./components/RateHistory";

const App = () => {
  const [rateHistory, setRateHistory] = React.useState([]);

  return (
    <div className="App">
      <BoxConverter onSetHistory={setRateHistory} />
      <RateHistory rateHistory={rateHistory} />
    </div>
  );
}

export default App;
