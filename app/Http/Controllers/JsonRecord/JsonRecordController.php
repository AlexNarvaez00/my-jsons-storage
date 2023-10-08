<?php

namespace App\Http\Controllers\JsonRecord;

use App\Http\Controllers\Controller;
use App\Models\Json\Json;
use App\Services\Json\JsonCrudService;
use App\Services\V1\JsonRecord\JsonRecordService;

class JsonRecordController extends Controller
{
    public function __construct(
        private readonly JsonRecordService $jsonRecordService,
        private readonly JsonCrudService $jsonCrudService

    ) {
    }

    /**
     * @param Json $json
     */
    public function create(Json $json)
    {
        return inertia("JsonRecord/Create", [
            "json" => $json,
            "fields" => $this->jsonCrudService->getNameOfFields($json)
        ]);
    }
}
