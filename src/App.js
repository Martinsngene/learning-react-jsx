import React from "react";
import "./App.css";
import Accessories from "./components/Accessories";
import ProductCard from "./components/ProductCard";

// const Todo = ({ todo, index, completeTodo, removeTodo }) => {
//   return (
//     <div
//       style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
//       className="todo"
//     >
//       {todo.text}
//       {/* <div>
//         <button onClick={completeTodo(index)}>Complete</button>
//         <button onClick={removeTodo(index)}>X</button>
//       </div> */}
//     </div>
//   );
// };

// const TodoForm = ({ addTodo }) => {
//   const [value, setValue] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!value) return;
//     addTodo(value);
//     setValue("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         placeholder="Add Todo"
//         className="input"
//         type="text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//     </form>
//   );
// };

// function App() {
//   const [todos, setTodos] = useState([
//     {
//       text: "Learn about React",
//       isCompleted: false,
//     },
//     {
//       text: "Meet friend for lunch",
//       isCompleted: false,
//     },
//     {
//       text: "Build really cool todo app",
//       isCompleted: false,
//     },
//   ]);

//   const addTodo = (text) => {
//     const newTodo = [...todos, { text }];
//     setTodos(newTodo);
//   };

//   const completeTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos[index].isCompleted = true;
//     setTodos(newTodos);
//   };

//   const removeTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   return (
//     <div className="app">
//       <div className="todoList">
//         {todos.map((todo, index) => (
//           <Todo
//             key={index}
//             index={index}
//             todo={todo}
//             completeTodo={completeTodo}
//             removeTodo={removeTodo}
//           />
//         ))}
//         <TodoForm addTodo={addTodo} />
//       </div>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ProductCard
            productName={"Motion Seamless Crop - Musk Pink"}
            price={"30,000"}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Accessories />
        </div>
      </div>
    </div>
  );
}

export default App;
