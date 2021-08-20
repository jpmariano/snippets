<?php namespace Library\Courses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateLibraryCoursesCategories extends Migration
{
    public function up()
    {
        Schema::rename('library_courses_category', 'library_courses_categories');
        Schema::table('library_courses_categories', function($table)
        {
            $table->increments('id')->unsigned(false)->change();
        });
    }
    
    public function down()
    {
        Schema::rename('library_courses_categories', 'library_courses_category');
        Schema::table('library_courses_category', function($table)
        {
            $table->increments('id')->unsigned()->change();
        });
    }
}
