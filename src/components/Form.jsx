export const Form = () => {
    return (
        <>
            <form className="flex flex-col gap-4 w-[250px]">
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Title"></input>
                <textarea rows="2" className="block p-2.5 w-full text-sm text-gray-700 bg-gray-50 rounded border border-gray-300 focus:outline-none focus:shadow-outline" placeholder="Description">
                </textarea>
                <div className="flex justify-evenly item-center">
                    <button class="bg-transparent hover:bg-blue-500 text-white hover:text-white py-1 px-3 border border-blue-500 hover:border-transparent rounded">
                        Add
                    </button>
                    <button class="bg-transparent hover:bg-red-500 text-white hover:text-white py-1 px-3 border border-red-500 hover:border-transparent rounded">
                        Delete
                    </button>
                </div>
            </form>
        </>
    )
}
