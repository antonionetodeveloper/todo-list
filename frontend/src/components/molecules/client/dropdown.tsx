"use client"

import Button from "@/components/atoms/client/button"
import { Fragment } from "react"
import { DropDownProps } from "@/types/components/molecules/client/dropdown"
import { Menu, Transition } from "@headlessui/react"

const DropDown = (props: DropDownProps) => {
   const { children, icon, content } = props

   return (
      <Menu as="div">
         <div className="relative z-50">
            <Menu.Button>
               <div className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 py-2 px-4 rounded shadow duration-150">
                  <p>{children}</p>
                  {icon}
               </div>
            </Menu.Button>
            <Transition
               as={Fragment}
               enter="transition ease-out duration-100"
               enterFrom="transform opacity-0 scale-95"
               enterTo="transform opacity-100 scale-100"
               leave="transition ease-in duration-75"
               leaveFrom="transform opacity-100 scale-100"
               leaveTo="transform opacity-0 scale-95"
            >
               <Menu.Items>
                  <div className="absolute right-0 shadow-lg bg-white rounded w-48 p-1 mt-2">
                     <Menu.Item>
                        <button className="text-gray-900 group flex w-full items-center rounded-md p-2 text-sm hover:bg-slate-200 duration-150">
                           Edit
                        </button>
                     </Menu.Item>
                  </div>
               </Menu.Items>
            </Transition>
         </div>
      </Menu>
   )
}

export default DropDown
