import {
    ITEM_LIST_REQUEST,
    ITEM_LIST_SUCCESS,
    ITEM_LIST_FAIL,

    ITEM_SOLO_REQUEST,
    ITEM_SOLO_SUCCESS,
    ITEM_SOLO_FAIL,
} from '../constants/index.js'; 

export const itemSoloReducer = (state = { item: [] } , action) => {
    switch (action.type) {
        case ITEM_SOLO_REQUEST:
            return { loading: true, ...state}

        case ITEM_SOLO_SUCCESS:
            return { loading: false, item: action.payload }

        case ITEM_SOLO_FAIL:
            return { loading: false, error: action.payload }

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
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
