import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { itemSoloAction } from '../actions/index.js';

export default function SoloItem () {

    const { id } = useParams();

    const dispatch = useDispatch();

    const itemSolo = useSelector(state => state.itemSolo);
    const {loading, error, item } = itemSolo;

    useEffect(() => {
        dispatch(itemSoloAction(id));
    }, [dispatch])

    return (
        <div>
            {item.name}
        </div>
    )
}
