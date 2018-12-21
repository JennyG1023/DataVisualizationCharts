import React, { Component } from 'react';

const SelectionButtons = (props) => {
    return (
        <div className='button-group'>
            <button className='button' onClick={() => props.handleClick('chart')}>Chart</button>
            <button className='button' onClick={() => props.handleClick('grid')} >Grid</button>
        </div>
    )
}

export default SelectionButtons;