<?php namespace Library\Courses\Models;

use Model;

/**
 * Model
 */
class Category extends Model
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
    public $table = 'library_courses_categories';

     /*
    Reverse relationship
    1. Create a page with this slug: /categories/:slug
        1. Model Class: :Model Class of the Category3
        2. IDentifier Value: :slug 
        3. Key Column: slug 
        4. Display Column: Title
    2.  On Individual page This link will point to the /categories/:slug
        {% for category in record.categories %}
        <a href="/catalog//categories/{{ category.slug }}"> {{ category.title}} </a></br> 
        {% endfor %}
    */

    public $belongsToMany = [
        'courses' => [
            'Library\Courses\Models\Course',
            'table' => 'library_courses_relation_catgs',
            'order' => 'title'

        ]
    ];
   
}