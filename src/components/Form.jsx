import { useEffect } from "react"
import { List } from "./List"
import { v4 as uuidv4 } from 'uuid';


export const Form = ({ userInput, setUserInput, tasks, setTasks, edit, setEdit }) => {

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const updateTask = (id, title, completed) => {
        const newTask = tasks.map((todo) => todo.id === id ? { title, id, completed } : todo)
        setTasks(newTask)
        setEdit("")
    }

    useEffect(() => {
        if (edit) {
            setUserInput(edit.title)
        } else {
            setUserInput("")
        }
    }, [setUserInput, edit])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!edit) {
            setTasks([...tasks,
            {
                id: uuidv4(),
                title: userInput,
                completed: false
            }])
            setUserInput("")
        } else {
            updateTask(userInput, edit.id, edit.completed)
        }

        setTasks([...tasks,
        {
            id: uuidv4(),
            title: userInput,
            completed: false
        }])
        setUserInput("")
    }


    return (
        <>
            <div className="w-[450px] min-h-[500px] flex flex-col bg-[#2e2e2e] p-5 mt-5 rounded-lg">
                <form className="flex gap-4 w-full px-5" onSubmit={handleSubmit}
                >
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Your Task"
                        onChange={handleChange}
                        value={userInput}
                    />
                    <button className="bg-transparent hover:bg-blue-500 text-white hover:text-white py-1 px-3 border border-blue-500 hover:border-transparent rounded"
                    >{edit ? "OK" : "ADD"}</button>
                </form>
                <div className="m-4">
                    <List
                        tasks={tasks}
                        setTasks={setTasks}
                        setEdit={setEdit}
                    />
                </div>
            </div>
        </>
    )
}
