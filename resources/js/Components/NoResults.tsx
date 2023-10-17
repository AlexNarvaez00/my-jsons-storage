interface Props{
    title?: string
}
export default function NoResults({title = "No Results"}:Props) {
  return (
    <section className="w-full p-11 flex">
      <div className="m-auto">
        <h1 className="text-5xl font-bold text-gray-300">
          {title} 🙁
        </h1>
      </div>
    </section>
  );
}
