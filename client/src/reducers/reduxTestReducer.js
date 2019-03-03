const initialState = []

const reduxTestReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TEST':
            return [
                ...state,
                action.payload
            ]
        case 'ADD_DB_TEST':
            return [
                ...state,
                action.payload
            ]
        case 'GET_TESTS':
            return [
                ...state,
                ...action.payload
            ]
        default:
            return state
    }
}

export default reduxTestReducer