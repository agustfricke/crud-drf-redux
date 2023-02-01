import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { itemListAction, itemDeleteAction } from '../actions/index.js';
import { HiEye, HiTrash } from "react-icons/hi";
import Loader from './Loader'
import Error from "./Error.jsx";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";


export default function Items () {
    const dispatch = useDispatch();

    const itemList = useSelector((state) => state.itemList);
    const { error, loading, items } = itemList;

    const itemDelete = useSelector((state) => state.itemDelete);
    const { error: errorDelete, loading: loadingDelete, success} = itemDelete;


    useEffect(() => {
        if (items) {
dispatch(itemListAction());
        } else {
            toast('Error!')
        }
    }, [dispatch, success])

    const deleteHandler = (id) => {
        if (errorDelete) {
            toast('Error deleting item')
        } else {
        dispatch(itemDeleteAction(id))
        }
        }

    return (
        <>
        { loading && loadingDelete ? (
            <Loader/>
    ) : ( 
        <>
        <div className="flex items-center justify-center p-7">
        <div className=" grid grid-cols-4">
            {items && items.map( item=> {
                return (

        <div className="bg-gray-300 rounded-xl flex-col item-center gap-2 text-center m-5 p-5">
            <div key={item.name} >
<p className="text-grey-900 font-bold text-center font-mono m-5">
                    {item.name}
                    </p>
                <div className="flex items-center justify-center mx-10">
                <a className="text-gray-700" href={`/solo_item/${item.id}`}><HiEye size={30}/></a>
                <a className="text-gray-700" href={`/update/${item.id}`}><AiFillEdit size={30}/></a>
                <button
                    className="text-red-600 "
                    onClick={() => deleteHandler(item.id)}
                    > <HiTrash size={30}/> </button>
                    </div>
            </div>

</div>
            )
            })}
        </div>
        </div>
        </>
    )}
        </>
    )
}

