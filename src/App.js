import React from 'react';
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";
import List from "./components/List";
import Debounce from "./components/Debounce";
import Todos from "./components/Todos";

const App = () => {

    const userName = useInput('')
    const userPassword = useInput('')
    return (
        <div>
            <h3>Hook useInput</h3>
            <input {...userName} type="text" plaсeholder='Имя пользователя'/>
            <input {...userPassword} type="password" plaсeholder='Пароль'/>
            <button onClick={() => {
                console.log(userName.value, userPassword.value)
            }}>Нажми
            </button>

            <hr/>
            <h3>Hook useHover</h3>
            <Hover/>

            <hr/>
            <h3>Hook useList with observer loading</h3>
            <List/>

            <hr/>
            <h3>Hook useDebounce</h3>
            <Debounce/>

            <hr/>
            <h3>Hook useRequest</h3>
            <Todos/>
        </div>
    );
};

export default App;
