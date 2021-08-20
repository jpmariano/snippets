<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="token" content="{{ csrf_token() }}">

        <title>Laravel</title>

        <!-- Fonts -->
        <!-- //https://laravel.com/docs/5.3/blade -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link href="{{asset('css/style.css')}} " rel="stylesheet" type="text/css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
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
        <script>
        $(document).ready(function() {
            $("button.remove").on('click', function(e){
                e.preventDefault();
                if ( ! confirm('Are you sure?')) {
                    return false;
                }
                var action = $(this).data("action");
                var parent = $(this).parent();
                $.ajax({
                    type: 'delete',
                    url: action,
                    data: '_token='+token,
                    beforeSend: function() {
                        parent.closest("tr").animate({'backgroundColor':'#fb6c6c'},300);
                    },
                    error: function(msg) {
                        alert(msg.responseJSON[0]);
                    },
                    success: function() {
                        parent.slideUp(300,function() {
                            parent.closest("tr").remove();
                        });
                    }
                });
            })
        });
        </script>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
           

            <div class="content">
                <div class="title m-b-md">
                    Laravel 
                </div>

                <div class="forms">
                 <?php //echo 
                    //$memberInfo 
                    //$names
                 ?>
                </div>
               <hr>
                    <ul>
                    <?php 
                        foreach ($names as &$value) {
                             echo "
                             <li>
                             <span>$value->id</span>
                             <span>$value->name</span>
                             <span>$value->email</span>
                             <span>$value->street</span>
                             <span>$value->city</span>
                             <span>$value->state</span>
                             <span>$value->phone</span>
                             <span>$value->created_at</span>
                             <span>$value->updated_at</span>
                             <span>
                             </span>
                             </li>
                             
                             ";
                        }
                    ?>
                    
                    </ul>
                </hr>
                
                <tbody>
                    @foreach($names as $value)
                    <tr>
                        <td>{{ $value->name }}</td>
                        <td>  
                        <button class="btn btn-circle btn-danger remove" data-action="/listofusers/{{ $value->id }}">
                        <i class="fa fa-trash-o"></i>
                        </button>
                        </td>
            
                    </tr>
                @endforeach
                </tbody>
            </div>
        </div>
    </body>
</html>
