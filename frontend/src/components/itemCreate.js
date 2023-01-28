import React , { useState }from "react";
import { itemCreateAction, itemListAction} from "../actions";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";


export default function CreateItem () {

    const dispatch = useDispatch();

    const navigate = useNavigate()
    const path = ('/')

    const itemCreate = useSelector( state => state.itemCreate);
    const { loading, error, success } = itemCreate;

    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(itemCreateAction(name));
        dispatch(itemListAction())
        navigate(path);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} 
                        onChange={(e) => setName(e.target.value)}
                        placeholder='input'
                        type='text'/>
                <button type="submit">POST</button>
            </form>
        </div>
    )
}
