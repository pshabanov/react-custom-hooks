import React, {useState} from 'react';
import useDebounce from "../hooks/useDebounse";

const Debounce = () => {

    const [value, setValue] = useState('')
    const debouncedSearch = useDebounce(search, 500)

    function search(query) {
        fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
            })
    }

    const onChange = (e) => {
        setValue(e.target.value)
        debouncedSearch(e.target.value)
    }

    return (
        <div>
            <input type="text" value={value} onChange={onChange}/>
        </div>
    );
};

export default Debounce;
