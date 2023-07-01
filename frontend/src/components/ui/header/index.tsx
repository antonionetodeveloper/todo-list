import DropDown from "@/components/molecules/client/dropdown"
import { IoSettingsOutline } from "react-icons/io5"

const Header = () => {
   return (
      <header className="flex justify-between p-4 shadow-md">
         <h1 className="font-extrabold text-4xl">Todo List</h1>
         <DropDown icon={<IoSettingsOutline />} content={[]}>
            Settings
         </DropDown>
      </header>
   )
}

export default Header
