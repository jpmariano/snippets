<?php namespace Library\Courses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateLibraryCoursesRelationCatgs extends Migration
{
    public function up()
    {
        Schema::create('library_courses_relation_catgs', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('course_id');
            $table->integer('category_id');
            $table->primary(['course_id','category_id']);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('library_courses_relation_catgs');
    }
}
