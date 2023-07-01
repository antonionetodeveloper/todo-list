"use client"

import { Fragment } from "react"
import { Dialog as DialogUiComponent, Transition } from "@headlessui/react"
import { IoCloseOutline } from "react-icons/io5"
import { DialogProps } from "@/types/components/molecules/client/dialog"
import EiditDialog from "./edit"
import DeleteDialog from "./delete"
import CreateDialog from "./create"

const Dialog = (props: DialogProps) => {
   const { isOpen, setIsOpen, title: todoTitle, type } = props

   return (
      <span>
         <Transition appear show={isOpen} as={Fragment}>
            <DialogUiComponent
               as="div"
               className="relative z-10"
               onClose={() => setIsOpen(false)}
            >
               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
               >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
               </Transition.Child>

               <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                     <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                     >
                        <DialogUiComponent.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                           <button
                              type="button"
                              className="absolute top-6 right-6 rounded-md border-transparent bg-red-300 p-2 hover:bg-red-400 duration-150"
                              onClick={() => setIsOpen(false)}
                           >
                              <IoCloseOutline width="40px" />
                           </button>
                           {type === "edit" && (
                              <EiditDialog
                                 isOpen={isOpen}
                                 setIsOpen={setIsOpen}
                                 title={todoTitle}
                              />
                           )}
                           {type === "delete" && (
                              <DeleteDialog
                                 isOpen={isOpen}
                                 setIsOpen={setIsOpen}
                                 title={todoTitle}
                              />
                           )}
                           {type === "create" && (
                              <CreateDialog
                                 isOpen={isOpen}
                                 setIsOpen={setIsOpen}
                              />
                           )}
                        </DialogUiComponent.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </DialogUiComponent>
         </Transition>
      </span>
   )
}

export default Dialog
