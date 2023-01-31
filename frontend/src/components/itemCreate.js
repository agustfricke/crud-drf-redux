import React , { useState }from "react";
import { itemCreateAction, itemListAction} from "../actions";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Loader from './Loader';
import Error from './Error';

export default function CreateItem () {

    const dispatch = useDispatch();

    const navigate = useNavigate()
    const path = ('/')

    const itemCreate = useSelector( state => state.itemCreate);
    const { loading, error } = itemCreate;

    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '') {
            return alert('Cant send empty data!')
        } else {
        dispatch(itemCreateAction(name));
        dispatch(itemListAction())
        navigate(path);
        }
    }

    return (
        <>
        { loading ? 
            <Loader/>
            : error ? <Error> { error } </Error>
            :  (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex min-h-min items-center justify-center">
                <div className="bg-gray-600 p-10 m-4 mt-[300px] rounded-lg">
                <div className="w-[300px] ">
                <input value={name} 
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Type here ...'
                        className="rounded-lg placeholder:text-gray-400 p-2"
                        type='text'/>
                <button className="rounded-lg ml-3 bg-gray-800 text-white p-2" type="submit">POST</button>
                </div>
                </div>
                </div>
            </form>
        </div>
            )}
        </>
    )
}
