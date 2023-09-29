<?php

use App\Http\Controllers\V1\JsonRecord\JsonRecordController;
use Illuminate\Support\Facades\Route;

Route::prefix("jsons")->group(
    function () {
        Route::get("{json}", [JsonRecordController::class, 'index'])
            ->name("index");
        Route::post("{json}", [JsonRecordController::class, 'store'])
            ->name("store");
    }
);
