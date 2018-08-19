import React from 'react';
import PropTypes from 'prop-types';

export default class SelectBox extends React.Component {

    constructor(){
        super();
    }

    render(){
        let {options = [], onChange} = this.props;

        return (
            <select className="btn" onChange={(v) => {onChange(v)}}>
                <option value="isShowAll">Все авиакомании</option>
                {options.map(option => {
                    return <option value={option} key={option}>{option}</option>;
                })}
            </select>
        )
    }
}

SelectBox.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};
