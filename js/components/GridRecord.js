import React from 'react';
import PropTypes from 'prop-types';

export default class GridRecord extends React.Component {

    render(){
        let {record} = this.props;

        return (
            <div className="card" style = {{marginTop: 20}}>
                <h5 className="card-header">{record.carrier}</h5>
                <div className="card-body">
                    <h5 className="card-title">{record.direction && (record.direction.from + " - " + record.direction.to)}</h5>
                    <p className="card-text">{(record.arrival && new Date(record.arrival).toLocaleString("ru")) + " - " + (record.departure && new Date(record.departure).toLocaleString("ru")) }</p>
                </div>
            </div>
        );
    }
}

GridRecord.defaultProps = {
    record: {
        carrier: "N/A",
        direction: {
            from: "N/A",
            to: "N/A"
        },
        direction2: {
            from: "N/A",
            to: "N/A"
        },
        arrival: "N/A",
        departure: "N/A"
    }
};

GridRecord.propTypes = {
    record: PropTypes.shape({
        carrier: PropTypes.string.isRequired,
        direction: PropTypes.shape({
            from: PropTypes.string.isRequired,
            to: PropTypes.string.isRequired
        }),
        arrival: PropTypes.string.isRequired,
        departure: PropTypes.string.isRequired
    })
};
