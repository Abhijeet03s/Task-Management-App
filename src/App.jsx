import { useState, useEffect, useRef } from "react"
import Form from "./components/Form"
import List from "./components/List"

export default function App() {

  const localStr = JSON.parse(localStorage.getItem("tasks")) || []
  const [userInput, setUserInput] = useState("")
  const [tasks, setTasks] = useState(localStr)
  const [editTask, setEditTask] = useState("")
  const inputFocus = useRef(null)


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

  function SwapAllTasks() {
    setTasks((tasks) => tasks.map((todo) => ({
      ...todo,
      completed: !todo.completed
    }
    )))
  }

  return (
    <>
      <div className="container max-w-full min-h-screen font-Poppins text-white text-center py-5 space-y-10">
        <h1 className="text-4xl font-extrabold">Task Mangement App</h1>
        <button className="bg-transparent hover:bg-blue-600 text-white hover:text-white py-1 px-3 border border-blue-500 hover:border-transparent rounded" onClick={() => { SwapAllTasks()}}>Swap All</button>
        <div className="container grid grid-rows-2 gap-y-20 lg:grid-cols-2 place-items-center lg:px-64 lg:gap-x-20">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">To-do</h1>
            <div className="w-[380px] lg:w-[450px] min-h-[100px] flex flex-col bg-[#2e2e2e] p-5 mt-5 rounded-lg">
              <Form
                userInput={userInput}
                setUserInput={setUserInput}
                tasks={tasks}
                setTasks={setTasks}
                editTask={editTask}
                setEditTask={setEditTask}
                inputFocus={inputFocus}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-center">Completed</h1>
            <div className="w-[380px] lg:w-[450px] min-h-[100px] flex flex-col items-center bg-[#2e2e2e] p-5 mt-5 rounded-lg">
              <List
                tasks={tasks}
                setTasks={setTasks}
                setEditTask={setEditTask}
                inputFocus={inputFocus}
                isInCompletedSection={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



