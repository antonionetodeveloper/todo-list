import { DialogProps } from "@/types/components/molecules/client/dialog"
import { Dialog as DialogUiComponent } from "@headlessui/react"
import { useState } from "react"

const DeleteDialog = (props: DialogProps) => {
   const { isOpen, setIsOpen, title: todoTitle } = props
   const [titleInput, setTitleInput] = useState<string>(todoTitle)

   return (
      <div>
         <DialogUiComponent.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
         >
            Delete todo
         </DialogUiComponent.Title>
         <div className="mt-4">
            <p className="text-sm text-gray-500">Are you sure about that?</p>
         </div>

         <div className="mt-4">
            <button
               type="button"
               className="flex ml-auto rounded-md border-transparent bg-red-400 px-4 py-2 text-sm font-medium text-neutral-100 hover:bg-red-500 duration-150"
               onClick={() => setIsOpen(!isOpen)}
            >
               Yes, i am sure!
            </button>
         </div>
      </div>
   )
}

export default DeleteDialog
