import React, { useState } from "react";
import axios from 'axios';

function App() {
  const city = 'holtville';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cfa67be28c113176d4ae11eb2135395a`;

  return (
    <div className="app">

    </div>
  );
}

export default App;
