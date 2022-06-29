export const handleSetPopulation = (population = []) => dispatch => {
    dispatch({ type: 'SET_POPULATION', payload: population });
}

export const handleUpdatePosition = (id, position) => dispatch => {
    dispatch({ type: 'UPDATE_POSITION', payload: { id, position }});
}