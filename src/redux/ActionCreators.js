import { actionTypes } from "react-redux-form";
import *  as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import { connectAdvanced } from "react-redux";

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
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
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {
            console.log('Post comments', error.message);
            alert('Your comment could not be posted \n Error' + error.message)
        })
}

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

//Leaders

export const fetchLeaders = () => (dispatch) => {
    //actually communicate with fetch
    dispatch(leadersLoading(true));

    return fetch(baseUrl + 'leaders')
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
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)));;
};

//Returning
export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING,

});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

//postfeedback

export const postFeedback = (
    firstname,
    lastname,
    telnum,
    email,
    agree,
    contactType,
    message) => (dispatch) => {
        const newFeedback = {
            firstname: firstname,
            lastname: lastname,
            telnum: telnum,
            email: email,
            agree: agree,
            contactType: contactType,
            message: message
        }       

        return fetch(baseUrl + 'feedback', {
            method: "POST",
            body: JSON.stringify(newFeedback),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
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
            .then(response => response.json())
            .then(response => alert( "Thank you for your Feedback!" +JSON.stringify(response)))
            .catch(error => {
                console.log("post feedbacks", error.message);
      alert("Your feedback could not be posted\nError: " + error.message);
    })
    }