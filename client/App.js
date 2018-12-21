import React, { Component } from 'react';
import SelectBox from './SelectBox';
import testData from '../testData';

class App extends Component {
    constructor(){
        super()
        this.state = {
            lines: testData.lines
        }
    }

    render() {
        return (
            <div id='select-box'>
                <div>Select line to Search: </div>
                <SelectBox items={this.state.lines} />
            </div>
        )
    }
}

export default App;