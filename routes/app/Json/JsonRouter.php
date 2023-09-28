<?php

use App\Http\Controllers\App\V1\JsonController;
use Illuminate\Support\Facades\Route;

Route::resource("jsons", JsonController::class);
