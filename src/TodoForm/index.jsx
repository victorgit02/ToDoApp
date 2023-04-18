import React from 'react'
import { TodoContext } from '../TodoContext';
import "../TodoForm/TodoForm.css"


function TodoForm ()  {
const [newTodoValue, setNewTodoValue] = React.useState("");

    const {
    addTodo,
    setOpenModal

} = React.useContext(TodoContext);

const onChange= (event) => {
    setNewTodoValue (event.target.value);
};

const onCancel = () => {
    setOpenModal(false)
    
};

const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
};



    return (
        <form className='form'
        onSubmit={onSubmit}>
            
            <label
            className='title'>CREA UN TODO</label>
            <textarea
            className='textarea'
            value={newTodoValue}
            onChange={onChange}
            placeholder='Añade un ToDo'
            />
            <div>
                <button 
                className='cancelar'
                type='button'
                onClick={onCancel}>
                    Cancelar
                </button>
                <button
                className='añadir'
                type='submit'>
                    Añadir
                </button>
            </div>
        </form>
    );
}


export {TodoForm};