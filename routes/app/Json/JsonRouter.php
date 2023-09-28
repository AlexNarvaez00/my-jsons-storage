<?php

use App\Http\Controllers\Json\JsonController;
use Illuminate\Support\Facades\Route;

Route::resource("jsons", JsonController::class);
