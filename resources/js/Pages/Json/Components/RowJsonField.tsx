import TextInput from "@/Components/TextInput";
import { PageProps } from "@/types";
import { Select } from "flowbite-react";
import React, { useState } from "react";
import { JsonField } from "../Models/JsonField.model";

interface Props {
  types: string[];
  replaceFiled: Function;
  index: Number;
}

export default function RowJsonField({ types, replaceFiled, index }: Props) {
  const [field, setFiled] = useState<JsonField>({
    name: "word",
    type: "Alpha",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiled((prev) => {
      const temp = {
        ...prev,
        name: event.target.value,
      };
      replaceFiled(index, temp);
      return temp;
    });
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {

  setFiled((prev) => {
      const temp = {
        ...prev,
    type: event.target.value,
      };
      replaceFiled(index, temp);
      return temp;
    });



    };

  return (
    <div className="mb-2 flex gap-4">
      <TextInput
        placeholder="Field Name"
        required
        type="text"
        value={field.name}
        onChange={handleChange}
      />
      <div className="grow">
        <Select value={field.type} onChange={handleSelect}>
          {types?.map((type, index) => <option key={index}>{type}</option>)}
        </Select>
      </div>
    </div>
  );
}
