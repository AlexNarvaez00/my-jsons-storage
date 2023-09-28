<?php

namespace App\Services\Json;

use App\Models\Json\Json;
use Illuminate\Database\Eloquent\Builder;

class JsonCrudService
{

    /**
     * @param string $name
     * @return Builder
     */
    public function findManyJsons(string $name): Builder
    {
        return Json::where("name", "like", "%$name%");
    }


    /**
     * @param array<string> $jsonData
     */
    public function handleCreate(array $jsonData): Json
    {
        $jsonData["fields"] = json_encode($jsonData["fields"]);
        return Json::create($jsonData);
    }
}
