<?php

namespace App\Http\Controllers\Json;

use App\Http\Controllers\Controller;
use App\Http\Requests\Json\IndexJsonRequest;
use App\Http\Requests\Json\JsonTypes;
use App\Http\Requests\Json\ShowJsonRequest;
use App\Http\Requests\Json\StoreJsonRequest;
use App\Http\Requests\Json\UpdateJsonRequest;
use App\Models\Json\Json;
use App\Services\Json\JsonCrudService;
use App\Services\JsonRecord\JsonRecordService;

class JsonController extends Controller
{

    /**
     * @para JsonCrudService $jsonService
     *
     */
    public function __construct(
        private readonly JsonCrudService $jsonService,
        private readonly JsonRecordService $jsonRecordService
    ) {
    }


    /**
     * Display a listing of the resource.
     */
    public function index(IndexJsonRequest $request)
    {
        $jsonRecordsPaginated = $this
            ->jsonService
            ->findManyJsons($request->search ?? "")
            ->paginate(10);
        return inertia("Json/Page", [
            "records" => $jsonRecordsPaginated,
            "names" => "hola",
            "hasManyRecords" => $jsonRecordsPaginated->isEmpty() && empty($request->search)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $types = collect(JsonTypes::cases())
            ->map(fn ($typeJson) => $typeJson->name)
            ->toArray();

        return inertia("Json/Create", [
            "types" => $types
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreJsonRequest $request)
    {
        $jsonNameValidated = $request->validated();
        $json = $this->jsonService->handleCreate($jsonNameValidated);
        return to_route("jsons.show", $json->id);
    }

    /**
     * Display the specified resource.
     * @param Json $json
     */
    public function show(ShowJsonRequest $request, Json $json)
    {
        $jsonWithRecods = $json;
        $records = $this->jsonRecordService
            ->findByJsonIdAndSearchLike($json->id, $request->search ?? "")
            ->paginate(10);
        $fields = $this->jsonService
            ->getNameOfFields($json);

        return inertia("Json/Show", [
            "json" => $jsonWithRecods,
            "records" => $records,
            "fields" => $fields,
            "hasManyRecords" => $records->isEmpty() && empty($request->search)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Json $json)
    {
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateJsonRequest $request, Json $jsons)
    {
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Json $json)
    {
        $json->delete();
        return response(null, 204);
    }
}
