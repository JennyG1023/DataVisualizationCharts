import React, { Component } from 'react';
import '../style.css';
import Options from './Options';
import Chart from './Chart';
import Grid from './Grid';
import VisualType from './VisualType';
import SelectionButtons from './SelectionButtons';

class SelectBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: this.props.items || [],
            showItems: false,
            selectedItem: '',
            visualizationType: 'chart',
            data: []
        }
        this.dropDown = this.dropDown.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    dropDown() {
        this.setState(prevState => ({
            showItems: !prevState.showItems
        }))
    }

    selectItem(item) {
        const formatedData = []
        for(let i = 0; i < 12; i++) {
            formatedData.push({
                'time': [item.times[i]],
                'value': [item.values[i]]
            })
        }
        
        this.setState({
             data: formatedData,
            selectedItem: item,
            showItems: false,
        })
    }

    handleClick(type) {
        this.setState({
            visualizationType: type,
        })
    }

    render() {
        const { items, showItems, selectedItem, visualizationType, data } = this.state;
        return(
            <div>
                <div className='select-box-main'>
                    <div className='select-box-box'>
                        <div className='select-box-container'>
                            <div className='select-box-selected-item'>
                                {selectedItem.name}
                            </div>

                            <div className='select-box--arrow' onClick={this.dropDown}>
                                <span className={
                                    `${showItems
                                    ? 'select-box--arrow-up'
                                    : 'select-box--arrow-down'
                                    }`
                                }/>
                            </div>

                            <div className='select-box-items' style={{display: showItems ? 'block' : 'none'}}>
                                {items.map(item => (
                                <div className={selectedItem === item ? 'selected' : ''} key={item.id} onClick={() => this.selectItem(item)} >
                                    {item.name} 
                                </div>))}
                            </div>
                        </div>
                    </div>
                </div>

                <Options />
                <VisualType selectedLine={selectedItem} data={data} visualizationType={visualizationType} />

                <div className='button-group'>
                    <SelectionButtons handleClick={this.handleClick} />
                </div>
            </div>
        )
    }
}

export default SelectBox;