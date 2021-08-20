<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/
//Step 1. laravel/app/Http/Middleware/MyMiddleware.php, Step 2. laravel/app/Http/Kernel.php 
/*
Route::get('/', array('middleware' => 'custom.middleware'), function () {
    return view('welcome'); //laravel/resources/views/welcome.blade.php
}); */



Route::get('/', function () {
    return view('childMain'); 
});

Route::get('welcome', function () {
    return view('welcome'); 
});

Route::get('about', function () {
    return "<h1>About Us</h1>";
});

Route::get('arrayVariable', function () {
     $landmarks = ["Tower Hill", "Big Ben", "London Eye"];
     return view('arrayvar', ['mylocation' => 'london', 'weather' => 'sunny', 'landmarks' => $landmarks]); 
});

Route::get('aboutcontrollerpage', 'AboutController@showAbout');

Route::get('about/direction', function () {
    return "<h1>About Direction Page</h1>";
});


Route::get('about/directions', array('as' => 'directions',  function () {
    $theUrl = URL::route('directions');
    return "<h1>This is the URL $theUrl</h1>";
}));


Route::any('submit', function () {
    return "<h1>Form</h1>";
});

Route::get('passingvars/{theSubject}', 'AboutController@showSubject');

Route::get('passingvar/{theSubject}', function ($theSubject) {
    return "<h1>Passing Variable $theSubject Page</h1>";
});

Route::get('passingtwovar/{theSubject1}/{theSubject2}', function ($theSubject1, $theSubject2) {
    return "<h1>Passing Two Variable $theSubject1 $theSubject2 Page</h1>";
});

Route::get('redirect', function () {
    return Redirect::to('about/direction');
});

Route::get('redirected', function () {
    return Redirect::route('directions');
});

Route::get('signup', function() {
    return view('signup'); 
});

    Route::post('thankyou', function() {
        $theEmail = Input::get('email');
        $theSize = Input::get('size');
        $theComment = Input::get('comment');
        $theAgree = Input::get('agree');
        return view('thankyou')->with(['theEmail' => $theEmail, 'theSize' => $theSize, 'theComment' => $theComment, 'theAgree' => $theAgree]); 
        //return view('thankyou')->with( 'theEmail', $theEmail ); 
    });

Route::get('membership', 'MembershipController@enterMember');
   
    Route::post('successful', 'SuccessfulController@saveMemberInfo');

    Route::get('listofusers', 'ListOfUsersController@getListofUsers');