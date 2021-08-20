<?php namespace Library\Courses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableDeleteLibraryCoursesRelationCategories extends Migration
{
    public function up()
    {
        Schema::dropIfExists('library_courses_relation_categories');
    }
    
    public function down()
    {
        Schema::create('library_courses_relation_categories', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('course_id');
            $table->integer('category_id');
        });
    }
}
