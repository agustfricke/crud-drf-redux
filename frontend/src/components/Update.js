import React, { useEffect, useState }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { ITEM_UPDATE_RESET } from '../constants';
import { itemUpdateAction, itemSoloAction , itemListAction } from '../actions';
import { useNavigate } from 'react-router-dom';

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
        dispatch(itemUpdateAction({id:id, name}))
        dispatch(itemListAction())
        navigate(path)
        
    }

    return (
        <form onSubmit={submitHandler}>
        <input type='text' value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Type Here'/>
        <button type='submit'>Save Changes</button>
        </form>
    )
}
