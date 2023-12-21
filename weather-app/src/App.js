import React from 'react';
import hotBg from "./assets/hotBg.jpg";
import coldBg from "./assets/coldBg.jpg";
import './style.css';

function App() {
  return (
    <div className='app' style={{backgroundImage: `url(${coldBg})`}}>
      <div className='overlay'>
        <div className='container'>
          <div className='section section__inputs'>
            <input type="text" name="city" placeholder="Enter City..." />
            <button>F</button>
          </div>
          
          <div className='section section_temperature'>
            <div className='icon'>
              <h3>London, GB</h3>
              <img 
                src="https://freepngimg.com/thumb/categories/2275.png" 
                alt="weatherIcon"
              />
              <h3>Cloudy</h3>
            </div>
            <div className='temperature'>
              <h1>34 C</h1>
            </div>
          </div>

          {/* bottom description  */}
        </div>
      </div>
    </div>
  )
}

export default App;