import * as ActionTypes from './ActionType'
import { baseUrl } from '../shared/baseUrl';

export const addComment = (dishId, rating, author, comment) => {
    return ({
        type: ActionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
        }
    })
}

// export const fetchDishes = () => (dispatch) => {

//     dispatch(dishesLoading(true));

//     setTimeout(() => {
//         dispatch(addDishes(DISHES));
//     }, 2000);
// }

export const fetchDishes = () => {
    return ((dispatch) => {
        dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)));

    })
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});


//fetch comments
export const fetchComments = () => {
    return ((dispatch) => {
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
    })
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})


//fetct promos
export const fetchPromos = () => {
    return ((dispatch) => {
        dispatch(dishesLoading(true));

    return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));

    })
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING 
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addPromos = (comments) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: comments
})
