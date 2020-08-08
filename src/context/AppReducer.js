export default (state, action) => {
    switch(action.type) {
        case 'ADD_TIME':
            return {
                ...state,
                time: state.time += 1
            }

        case 'MINUS_TIME':
            return {
                ...state,
                time: state.time -= 1
            }

        default:
        return state;
    }
}