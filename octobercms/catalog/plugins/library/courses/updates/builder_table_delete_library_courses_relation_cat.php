<?php namespace Library\Courses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableDeleteLibraryCoursesRelationCat extends Migration
{
    public function up()
    {
        Schema::dropIfExists('library_courses_relation_cat');
    }
    
    public function down()
    {
        Schema::create('library_courses_relation_cat', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('course_id');
            $table->integer('category_id');
            $table->primary(['course_id','category_id']);
        });
    }
}
