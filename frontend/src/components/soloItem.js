import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Error from './Error'
import Loader from './Loader'
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
        <>
        { error && <Error> { error } </Error> }
        { loading ? ( 
            <Loader/>
        ) : ( 
            <>
        <div className="p-4 justify-center items-center flex">
        <div className="bg-gray-300 rounded-xl w-[300px]">
        <p className="text-grey-900 font-bold text-center font-mono m-5">
            {item && item.name}
        </p>
        </div>
        </div>
        </>
        )}
</>
    )
}
