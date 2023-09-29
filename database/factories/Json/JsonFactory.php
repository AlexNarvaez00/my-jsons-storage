<?php

namespace Database\Factories\Json;

use App\Http\Requests\Json\JsonTypes;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Json\Jsons>
 */
class JsonFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => $this->faker->name(),
            "fields" => json_encode([
                [
                    "name" => $this->faker->name(),
                    "type" => JsonTypes::String->name
                ]
            ])
        ];
    }
}
