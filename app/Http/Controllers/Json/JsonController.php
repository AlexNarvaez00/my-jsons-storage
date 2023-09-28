<?php

namespace App\Http\Controllers\Json;

use App\Http\Controllers\Controller;
use App\Http\Requests\Json\IndexJsonRequest;
use App\Http\Requests\Json\StoreJsonRequest;
use App\Http\Requests\Json\UpdateJsonRequest;
use App\Models\Json\Json;
use App\Services\Json\JsonCrudService;

class JsonController extends Controller
{

    /**
     * @para JsonCrudService $jsonService
     *
     */
    public function __construct(
        private readonly JsonCrudService $jsonService
    ) {
    }


    /**
     * Display a listing of the resource.
     */
    public function index(IndexJsonRequest $request)
    {
        $jsonRecordsPaginated = $this
            ->jsonService
            ->findManyJsons($request->name ?? "");
        return inertia("Json/Page", [
            "records" => $jsonRecordsPaginated
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Json/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreJsonRequest $request)
    {
        $jsonNameValidated = $request->validated();
        $this->jsonService->handleCreate($jsonNameValidated);
    }

    /**
     * Display the specified resource.
     */
    public function show(Json $json)
    {
        //Colocar carga ansiosa
        $jsonWithRecods = $json;
        return inertia("Json/Show",[
            "json" => $jsonWithRecods
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Json $json)
    {}

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateJsonRequest $request, Json $jsons)
    {}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Json $json)
    {
        $json->delete();
        return response(null, 204);
    }
}
