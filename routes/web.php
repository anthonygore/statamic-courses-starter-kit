<?php

use App\Http\Controllers\CourseController;
use Illuminate\Support\Facades\Route;

Route::get('/enroll/{course_id}', [CourseController::class, 'enroll']);
