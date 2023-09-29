<?php

use App\Http\Requests\Json\JsonTypes;
use App\Http\Requests\V1\Json\StoreJsonRecordRequest;
use App\Models\Json\Json;
use Pest\Faker\fake;

test("create rule validation", function () {
    $request  = new StoreJsonRecordRequest();
    $json = Json::factory()->create(
        [
            "fields" => json_encode([
                [
                    "name" => "field_1",
                    "type" => JsonTypes::String->name
                ],
                [
                    "name" => "field_2",
                    "type" => JsonTypes::Number->name
                ]
            ])
        ]
    );
    $rules = $request->buildValidationFromJson($json);
    expect($rules)->toMatchArray([
        "field_1" => "required|string",
        "field_2" => "required|numeric"
    ]);
});
