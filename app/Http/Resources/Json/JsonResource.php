<?php

namespace App\Http\Resources\Json;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource as LaravelResource;

class JsonResource extends LaravelResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "name" => $this->name,
            "records" => JsonRecordResource::collection($this->records)
        ];
    }
}
