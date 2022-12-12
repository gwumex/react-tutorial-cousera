import * as ActionTypes from './ActionType'


export const Form = (state = form, action) => {
    switch(action.type) {
        case ActionTypes.ADD_LEADERS:
                return {...state, isLoading: false, errMess: null, leaders: action.payload}
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