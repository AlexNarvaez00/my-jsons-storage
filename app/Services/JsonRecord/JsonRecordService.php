<?php

namespace App\Services\JsonRecord;

use App\Http\Requests\Json\JsonTypes;
use App\Models\Json\Json;
use App\Models\Json\JsonRecord;

class JsonRecordService {

    /**
     * @param Json $json
     * @param array $jsonRecordData
     * @return JsonRecord
     */
    public function handleCreate(Json $json, array $jsonRecordData): JsonRecord
    {
        $numberOfRecords = Json::countJsonRecords($json) + 1;
        return $json->records()->save(new JsonRecord([
            "public_id" => $numberOfRecords,
            "record" => json_encode($jsonRecordData)
        ]));
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
            case JsonTypes::Alpha:
                return "required|string";
        }
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
}
