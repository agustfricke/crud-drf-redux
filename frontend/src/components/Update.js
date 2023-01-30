import React, { useEffect, useState }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { ITEM_UPDATE_RESET } from '../constants';
import { itemUpdateAction, itemSoloAction } from '../actions';
import { useNavigate } from 'react-router-dom';

export default function Update () {
    const { id } = useParams();

    const navigate = useNavigate();
    const path = ('/');

    const dispatch = useDispatch();

    const [ name, setName ] = useState();

    const updateItem = useSelector (state => state.updateItem);
    const { error, loading, success } = updateItem;

    const soloItem = useSelector (state => state.soloItem);
    const { error, loading, item } = soloItem;

    useEffect(() => {
        if (success) {
            dispatch({type: ITEM_UPDATE_RESET })
        } else {
            if { item.name !== Number(id) {

            } else {
                setName(item.name)
            }
        }
    } [dispatch, id, item, succes ])
    return (
        <form>
        </form>
    )
}
