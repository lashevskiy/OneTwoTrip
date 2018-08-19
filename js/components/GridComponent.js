import React from 'react';
import PropTypes from 'prop-types';

import GridRecord from './GridRecord'
import SelectBox from './SelectBox'


export default class GridComponent extends React.Component {

    constructor(){
        super();
        this.handleChange = this.handleFilterChange.bind(this);
    }

    componentDidMount(){
        this.loadData();
    }

    loadData(){
        let {actions} = this.props;
        actions.loadDataInGrid();
    }

    handleFilterChange(e){
        let {actions} = this.props;
        actions.filterGrid(e.target.value);
    }

    getOptions() {
        let allOptions = [];
        allOptions = this.props.records.map(record => record.carrier);
        let options = Array.from(new Set(allOptions));
        return options;
    }

    renderRecordsCard() {
        let recordsToShow = this.props.records.filter((record)=>{
            return this.props.filtered.indexOf(record.id)==-1;
        });

        let records = recordsToShow.map((record,index)=>
            <GridRecord record={record} key={record.id}/>
        );

        return records;
    }

    render(){
        return (
            <div style={{width:450, padding: 20}}>
                <h1>OneTwoTrip Test</h1>
                <SelectBox options={this.getOptions()} onChange={this.handleChange}/>
                {this.renderRecordsCard()}
            </div>
        )
    }
}

GridComponent.propTypes = {
    records: PropTypes.array.isRequired,
    filtered: PropTypes.array.isRequired
};