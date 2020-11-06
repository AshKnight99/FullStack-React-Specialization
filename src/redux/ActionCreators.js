import { actionTypes } from "react-redux-form";
import *  as ActionTypes from './ActionTypes';
import { DISHES } from "../shared/dishes";

import { baseUrl } from '../shared/baseUrl';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }

});

//Thunk
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    /* setTimeout(() => {
         dispatch(addDishes(DISHES));
     },2000);
     */
    //actually communicate with fetch

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok) {
                return response // sends promises to next then
            }
            else {
                //error handler with status of 404
                var error = new Error('Error' + response.status + ":" + response.statusText);
                error.response = response;
                throw error; // implement catch to handle error
            }
        }, error => {
            //error handler when you get no response
            var errMess = new Error(error.message);
            throw errMess;
        })// handle error
        .then(response => response.json())  //callback funstion
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
};

//Returning
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING,

});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => (dispatch) => {
    //actually communicate with fetch

    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
                return response // sends promises to next then
            }
            else {
                //error handler with status of 404
                var error = new Error('Error' + response.status + ":" + response.statusText);
                error.response = response;
                throw error; // implement catch to handle error
            }
        }, error => {
            //error handler when you get no response
            var errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())  //callback funstion
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));;
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok) {
                return response // sends promises to next then
            }
            else {
                //error handler with status of 404
                var error = new Error('Error' + response.status + ":" + response.statusText);
                error.response = response;
                throw error; // implement catch to handle error
            }
        }, error => {
            //error handler when you get no response
            var errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())  //callback funstion
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));;
};

//Returning
export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING,

});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});