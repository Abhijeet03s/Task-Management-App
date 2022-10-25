import { Form } from "./components/Form"

export default function App() {

  return (
    <>
      <div className="max-w-full min-h-screen text-white text-center py-5 space-y-20 font-Poppins">
        <h1 className="text-4xl font-extrabold">Task Management App</h1>
        <div className="grid grid-cols-2 place-items-center gap-4 px-20 ">
          <div>
            <h1 className="text-3xl font-bold">To-do</h1>
            <div className="w-[400px] h-[500px] flex flex-col bg-[#2e2e2e] p-5 mt-5">
              <Form />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-center">Done</h1>
            <div className="w-[400px] h-[500px] flex flex-col bg-[#2e2e2e] p-5 mt-5">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


