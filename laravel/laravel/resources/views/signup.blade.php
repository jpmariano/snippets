<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <!-- //https://laravel.com/docs/5.3/blade -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link href="{{asset('css/style.css')}} " rel="stylesheet" type="text/css">
        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway';
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    <a href="{{ url('/login') }}">Login</a>
                    <a href="{{ url('/register') }}">Register</a>
                </div>
            @endif

            <div class="content">
                <div class="title m-b-md">
                    Laravel 
                </div>

                <div class="forms">
                  {{ Form::open(['url' => 'thankyou']) }}
                        {{ Form::label('email', 'E-Mail Address') }}
                        {{ Form::text('email', 'example@gmail.com') }}

                        {{ Form::label('size', 'Size') }}
                        {{  Form::select('size', ['L' => 'Large', 'S' => 'Small'], 'S') }}

                        {{ Form::label('comment', 'Comment') }}
                        {{ Form::textarea('comment', '', array('placeholder' => "What's your interest")) }}

                        {{ Form::checkbox('agree', 'value', true) }}
                        {{ Form::label('agree', 'I agree with terms') }}

                        {{ Form::submit('Click Me!') }}
                  {{  Form::close()  }}
                </div>
            </div>
        </div>
    </body>
</html>
