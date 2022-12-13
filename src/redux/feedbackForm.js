import * as ActionTypes from './ActionType'

export const FeedbackForm = (state = {firstname: 'abiola'}
    , action) => {
    switch(action.type) {
        case ActionTypes.ADD_FEEDBACK:
                return {...state, ...action.payload}
        default:
            return state;
    }
}

export const InitialFeedback = {
    firstname: '',
    lastname: '',
    telnum: '',
    email: '',
    agree: false,
    constactType: 'Tel.',
    message: ''
}