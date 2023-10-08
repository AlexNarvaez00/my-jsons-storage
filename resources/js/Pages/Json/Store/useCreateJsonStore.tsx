import { useForm } from '@inertiajs/react'
import { JsonField } from '../Models/JsonField.model';

interface DataForm {
    name: string;
    fields: JsonField[];
}
const initialState:DataForm = {
    name: "MyJSON",
    fields: [{
        name: "myField",
        type: "String"
    }]
}

export default function useCreateJsonStore() {
    return useForm<DataForm>(initialState);
}
