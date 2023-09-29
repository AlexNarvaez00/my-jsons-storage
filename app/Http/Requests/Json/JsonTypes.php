<?php

namespace App\Http\Requests\Json;

enum JsonTypes
{
    case Number;
    case String;
    case Alpha;
    public static function jsonTypeFromString(string $nameCase): JsonTypes
    {
        $cases = JsonTypes::cases();
        foreach ($cases as $case) {
            if (strcmp($case->name, $nameCase) == 0) {
                return $case;
            }
        }
    }
}
