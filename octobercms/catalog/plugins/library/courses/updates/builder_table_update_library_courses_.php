<?php namespace Library\Courses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateLibraryCourses extends Migration
{
    public function up()
    {
        Schema::table('library_courses_', function($table)
        {
            $table->increments('id')->change();
        });
    }
    
    public function down()
    {
        Schema::table('library_courses_', function($table)
        {
            $table->integer('id')->change();
        });
    }
}
