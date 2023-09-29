<?php

namespace App\Http\Controllers\V1\Json;

use App\Http\Controllers\Controller;
use App\Http\Resources\Json\JsonResource;
use App\Models\Json\Json;
use Illuminate\Http\Request;

class JsonRecordController extends Controller
{
    public function index(Json $json)
    {
        return new JsonResource($json);
    }

    public function store()
    {

    }
}
