import Types from './actionTypes'

let initialState = {
    records:[],
    filtered: [],
    loading:false
};

export function reducer(state = initialState, action){

    switch (action.type) {

        case Types.FILTER: {
            let filteredOutIds = (action.value == "isShowAll" ?
                [] :
                state.records.filter(
                (record) =>
                    record.carrier.toUpperCase() != action.value.toUpperCase()))
                .map(record => record.id);
            return Object.assign({}, state,
                {filtered: filteredOutIds});
        }

        case Types.START_LOADING:
            return Object.assign({}, state, {loading: true});
        case Types.STOP_LOADING:
            return Object.assign({}, state, {loading: false});
        case Types.ADD_DATA: {
            return Object.assign({}, state, {
                records: [...action.value]
            });
        }
    }

    return state
}

export default reducer
