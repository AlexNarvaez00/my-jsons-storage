<?php

namespace App\Http\Controllers\V1\JsonRecord;

use App\Http\Controllers\Controller;
use App\Http\Requests\Json\UpdateJsonRequest;
use App\Http\Requests\V1\JsonRecord\StoreJsonRecordRequest;
use App\Http\Requests\V1\JsonRecord\UpdateJsonRecordRequest;
use App\Http\Resources\Json\JsonRecordResource;
use App\Http\Resources\Json\JsonResource;
use App\Models\Json\Json;
use App\Models\Json\JsonRecord;
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
    public function store(StoreJsonRecordRequest $request, Json $json)
    {
        return new JsonRecordResource(
            $this->service
                ->handleCreate($json, $request->validated())
        );
    }

    /**
     * @param UpdateJsonRecordRequest $request
     * @param Json $json
     * @param int $jsonRecordPublicId
     */
    public function  update(
        UpdateJsonRecordRequest $request,
        Json $json,
        int $jsonRecordPublicId
    ) {
        $jsonRecord = JsonRecord::whereJsonIdAndPublicId($json->id, $jsonRecordPublicId)
            ->first();
        if (is_null($jsonRecord)) {
            return response(null, 400);
        }
        return new JsonRecordResource(
            $this->service
                ->handleUpdate($json, $jsonRecord, $request->validated())
        );
    }

    /**
     *
     */
    public function destroy(Json $json, int $jsonRecordPublicId)
    {
        $jsonRecord = JsonRecord::whereJsonIdAndPublicId($json->id, $jsonRecordPublicId)
            ->first();
        if (is_null($jsonRecord)) {
            return response(null, 400);
        }
        $jsonRecord->delete();
        return response(null, 204);
    }
}
