<?php namespace Library\Courses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateLibraryCourses2 extends Migration
{
    public function up()
    {
        Schema::table('library_courses_', function($table)
        {
            $table->string('slug')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('library_courses_', function($table)
        {
            $table->dropColumn('slug');
        });
    }
}
