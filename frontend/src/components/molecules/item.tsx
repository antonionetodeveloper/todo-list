"use client"

import { useState } from "react"
import { BiSolidPencil, BiTrash } from "react-icons/bi"
import Button from "../atoms/client/button"
import { ItemProps } from "@/types/components/molecules/item"
import Dialog from "./client/dialogs"

const Item = ({ todo }: ItemProps) => {
   const { title } = todo
   const [isOpen, setIsOpen] = useState(false)
   const [dialogType, setDialogType] = useState<"create" | "edit" | "delete">()

   const handleEditDialog = () => {
      setDialogType("edit")
      setIsOpen(true)
   }

   const handleTrashDialog = () => {
      setDialogType("delete")
      setIsOpen(true)
   }

   return (
      <li className="relative bg-white w-64 h-64 p-8 rounded shadow">
         <div className="absolute flex top-0 right-0 p-2">
            <Button onClick={() => handleEditDialog()}>
               <BiSolidPencil fill="gray" />
            </Button>
            <Button onClick={() => handleTrashDialog()}>
               <BiTrash fill="gray" />
            </Button>
         </div>
         <p className="text-violet-800 font-bold mt-4">{title}</p>
         <Dialog
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title={title}
            type={dialogType}
         />
      </li>
   )
}

export default Item
