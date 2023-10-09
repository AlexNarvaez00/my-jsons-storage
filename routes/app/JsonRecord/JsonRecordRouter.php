<?php

use App\Http\Controllers\JsonRecord\JsonRecordController;
use Illuminate\Support\Facades\Route;


Route::prefix("jsons")->group(function () {
    Route::get("{json}/create", [JsonRecordController::class, "create"])
        ->name("jsonRecords.create");
    Route::post("{json}/store", [JsonRecordController::class, "store"])
        ->name("jsonRecords.store");
});
