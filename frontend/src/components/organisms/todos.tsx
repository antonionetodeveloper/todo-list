import Item from "@/components/molecules/item"
import AddTodo from "../atoms/addTodo"

const mock = [
   { id: "1", title: "test-01" },
   { id: "2", title: "test-02" },
   { id: "3", title: "test-03" },
   { id: "1", title: "test-01" },
   { id: "2", title: "test-02" },
   { id: "3", title: "test-03" },
   { id: "3", title: "test-03" },
]

const Todos = async () => {
   return (
      <section className="flex flex-col items-center justify-center">
         <ul className="w-3/4 flex flex-wrap justify-center gap-8">
            {mock.map((item) => (
               <Item key={item.id} todo={item} />
            ))}
         </ul>
         <AddTodo />
      </section>
   )
}

export default Todos
