<?php namespace Library\Courses\Models;

use Model;

/**
 * Model
 */
class Course extends Model
{
    use \October\Rain\Database\Traits\Validation;

    /*
     * Validation
     */
    public $rules = [
    ];

    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;

    /**
     * @var string The database table used by the model.
     */
    public $table = 'library_courses_';

    /*
     * Relation From Thumbnail Image
     * 1. Add an Image fields in models and set mode type to image
     * 2. Add the script below
     * 3. <img src="{{ record.thumbnail.path }}" alt="Course Image" style="width:100px;height:100px;">
     */
    public $attachOne = [
        'thumbnail' => 'System\Models\File'
    ];

     /*
     * Relation From Multile File Upload
     * 1. Add an Image fields in models and set mode type to image
     * 2. Add the script below
     * 3. {% for resource in record.resource %}
            <a href="{{ resource.path }}" download="{{record.title}}">Download the pdf</a>
          {% endfor %}
     */
    public $attachMany = [
        'resource' => 'System\Models\File'
    ];

     /*
     * Relation From 
     * 1. Create Table: library_courses_relation_catgs
     * 2. Add Field to the Form in course
     * 3. Add This code Below This show now display in the form
     * 4. Display to the page 
     * 
      {% for category in record.categories %}
        {{ category.title}} </br>
      {% endfor %}
     */
    public $belongsToMany = [
        'categories' => [
            'Library\Courses\Models\Category',
            'table' => 'library_courses_relation_catgs',
            'order' => 'title'

        ]
    ];
 
}