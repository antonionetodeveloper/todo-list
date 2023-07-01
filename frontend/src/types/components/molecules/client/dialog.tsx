export interface DialogProps {
   isOpen: boolean
   setIsOpen: (value: boolean) => void
   title?: string
   type?: "edit" | "create" | "delete"
}
