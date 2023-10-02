<?php

namespace App\Services\V1\JsonRecord;

use App\Http\Requests\Json\JsonTypes;
use App\Models\Json\Json;
use App\Models\Json\JsonRecord;
use Illuminate\Database\Eloquent\Builder;

class JsonRecordService
{

    /**
     * @param string $jsonId
     */
    public function findByJsonId(string $jsonId): Builder
    {
        return JsonRecord::whereJsonId($jsonId);
    }

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

    public function handleUpdate(Json $json, JsonRecord $jsonRecord, array $jsonRecordData): JsonRecord
    {
        $jsonRecord->fill([
            "record" => json_encode($jsonRecordData)
        ]);
        return $json->records()
            ->updateOrCreate(
                [
                    "json_id" => $json->id,
                    "public_id" => $jsonRecord->public_id
                ],
                $jsonRecord->toArray()
            );
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
