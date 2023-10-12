import { Button } from "flowbite-react";

export default function EmptyRecords() {
  return (
    <section className="w-full p-5 flex">
      <div className="m-auto">
        <h1>Pleas add a new register</h1>
        <Button>
          Create register
        </Button>
      </div>
    </section>
  );
}
