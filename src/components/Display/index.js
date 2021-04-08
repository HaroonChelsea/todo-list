export default function Display({ todo }) {
  return (
    <div>
      <h1 className="text-4xl py-3 font-bold">{todo.todo}</h1>
      <p className="leading-3 mt-5 text-lg">
        {todo.description ? todo.description : "No description!"}
      </p>
    </div>
  );
}
