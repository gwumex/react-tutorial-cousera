import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import {Dishes} from './dishes';
import {Comments} from './comments';
import {Leaders} from './leaders';
import {Promotions} from './promotions';
import {createForms} from 'react-redux-form'
import thunk from 'redux-logger';
import logger from 'redux-thunk';
import { InitialFeedback } from "./forms";

export const ConfigureStore = () => {
    const store = createStore(
       combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
       }),
       applyMiddleware(thunk, logger)
    );
    return store;
}

