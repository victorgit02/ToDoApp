import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: "Cortar Cebolla", completed: false },
//   { text: "Tomar Curso de intro a React", completed: false },
//   { text: "Terminar curso React Intro", completed: false },
// ];


function App() {
 


  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
   
  
  );
}

export default App;
