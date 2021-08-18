<!DOCTYPE html>
<html>
<head>
    <title>SimpleTODO</title>
     
    <link rel="stylesheet" href="css/reset.css" type="text/css" />
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
     
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/themes/smoothness/jquery-ui.css" />
	<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
     
    <style>
    body {
        padding-top: 40px;
    }
    #main {
        margin-top: 80px;
        text-align: center;
    }
    </style>
</head>
<body>
    <div class="topbar">
        <div class="fill">
            <div class="container">
                <a class="brand" href="index.php">SimpleTODO</a>
            </div>
        </div>
    </div>
    <div id="main" class="container">
        <form class="form-stacked" method="POST" action="login.php">
            <div class="row">
                <div class="span5 offset5">
                    <label for="login_username">Username:</label>
                    <input type="text" id="login_username" name="login_username" placeholder="username" />
                 
                    <label for="login_password">Password:</label>
                    <input type="password" id="login_password" name="login_password" placeholder="password" />
                     
                </div>
            </div>
            <div class="actions">
                <button type="submit" name="login_submit" class="btn primary large">Login or Register</button>
            </div>
        </form>
    </div>
</body>
</html>