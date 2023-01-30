import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { itemListAction, itemDeleteAction } from '../actions/index.js';



export default function Items () {
    const dispatch = useDispatch();

    const itemList = useSelector((state) => state.itemList);
    const { error, loading, items } = itemList;

    const itemDelete = useSelector((state) => state.itemDelete);
    const { error: errorDelete, loading: loadingDelete, success} = itemDelete;


    useEffect(() => {
        dispatch(itemListAction());
    }, [dispatch, success])

    const deleteHandler = (id) => {
        if (window.confirm('Quieres eliminar este blog')) {

        dispatch(itemDeleteAction(id))
        }
    }

    return (
        <div>
            {items && items.map( item=> {
                return (
            <div key={item.name} >

                    {item.name}
                <a href={`/solo_item/${item.id}`}>Solo Item</a>
                <button
                    onClick={() => deleteHandler(item.id)}
                    > Delete Blog </button>
            </div>
            )
            })}
        </div>
    )
}

