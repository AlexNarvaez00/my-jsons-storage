<?php

use App\Http\Requests\Json\JsonTypes;
use App\Models\Json\Json;
use Pest\Faker\fake;

it('can acces jsons page', function () {
    $response = $this->get(route("jsons.index"));
    $response->assertStatus(200);
});

test("can create a new json", function () {

    $fakeName = fake()->name();

    $res = $this->post(route("jsons.store"), [
        "name" => $fakeName,
        "fields" => [
            [
                "name" => "firts_field",
                "type" => JsonTypes::Number->name
            ]
        ]
    ]);
    $res->assertStatus(200);

    $this->assertDatabaseHas("jsons", [
        "name" => $fakeName
    ]);
});

test("can not create json with error", function () {

    $fakeName = fake()->name();

    $res = $this->post(route("jsons.store"), [
        "name" => $fakeName,
        "fields" => json_encode([["sdcsc"]])
    ]);
    $res->assertStatus(302);
});

test("can view a json", function () {
    $json = Json::factory()->create();
    $this->get(route("jsons.show", $json->id))
        ->assertStatus(200);
});

test("can delete a json", function () {
    $json = Json::factory()->create();
    $this->delete(route("jsons.destroy", $json))
        ->assertStatus(204);
});
