<?php

use App\Http\Controllers\V1\JsonRecord\JsonRecordController;
use Illuminate\Support\Facades\Route;

Route::prefix("jsons")->group(
    function () {
        Route::get("{json}", [JsonRecordController::class, 'index'])
            ->name("index");
        Route::post("{json}", [JsonRecordController::class, 'store'])
            ->name("store");
        Route::get("{json}/{jsonRecordPublicId}", [JsonRecordController::class, "show"])
            ->name("show");
        Route::put("{json}/{jsonRecordPublicId}", [JsonRecordController::class, "update"])
            ->name("update");
        Route::delete("{json}/{jsonRecordPublicId}", [JsonRecordController::class, "destroy"])
            ->name("destroy");
    }
);
