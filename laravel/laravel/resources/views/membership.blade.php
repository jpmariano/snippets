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
                  {{ Form::open(['url' => 'successful']) }}
                        {{ Form::label('name', 'Name') }}
                        {{ Form::text('name', 'John Doe') }}

                        {{ Form::label('email', 'E-Mail Address') }}
                        {{ Form::text('email', 'example@gmail.com') }}

                        {{ Form::label('street', 'Street Address') }}
                        {{ Form::text('street', 'Enter Street') }}

                        {{ Form::label('city', 'City') }}
                        {{ Form::text('city', 'Enter City') }}

                        {{ Form::label('state', 'State') }}
                        {{ Form::select('state', [
                            'AL'=>'Alabama',
                            'AK'=>'Alaska',
                            'AZ'=>'Arizona',
                            'AR'=>'Arkansas',
                            'CA'=>'California',
                            'CO'=>'Colorado',
                            'CT'=>'Connecticut',
                            'DE'=>'Delaware',
                            'DC'=>'District of Columbia',
                            'FL'=>'Florida',
                            'GA'=>'Georgia',
                            'HI'=>'Hawaii',
                            'ID'=>'Idaho',
                            'IL'=>'Illinois',
                            'IN'=>'Indiana',
                            'IA'=>'Iowa',
                            'KS'=>'Kansas',
                            'KY'=>'Kentucky',
                            'LA'=>'Louisiana',
                            'ME'=>'Maine',
                            'MD'=>'Maryland',
                            'MA'=>'Massachusetts',
                            'MI'=>'Michigan',
                            'MN'=>'Minnesota',
                            'MS'=>'Mississippi',
                            'MO'=>'Missouri',
                            'MT'=>'Montana',
                            'NE'=>'Nebraska',
                            'NV'=>'Nevada',
                            'NH'=>'New Hampshire',
                            'NJ'=>'New Jersey',
                            'NM'=>'New Mexico',
                            'NY'=>'New York',
                            'NC'=>'North Carolina',
                            'ND'=>'North Dakota',
                            'OH'=>'Ohio',
                            'OK'=>'Oklahoma',
                            'OR'=>'Oregon',
                            'PA'=>'Pennsylvania',
                            'RI'=>'Rhode Island',
                            'SC'=>'South Carolina',
                            'SD'=>'South Dakota',
                            'TN'=>'Tennessee',
                            'TX'=>'Texas',
                            'UT'=>'Utah',
                            'VT'=>'Vermont',
                            'VA'=>'Virginia',
                            'WA'=>'Washington',
                            'WV'=>'West Virginia',
                            'WI'=>'Wisconsin',
                            'WY'=>'Wyoming']) }}

                        {{ Form::label('phone', 'Phone Number' ) }}
                        {{ Form::text('phone', '###-###-####' ) }}

                        {{ Form::submit('Submit') }}
                  {{  Form::close()  }}
                </div>
            </div>
        </div>
    </body>
</html>
