import React, {useState} from 'react';
import useRequest from "../hooks/useRequest";
import axios from "axios";

const Todos = () => {
    const [todos, loading, error] = useRequest(fetchTodos)

    function fetchTodos() {
        return axios.get(`https://jsonplaceholder.typicode.com/todos`)
    }

    if (loading) {
        return <h1>Загрузка</h1>
    }
    if (error) {
        return <h2>Произошла ошибка при запросе: {error}</h2>
    }
    return (
        <div>
            {todos && todos.map(todo =>
                <div
                    key={todo.id}
                    style={{padding: 30, border: '2px solid teal'}}
                >
                    {todo.id}. {todo.title}
                </div>
            )}
        </div>
    );
};

export default Todos;
