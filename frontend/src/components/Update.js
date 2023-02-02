import React, { useEffect, useState }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { ITEM_UPDATE_RESET } from '../constants';
import { itemUpdateAction, itemSoloAction , itemListAction } from '../actions';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import { toast } from 'react-toastify';


export default function Update () {
    const { id } = useParams();

    const navigate = useNavigate();
    const path = ('/');

    const dispatch = useDispatch();

    const [ name, setName ] = useState();

    const itemUpdate = useSelector (state => state.itemUpdate);
    const { error: errorUpdate, loading: loadingUpdate, success } = itemUpdate;

    const itemSolo = useSelector (state => state.itemSolo);
    const { error, loading, item } = itemSolo;

    useEffect(() => {
        if (success) {
            dispatch({type: ITEM_UPDATE_RESET })
        } else {
            if ( item.id !== Number(id)) {
            dispatch(itemSoloAction(id));
            } else {
                setName(item.name)
            }
        }
    }, [ dispatch, id, item, success])

    const submitHandler = (e) => {
        e.preventDefault()
        if (name === '') {
            return toast('Cant update empty data')
        } else {
        dispatch(itemUpdateAction({id:id, name}))
        dispatch(itemListAction())
            if (success) {
        toast('Item updated!');
        navigate(path)
            } else {
                toast('error updating')
            }
        } 
    }

    return (

        <>
        { loading ? 
            <Loader/>
            :  (
        <form onSubmit={submitHandler}>
        
                <div className="flex min-h-min items-center justify-center">
                <div className="bg-gray-600 p-10 m-4 mt-[300px] rounded-lg">
                <div className="w-[300px] ">
                <input value={name} 
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Type here ...'
                        className="rounded-lg placeholder:text-gray-400 p-2"
                        type='text'/>
                <button className="rounded-lg ml-3 bg-gray-800 text-white p-2" type="submit">EDIT</button>
                </div>
                </div>
                </div>
        </form>
            )}
        </>
    )
}
