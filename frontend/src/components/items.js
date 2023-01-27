import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { itemListAction } from '../actions/index.js';



export default function Items () {
    const dispatch = useDispatch();

    const itemList = useSelector((state) => state.itemList);
    const { error, loading, items } = itemList;

    useEffect(() => {
        dispatch(itemListAction());
    }, [dispatch])

    return (
        <div>
            {items && items.map( item=> {
                return (
            <div key={item.name} >

                    {item.name}
                <a href={`/solo_item/${item.id}`}>Solo Item</a>
            </div>
            )
            })}
        </div>
    )
}

