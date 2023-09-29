<?php

namespace App\Http\Controllers\V1\JsonRecord;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\JsonRecord\StoreJsonRecordRequest;
use App\Http\Resources\Json\JsonRecordResource;
use App\Http\Resources\Json\JsonResource;
use App\Models\Json\Json;
use App\Services\V1\JsonRecord\JsonRecordService;

class JsonRecordController extends Controller
{
    public function __construct(
        private readonly JsonRecordService $service
    ) {
    }

    public function index(Json $json)
    {
        return new JsonResource($json);
    }

    /**
     * @param Json $json
     * @param StoreJsonRecordRequest $request
     */
    public function store(Json $json, StoreJsonRecordRequest $request)
    {
        return new JsonRecordResource(
            $this->service
                ->handleCreate($json, $request->validated())
        );
    }
}
