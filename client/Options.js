import React from 'react';

const Options = () => {
    return (
        <div>
            <ul>
                <div className="option-menu-parent">
                    <button>Options</button>
                    <ul className="option-menu">
                        <li><a href="#">Simple Returns</a></li>
                        <li><a href="#">Log Returns</a></li>
                        <li><a href="#">Z-Norm</a></li>
                    </ul>
                </div>
            </ul>
        </div>
    )
}

export default Options;