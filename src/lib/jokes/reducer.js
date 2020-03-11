import { JokesActionType } from './action'

const initialState = {
    data: [],
    loading: false,
}

export const jokesReducer = (state = initialState, action) => {
    switch (action.type) {
        case JokesActionType.FETCH_JOKES_SUCCESS:
            return { ...state, data: [...state.data, ...action.payload] }

        default:
            return state
    }
}
