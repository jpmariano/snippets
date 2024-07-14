//Oauth2 Password Credential
var form = new FormData();
form.append("grant_type", "password");
form.append("client_id", "<client_id>");
form.append("client_secret", "<client_secret>");
form.append("username", "<username>");
form.append("password", "<password>");

var settings = {
  "url": "http://auth.domainname.com/oauth/token",
  "method": "POST",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Returns
{
  "token_type": "Bearer",
  "expires_in": 3600,
  "access_token": "<username>",
  "refresh_token": "<refresh_token>"
}

/*********************/
//Oauth 2 Client Credentials
var form = new FormData();
form.append("grant_type", "client_credentials");
form.append("client_id", "<client_id>");
form.append("client_secret", "<client_secret>");

var settings = {
  "url": "http://auth.domainname.com/oauth/token",
  "method": "POST",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
//Returns
{
  "token_type": "Bearer",
  "expires_in": 3600,
  "access_token": "<username>"
}

/*********************/
/* Oauth 2 authorization_code
    #Step 1: https://auth.domainname.com/oauth/authorize?response_type=code&client_id={{client_id}}&scope=student
    #Step 2: https://www.clientapp.com/?code={{code}} */

var form = new FormData();
form.append("grant_type", "authorization_code");
form.append("client_id", "<client_id>");
form.append("client_secret", "<client_secret>");
form.append("code", "<code>");
var settings = {
  "url": "http://auth.domainname.com/oauth/token",
  "method": "POST",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Returns
{
  "token_type": "Bearer",
  "expires_in": 3600,
  "access_token": "<access_token>",
  "refresh_token": "<refresh_token>"
}
/*********************/
/* Oauth 2 refresh_token */

var form = new FormData();
form.append("grant_type", "refresh_token");
form.append("client_id", "<client_id>");
form.append("client_secret", "<client_secret>");
form.append("refresh_token", "<refresh_token>");

var settings = {
  "url": "http://auth.domainname.com/oauth/token",
  "method": "POST",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Returns
{
  "token_type": "Bearer",
  "expires_in": 3600,
  "access_token": "<access_token>",
  "refresh_token": "<refresh_token>"
}

/*********************/
/* Oauth 2 Open ID */

var settings = {
  "url": "http://auth.domainname.com/oauth/userinfo?_format=json",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Authorization": "Bearer access_token"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
//Returns
{
  "sub": "2",
  "name": "<name>",
  "preferred_username": "<username>",
  "email": "<email>",
  "email_verified": true,
  "profile": "http://example.com/user/2",
  "locale": "en",
  "zoneinfo": "America/New_York",
  "updated_at": 1718846340,
  "roles": [
      "authenticated",
      "content_editor"
  ]
}

/*********************/
/* rest_register_verify_email - Preffered way for Decoupled + /admin/people/registration-role if you want to add role + smtp module + mailsystem module   */

var settings = {
  "url": "https://auth.domainname.com/rest/create-account?_format=json",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "mail": "<email>",
    "pass": "<password>"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

// User Gets an Email Link

var settings = {
  "url": "https://auth.domainname.com/rest/verify-account?_format=json",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "name": "<email>",
    "temp_token": "<temp_token>"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

/*********************/
//Session Login
//Step 1: Get Session
var settings = {
  "url": "http://auth.domainname.com/session/token",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Returns X-CSRF-Token 
//Step 2: Login
var settings = {
  "url": "http://auth.domainname.com/user/login?_format=json",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json",
    "X-CSRF-Token": "<X-CSRF-Token>"
  },
  "data": JSON.stringify({
    "name": "<username>",
    "pass": "<password>"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Returns
{
  "current_user": {
      "uid": "1",
      "roles": [
          "authenticated",
          "administrator"
      ],
      "name": "<username>"
  },
  "csrf_token": "<csrf_token>",
  "logout_token": "<logout_token>"
}

//Logout user using session
var settings = {
  "url": "http://auth.domainname.com/user/logout?_format=json&token=<logout_token>",
  "method": "POST",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Get Content  using session This can be on auth.domainname.com or Resourceserver.com
var settings = {
  "url": "http://auth.domainname.com/node/1?_format=json",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Cookie": "<csrf_token>"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

/***************** */
//rest_password module

//Step 1: Get Temporary password from Email

var settings = {
  "url": "https://auth.domainname.com/user/lost-password?_format=json",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json",
    "Cookie": "<csrf_token_optional>"
  },
  "data": JSON.stringify({
    "mail": "<email>"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Returns Temporary Password in Email
//Step 2: Update the password
var settings = {
  "url": "https://auth.domainname.com/user/lost-password-reset?_format=json",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json",
    "Cookie": "<csrf_token_optional>"
  },
  "data": JSON.stringify({
    "name": "<username or email>",
    "temp_pass": "<temp_pass from email>",
    "new_pass": "<new_pass>"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

/*********** */
//Revoke Token from simple_oauth_companion
var settings = {
  "url": "https://auth.domainname.com/oauth/revoke",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "Cookie": "<csrf_token_optional>"
  },
  "data": {
    "access_token": "<access_token>"
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
});



