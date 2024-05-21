commands:
$ docker compose up -d
$ docker compose down

 $databases['default']['default'] = [
       'database' => 'docker_database',
       'username' => '<username>',
       'password' => '<password>',
       'host' => '<docker_container_name>',
       'port' => '<docker_internal_port>',
       'driver' => 'mysql',
       'prefix' => '',
       'collation' => 'utf8mb4_general_ci',
    ];
