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
    ITEM_UPDATE_REQUEST,
    ITEM_UPDATE_SUCCESS,
    ITEM_UPDATE_FAIL,
    ITEM_UPDATE_RESET,
    ITEM_DELETE_REQUEST,
    ITEM_DELTE_SUCCESS,
    ITEM_DELETE_FAIL, 
} from '../constants/index.js'; 

export const itemDeleteReducer = (state = {} , action ) => {
    switch (action.type) {
        case ITEM_DELETE_REQUEST: 
            return { loading: true }

        case ITEM_DELTE_SUCCESS:
            return { loading: false, success: true }
        

        case ITEM_DELETE_FAIL:
            return { loading: false, error: true}

        default:
            return state
    }
}

export const itemUpdateReducer = (state = { item : {} } , action) => {
    switch (action.type) {
        case ITEM_UPDATE_REQUEST:
            return { loading: true, ...state }

        case ITEM_UPDATE_SUCCESS:
            return { loading: false, items: action.payload }

        case ITEM_UPDATE_FAIL:
            return { loading: false, error: true}

        case ITEM_UPDATE_RESET:
            return { item: {} }

        default:
            return state
    }
}

export const itemCreateReducer = (state = {}, action ) => {
    switch (action.type) {
        case ITEM_CREATE_REQUEST:
            return { loading: true, ...state }

        case ITEM_CREATE_SUCCESS:
            return { loading: false, success:true, item: action.payload }

        case ITEM_CREATE_FAIL:
            return { loading: false, error: true}
        
        default:
            return state
    }
}

export const itemSoloReducer = (state = { item: [] } , action) => {
    switch (action.type) {
        case ITEM_SOLO_REQUEST:
            return { loading: true, ...state}

        case ITEM_SOLO_SUCCESS:
            return { loading: false, item: action.payload }

        case ITEM_SOLO_FAIL:
            return { loading: false, error: true}

        default:
            return state
    }
}

export const itemListReducer = (state = { items: [] }, action) => {
    switch (action.type) {
        case ITEM_LIST_REQUEST:
            return { loading: true, items: [] }

        case ITEM_LIST_SUCCESS:
            return { loading: false, items: action.payload }

        case ITEM_LIST_FAIL:
            return { loading: false, error: true}

        default:
            return state
    }
}

