<?php

use Illuminate\Support\Facades\Route;

Route::prefix("v1")->group(function () {
    Route::name("v1.jsons.")->group(function () {
        require __DIR__ . "/v1/JsonApiRouter.php";
    });
});
