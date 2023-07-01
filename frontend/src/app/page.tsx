import DropDown from "@/components/molecules/client/dropdown"
import Todos from "@/components/organisms/todos"

export default function Home() {
   return (
      <>
         {/* @ts-expect-error - Async component */}
         <Todos />
      </>
   )
}
