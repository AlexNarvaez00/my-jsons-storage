<?php

namespace App\Http\Requests\Json;

use Illuminate\Foundation\Http\FormRequest;

class IndexJsonRequest extends FormRequest
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
            "search" => "nullable|string|max:50|regex:/^[a-zA-Z_ ][a-zA-Z0-9_ ]*$/"
        ];
    }
}
