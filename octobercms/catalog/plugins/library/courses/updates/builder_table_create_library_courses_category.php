<?php namespace Library\Courses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateLibraryCoursesCategory extends Migration
{
    public function up()
    {
        Schema::create('library_courses_category', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('title');
            $table->string('slug');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('library_courses_category');
    }
}
