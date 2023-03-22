import { useState } from "react";
export const TodoList = () => {
    const [addValue, setValue] = useState("");
    const [nameList, setList] = useState([]);
    const [update, setUpdate] = useState(false);

    const chageHandler = (e) => {
        setValue(e.target.value);
    };

    const clickHandler = () => {
        setList((prev) => [...prev, addValue]);
        setValue("");
    };

    var updateIndex = '';
    const editHandler = (index) => {
        const updateValue = nameList[index];
        updateIndex = index;
        setValue(updateValue);
        setUpdate(true);
    };

    const remooveHandler = (index) => {
        const removeItem = [...nameList];
        removeItem.splice(index, 1);
        setList(removeItem);
    };


    const updateHandler = () => {
        const updateList = [...nameList];
        updateList.splice(updateIndex,1, addValue);
        setList(updateList)
        setUpdate(false)
        setValue('')
        console.log("updateindex",updateIndex)
    };

    return (
        <div>
            <h1>ToDo List</h1>
            <div>
                <input onChange={chageHandler} type='Text' value={addValue}></input>
                {update ? (<button onClick={updateHandler}>Update</button>) : (<button onClick={(e) => clickHandler(e.target.value)}>Add</button>)}
            </div>
            <div className="list">
                {nameList.map((obj, index) => {
                    return (
                        <div key={index}>
                            <hr/>
                            <span>{obj}</span>
                            <button onClick={() => remooveHandler(index)}>delete</button>
                            <button onClick={() => editHandler(index)}>edit</button>
                            <hr/>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}