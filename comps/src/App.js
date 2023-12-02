import React, { useState } from 'react'
import Dropdown from './components/Dropdown';
import { ClassName } from 'classnames';

function App() {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    }

    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', vlaue: 'blue' },
    ];


  return (
    <div className='flex'>
        <a href="/dashboard">Dashboard</a>
        <Dropdown options={options} value={selection} onChange={handleSelect} />
        <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  )
}

export default App