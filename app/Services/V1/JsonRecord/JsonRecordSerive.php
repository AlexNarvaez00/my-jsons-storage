<?php

namespace App\Services\V1\JsonRecord;

use App\Http\Requests\Json\JsonTypes;
use App\Models\Json\Json;

class JsonRecord {
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
