import React, { useRef } from 'react'
import { FaEdit } from "react-icons/fa"
import { MdTaskAlt } from "react-icons/md"
import { MdDelete } from "react-icons/md"


export const List = ({ tasks, setTasks, setEditTask, inputFocus }) => {

  const handleDelete = ({ id }) => {
    setTasks(tasks.filter((todo) => todo.id !== id))
  }

  const handleCompleted = (todo) => {
    setTasks(
      tasks.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      }))
  }

  const handleEdit = ({ id }) => {
    const findTask = tasks.find((todo) => todo.id === id)
    setEditTask(findTask)
    inputFocus.current.focus()
  }

  return (
    <>
      {tasks.map((todo) => (
        <li className="max-w-full flex justify-between items-center bg-white rounded-md h-[40px] mb-5" key={todo.id}>
          <input
            className='appearance-none border-none rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type="text"
            value={todo.title}
            onChange={(e) => e.preventDefault()}
          />
          <div className='p-2 text-black '>
            <button className='p-2' onClick={() => handleEdit(todo)}>
              <FaEdit color="green" />
            </button>
            <button onClick={() => handleCompleted(todo)}>
              <MdTaskAlt color='blue' />
            </button>
            <button className='p-2' onClick={() => handleDelete(todo)}>
              <MdDelete color='red' />
            </button>
          </div>
        </li>
      ))}
    </>
  )
}
