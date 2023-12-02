import React, { useState } from 'react'
import Dropdown from '../components/Dropdown';
import { ClassName } from 'classnames';

function Dropdown() {
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
        <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  )
}

export default Dropdown;