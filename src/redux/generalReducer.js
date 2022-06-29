const initialState = {
    generation: 0,
    generationTimespan: 10,
    population: {}
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case "SET_POPULATION":
            return { ...state, population: payload };
        case 'UPDATE_POSITION':
            return { ...state, population: { ...state.population, [payload.id]: { ...state.population[payload.id], position: payload.position }} };
        default:
            return state;
    }
}