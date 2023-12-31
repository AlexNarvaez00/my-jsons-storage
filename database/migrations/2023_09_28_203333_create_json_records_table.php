<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('json_records', function (Blueprint $table) {
            $table->id();
            $table->uuid("json_id")
                ->nullable(false);
            $table->unsignedBigInteger("public_id")
                ->nullable(false);
            $table->json("record")
                ->nullable(false);
            $table->foreign("json_id")
                ->references("id")
                ->on("jsons");

            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('json_records');
    }
};
