import {
    ITEM_LIST_REQUEST,
    ITEM_LIST_SUCCESS,
    ITEM_LIST_FAIL,
    ITEM_SOLO_REQUEST,
    ITEM_SOLO_SUCCESS,
    ITEM_SOLO_FAIL,
    ITEM_CREATE_REQUEST,
    ITEM_CREATE_SUCCESS,
    ITEM_CREATE_FAIL,

} from '../constants/index.js';
import axios from 'axios';

export const itemCreateAction = (name) => async (dispatch) => {
    try {
        dispatch ({ type: ITEM_CREATE_REQUEST })
        
        const consif = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('http"//127.0.0.1:8000/api/create/', config)
        
        dispatch({
            type: ITEM_CREATE_SUCCESS,
            payload: data,
            })
    } catch ( error ) {
        dispatch ({ 
            type: ITEM_CREATE_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message
        })
    }
}


export const itemSoloAction = (id) => async (dispatch) => {
    try {
        dispatch ({ type: ITEM_SOLO_REQUEST })

        const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}/`)
        
        dispatch({
            type: ITEM_SOLO_SUCCESS,
            payload: data 
        }) 
    } catch (error) {
        dispatch({
            type: ITEM_SOLO_FAIL,
            payload: error.repsonse && error.response.data.detail
            ? error.response.data.detail
            : error.message
        })
    }
}



export const itemListAction = () => async (dispatch) => {
    try {
        dispatch({ type: ITEM_LIST_REQUEST })

        const { data } = await axios.get(`http://127.0.0.1:8000/api/`)

        dispatch({ 
            type: ITEM_LIST_SUCCESS, 
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ITEM_LIST_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })}

}
