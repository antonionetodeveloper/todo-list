"use client"

import { useState } from "react"
import Dialog from "../molecules/client/dialogs"

const AddTodo = () => {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <div className="w-full flex justify-center m-8">
         <button
            type="button"
            className="h-min rounded-md border-transparent bg-green-200 px-4 py-2  hover:bg-green-300 duration-150"
            onClick={() => setIsOpen(true)}
         >
            <p className="text-sm font-medium text-green-900">Add item {"+"}</p>
         </button>
         <Dialog isOpen={isOpen} setIsOpen={setIsOpen} type="create" />
      </div>
   )
}

export default AddTodo
