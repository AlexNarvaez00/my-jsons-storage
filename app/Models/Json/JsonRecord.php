<?php

namespace App\Models\Json;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class JsonRecord extends Model
{
    use HasFactory;
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     *
     */
    protected $fillable = ["public_id", 'json_id', "record"];

    /**
     * @param Builder $query
     * @param string $json_id
     * @param string $public_id
     */
    public function scopeWhereJsonIdAndPublicId(
        Builder $query,
        string $json_id,
        string $public_id
    ) {
        $query->where("json_id", "=", $json_id)
            ->where("public_id", '=', $public_id);
    }

    /**
     * Note: Error in search
     * @param Builder $query
     * @param string $search
     */
    public function scopeWhereRecordLike(Builder $query, string $search)
    {
        $query->where("record", "like", "%" . $search . "%");
    }
}
