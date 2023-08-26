import InputField from "../../components/InputField";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col  items-center my-7  gap-5 ">
      <h1 className="font-bold text-3xl text-black">NoteType</h1>
      <InputField />
    </div>
  );
};

export default Home;
