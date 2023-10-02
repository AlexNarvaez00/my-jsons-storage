<?php

namespace App\Models\Json;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @author Narvaez A.
 **/
class Json extends Model
{
    use HasFactory;
    use HasUuids;
    use SoftDeletes;

    /**
     * Indicates if the model's ID is auto-incrementing.
     *
     * @var bool
     *
     */
    public $incrementing = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     *
     */
    protected $fillable = ['name', "fields"];

    /**
     * @param Builder
     * @param string $name
     * @return void
     */
    public function scopeWhereNameLikeWithCountRecords(Builder $query, string $name): void
    {
        $query->select(
            [
                "jsons.id",
                "name",
                "jsons.created_at",
            ]
        )
            ->selectRaw(
                "COUNT(json_id) as count_records"
            )
            ->leftJoinWithJsonRecords()
            ->whereNameLike($name)
            ->groupBy([
                "jsons.id",
                "name",
                "jsons.created_at"
            ]);
    }
    public function scopeLeftJoinWithJsonRecords(Builder $query): void
    {
        $query->leftJoin("json_records", "jsons.id", "=", "json_records.json_id");
    }
    /**
     * @param Builder $query
     * @return void
     */
    public function scopeJoinWithJsonRecords(Builder $query): void
    {
        $query->join("json_records", "json_records.json_id", "=", "jsons.id");
    }


    /**
     * @param Builder $query
     * @param string $name
     * @return void
     */
    public function scopeWhereNameLike(Builder $query, string $name): void
    {
        $query->where("name", "like", "%$name%");
    }

    /**
     *@return HasMany
     */
    public function records(): HasMany
    {
        return $this->hasMany(JsonRecord::class);
    }
    /**
     * @param Json $json
     * @return int
     */
    public static function countJsonRecords(Json $json): int
    {
        $count = JsonRecord::where("json_id", '=', $json->id)->count();
        return $count;
    }
}
