<?php

namespace App\Http\Requests\Json;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreJsonRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => "required|string|min:3|max:50",
            "fields" => "required|array",
            "fileds.*" => "required|array",
            "fields.*.name" => "required|regex:/(^[a-z]+)([a-z0-9_]*)$/",
            "fields.*.type" => [
                "required",
                Rule::in(array_map(
                    function (JsonTypes $type) {
                        return $type->name;
                    },
                    JsonTypes::cases()
                ))
            ],
        ];
    }
}
