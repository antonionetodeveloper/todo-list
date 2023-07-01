"use client"

import { ButtonProps } from "@/types/components/atoms/client/button"

const Button = (props: ButtonProps) => {
   const { children, onClick } = props
   return (
      <button
         className="flex items-center gap-2 p-2 rounded hover:shadow-md"
         onClick={onClick}
      >
         {children}
      </button>
   )
}

export default Button
