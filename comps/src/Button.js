import React from 'react';
import ReactPropTypes  from 'prop-types';


function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
}) {
    let baseClassName =  'px-3 py-1.5 border'
    if (primary) {
        baseClassName += 'bg-blue-500 border-blue-600 text-white';
    } else if (secondary) {
        baseClassName += 'bg-blue-500 border-blue-600 text-white';
    }

  return (
    <button className='px-3 py-1.5 border border-green-500 backdrop-blur-0 bg-blue-500 text-white'>{children}</button>
  )
} 

Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary) +
            Number(!!secondary) +
            Number(!!warning) +
            Number(!!success) +
            Number(!!danger);

        if (count > 1){
            return new Error('Only one of primary, secondary, success, warning, danger can be true')
        }
    },
};



export default Button