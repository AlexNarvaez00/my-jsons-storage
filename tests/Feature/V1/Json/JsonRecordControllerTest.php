<?php

use App\Models\Json\Json;
use App\Models\Json\JsonRecord;

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
