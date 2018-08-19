import React from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from "redux"
import Actions from './actions'

import GridComponent from '../../components/GridComponent'


class GridContainer extends React.Component {
    render(){
        return <GridComponent {...this.props}/>
    }
}

function mapStateToProps(state) {
    return {
        records: state.grid.records,
        filtered: state.grid.filtered,
        loading: state.grid.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GridContainer)
