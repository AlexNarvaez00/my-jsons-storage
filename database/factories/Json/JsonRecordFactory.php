<?php

namespace Database\Factories\Json;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Json\JsonRecord>
 */
class JsonRecordFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "json_id" => null,
            "record" => json_encode([
                "name" =>  $this->faker->name(),
                "las_name" =>  $this->faker->name(),
            ])
        ];
    }
}
