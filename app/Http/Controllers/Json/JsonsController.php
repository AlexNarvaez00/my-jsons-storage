<?php

namespace App\Http\Controllers\Json;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreJsonsRequest;
use App\Http\Requests\UpdateJsonsRequest;
use App\Models\Json\Jsons;

class JsonsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreJsonsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Jsons $jsons)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Jsons $jsons)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateJsonsRequest $request, Jsons $jsons)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Jsons $jsons)
    {
        //
    }
}
