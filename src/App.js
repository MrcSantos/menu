import './App.css';
import raw_config from './menu.txt';
import React, { useEffect, useState } from 'react';
import SubMenu from './subMenu';

function App() {
  const [config, setConfig] = useState({})

  useEffect(() => {
    fetch(raw_config)
      .then(r => r.text())
      .then(text => {
        setConfig(JSON.parse(text))
      });
  }, [config])

  return (
    <div className="App">
      <SubMenu config={config} />
    </div>
  );
}

export default App;