<?php

namespace App\Http\Controllers\V1\JsonRecord;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\Json\StoreJsonRecordRequest;
use App\Http\Resources\Json\JsonResource;
use App\Models\Json\Json;
use App\Models\Json\JsonRecord;

class JsonRecordController extends Controller
{
    public function index(Json $json)
    {
        return new JsonResource($json);
    }

    public function store(Json $json, StoreJsonRecordRequest $request)
    {
        $json->records()->save(new JsonRecord([
            "record" => json_encode($request->validated())
        ]));
    }
}
