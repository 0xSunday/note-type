import { useState } from "react";
import InputField from "../../components/InputField";
import { Todotype } from "../../components/Model";

const Home: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [data, setData] = useState<Todotype[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
  };

  if (todo) {
    setData([...data, { id: Date.now(), todo, isDone: false }]);
    setTodo("");
  }
  // console.log(data);
  return (
    <div className="flex flex-col  items-center my-7  gap-5 ">
      <h1 className="font-bold text-3xl text-black">NoteType</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {data.map((t) => (
        
        <h1>{t.todo}</h1>
      ))}
    </div>
  );
};

export default Home;
