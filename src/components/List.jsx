import React from 'react'

export const List = ({ tasks, setTasks, setEdit }) => {

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
      }
      ))
  }

  const handleEdit = ({ id }) => {
    const findTask = tasks.find((todo) => todo.id === id)
    setEdit(findTask)
  }

  return (
    <>
      {tasks.map((todo) => (
        <li className="max-w-full flex justify-center items-center bg-white rounded-md max-h-[40px] mb-5" key={todo.id}>
          <input
            className='appearance-none border-none rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type="text"
            value={todo.title}
            onChange={(e) => e.preventDefault()}
          />
          <div className='p-2 text-black '>
            <button className='p-2' onClick={() => handleEdit(todo)}>
              E
            </button>
            <button onClick={() => handleCompleted(todo)}>
              C
            </button>
            <button className='p-2' onClick={() => handleDelete(todo)}>
              D
            </button>
          </div>
        </li>
      ))}
    </>
  )
}
