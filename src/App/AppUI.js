import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import {TodoForm} from "../TodoForm/index.jsx";
import {TodoError} from "../TodoError/index.jsx";
import { TodoLoading } from "../TodoLoading";
import { EmptyTodos } from "../EmptyTodos";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    
    
    <React.Fragment>
      
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodoError error={error}/>}
        {loading && <TodoLoading/>}
        {!loading && !searchedTodos.lenght && <EmptyTodos/>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
   
  );
}

export { AppUI };
