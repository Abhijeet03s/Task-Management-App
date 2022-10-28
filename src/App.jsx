import { useState, useRef } from "react"
import { Form } from "./components/Form"

export default function App() {

  const [userInput, setUserInput] = useState("")
  const [tasks, setTasks] = useState([])
  const [editTask, setEditTask] = useState(null)
  const inputFocus = useRef(null)
  return (
    <>
      <div className="max-w-full min-h-screen text-white text-center py-5 space-y-20 font-Poppins">
        <h1 className="text-4xl font-extrabold">Task Management App</h1>
        <div className="grid grid-cols-2 place-items-center gap-4 px-20 ">
          <div>
            <h1 className="text-3xl font-bold">To-do</h1>
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
          {/* <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-center">Done</h1>
            <div className="w-[450px] flex flex-col items-start bg-[#2e2e2e] p-5 mt-5 rounded-lg">
            </div>
          </div> */}
          
        </div>
      </div>
    </>
  )
}



