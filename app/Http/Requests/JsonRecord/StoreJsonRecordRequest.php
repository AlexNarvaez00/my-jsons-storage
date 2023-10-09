<?php

namespace App\Http\Requests\JsonRecord;

use App\Services\JsonRecord\JsonRecordService;
use Illuminate\Foundation\Http\FormRequest;

class StoreJsonRecordRequest extends FormRequest
{
    public function __construct(private readonly JsonRecordService $service = new JsonRecordService)
    {
        parent::__construct();
    }



    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return $this->service->buildValidationFromJson(request()->route()->json);
    }
}
