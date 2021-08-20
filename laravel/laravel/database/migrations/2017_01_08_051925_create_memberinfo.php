<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMemberinfo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('memberinfo', function($table)
        {
            $table->increments('id');
            $table->char('name', 35 );
            $table->string('email', 35);
            $table->string('street', 100);
            $table->string('city', 20);
            $table->string('state', 2 );
            $table->string('phone', 15);
            $table->timestamps();
        }); 
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropifExists('memberinfo');
    }
}
