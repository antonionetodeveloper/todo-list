import { DialogProps } from "@/types/components/molecules/client/dialog"
import { Dialog as DialogUiComponent } from "@headlessui/react"
import { useState } from "react"

const CreateDialog = (props: DialogProps) => {
   const { isOpen, setIsOpen } = props
   const [titleInput, setTitleInput] = useState("")

   return (
      <div>
         <DialogUiComponent.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
         >
            Edit todo
         </DialogUiComponent.Title>
         <div className="mt-4">
            <p className="text-sm text-gray-500">
               Create a title to your new todo!
            </p>
            <input
               type="text"
               className="bg-gray-100 text-gray-900 w-full mt-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
               value={titleInput}
               placeholder={titleInput}
               onChange={(event) => {
                  setTitleInput(event.target.value)
               }}
            />
         </div>

         <div className="mt-4">
            <button
               type="button"
               className="flex ml-auto rounded-md border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 duration-150"
               onClick={() => setIsOpen(!isOpen)}
            >
               Create
            </button>
         </div>
      </div>
   )
}

export default CreateDialog
