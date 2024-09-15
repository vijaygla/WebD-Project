import { useState, useEffect } from "react";
import "./ToDo.css";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

const toDoKey = "ToDoApp";

export const ToDo = () => {
    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState(() => {
        const rawToDo = localStorage.getItem(toDoKey);

        if (!rawToDo) return [];
        return JSON.parse(rawToDo);
    });

    const [dateTime, setDateTime] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!inputValue.trim()) return; // prevents empty or all spaces task

        if (task.includes(inputValue)) {
            setInputValue("");
            return;
        }

        setTask((prevTask) => [...prevTask, inputValue]);
        setInputValue("");
    };

    // todo date and time
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formatedDate = now.toLocaleDateString();
            const formatedTime = now.toLocaleTimeString();
            setDateTime(`${formatedDate} - ${formatedTime}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Very important to Host your ToDoApp on Local Storage to save data
    // toDo add data to local storage
    localStorage.setItem("toDoKey", JSON.stringify(task));


    // handle toDo delete 
    const handleDeleteTodo = (value) => {
        const updatedTask = task.filter((currTask) => currTask !== value);
        setTask(updatedTask);
    };

    const handleClearButton = () => {
        setTask([]);
    };

    return (
        <>
            <section className="todo-container">
                <header>
                    <h2><strong>TODO LIST</strong></h2>
                    <h2 className="data-time">{dateTime}</h2>
                </header>
                <section className="form">
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <input
                                type="text"
                                className="todo-input"
                                autoComplete="off"
                                value={inputValue}
                                onChange={(event) => handleInputChange(event.target.value)}
                            />
                        </div>
                        <div>
                            <button type="submit" className="todo-btn">
                                Add Task
                            </button>
                        </div>
                    </form>
                </section>
                <section className="myUnOrList">
                    <ul>
                        {task.map((currTask, index) => (
                            <li key={index} className="todo-item">
                                <span>{currTask}</span>
                                <button className="check-btn">
                                    <IoMdCheckmarkCircle />
                                </button>
                                <button className="delete-btn" onClick={() => handleDeleteTodo(currTask)}>
                                    <MdDeleteForever />
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>
                <section>
                    <button className="clear-btn" onClick={handleClearButton}>
                        Clear All
                    </button>
                </section>
            </section>
        </>
    );
};
