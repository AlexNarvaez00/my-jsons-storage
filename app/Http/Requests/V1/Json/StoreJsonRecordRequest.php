<?php

namespace App\Http\Requests\V1\Json;

use App\Http\Requests\Json\JsonTypes;
use App\Models\Json\Json;
use Illuminate\Foundation\Http\FormRequest;

class StoreJsonRecordRequest extends FormRequest
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
        return $this->buildValidationFromJson(request()->route()->json);
    }

    /**
     * @param Json $json
     * @return array
     */
    public function buildValidationFromJson(Json $json): array
    {
        $attributes = json_decode($json->fields, true);
        $validation = array_map(function (array $field) {
            return [
                $field["name"] => $this->getRule($field["type"])
            ];
        }, $attributes);
        return array_merge(...$validation);
    }

    /**
     * @param string $jsonTye
     * @return string
     */
    public function getRule(string $jsonTye): string
    {
        switch (JsonTypes::jsonTypeFromString($jsonTye)) {
            case JsonTypes::String:
                return "required|string";
            case JsonTypes::Number:
                return "required|numeric";
        }
    }
}
