<?php namespace Library\Courses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateLibraryCourses extends Migration
{
    public function up()
    {
        Schema::create('library_courses_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('id');
            $table->string('title');
            $table->string('number');
            $table->primary(['id']);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('library_courses_');
    }
}
