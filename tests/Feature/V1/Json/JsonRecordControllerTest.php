<?php

use App\Http\Requests\Json\JsonTypes;
use App\Models\Json\Json;
use App\Models\Json\JsonRecord;
use Pest\Faker\fake;

/**
 * Comprueba si se puede acceder al JSON junto con sus registros
 * desde la API
 */

test("can acces json with records ", function () {
    $json = Json::factory()
        ->has(JsonRecord::factory()->count(5), "records")
        ->create();
    $res = $this->get(route("v1.jsons.index", $json->id))
        ->assertJson([
            "data" => [
                "name" => $json->name
            ]
        ])
        ->assertStatus(200);
});

test("can create a anew record of json", function () {

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

    $data = [
        "field_1" => fake()->word(),
        "field_2" => fake()->randomDigitNotNull(),
    ];

    $res = $this->post(route("v1.jsons.store", $json->id), $data)
        ->assertStatus(201);

    $this->assertDatabaseHas("json_records", [
        "json_id" => $json->id,
        "public_id" => 1
    ]);
});

test("can update json record", function () {
    $json = Json::factory()->create(
        [
            "fields" => json_encode([
                [
                    "name" => "field_aa",
                    "type" => JsonTypes::String->name
                ],
                [
                    "name" => "field_bb",
                    "type" => JsonTypes::Number->name
                ]
            ])
        ]
    );
    $data = [
        "field_aa" => fake()->word(),
        "field_bb" => fake()->randomDigit()
    ];
    $json->records()->save(new JsonRecord([
        "public_id" => 1,
        "record" => json_encode($data)
    ]));
    $res = $this->put(route(
        "v1.jsons.update",
        [
            "json" => $json->id,
            "jsonRecordPublicId" =>  1
        ]
    ), [
        "field_aa" => fake()->word(),
        "field_bb" => fake()->randomDigit()
    ])->assertStatus(200);
});

test("can delete json record", function () {
    $json = Json::factory()->create(
        [
            "fields" => json_encode([
                [
                    "name" => "field_aa",
                    "type" => JsonTypes::String->name
                ],
                [
                    "name" => "field_bb",
                    "type" => JsonTypes::Number->name
                ]
            ])
        ]
    );
    $data = [
        "field_aa" => fake()->word(),
        "field_bb" => fake()->randomDigit()
    ];
    $json->records()->save(new JsonRecord([
        "public_id" => 1,
        "record" => json_encode($data)
    ]));
    $res = $this->delete(route(
        "v1.jsons.update",
        [
            "json" => $json->id,
            "jsonRecordPublicId" =>  1
        ]
    ))->assertStatus(204);
});
