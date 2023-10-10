import { useForm } from "@inertiajs/react";

interface SearchType {
    search: string;
}

const initialState: SearchType = {
    search: "",
};

export function useSearch(route:string) {
    const { data, setData, get } = useForm<SearchType>(initialState);

    const handleSubmitForm = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        get(route,{
            preserveState:true
        });
    };

    const handleChangeInputSearch = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setData(() => ({ search: event.target.value }));
    };

    return { data , handleChangeInputSearch, handleSubmitForm };
}
