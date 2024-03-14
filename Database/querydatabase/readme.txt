Connecting with PDO
- Datas Source Name: http://php.net/manual/en/pdo.drivers.php
-- 'mysql:host=localhost;dbname=phpexport'
-- 'mysql:host=localhost;port=3307;dbname=phpexport'
-- 'sqlite:/path/to/phpexport.db'
-- 'sqlsrv:Server=localhost;Database=phpexport'
- Prefix followed by colon identifies PDO driver
- Name/Value Pairs separated by semicolons


Autoloading Classes
- Class definitions need to be included
- Autoloader finds classes automatically
- PSR-4 Autoloader
- PHP Framework Interop Group (www.php-fig.org)
- Classes and folders must follow naming convention


Using the Autoloader
require_once 'src/FoundationPHP/Psr4Autoloader.php';
$loader = new FoundationPHP/Psr4Autoloader();
$loader->register();
$loader->addNamespace('Foundationphp', 'src/Foundationphp');

$loader->addNamespace('Fusonic', 'src'/Fusonic');


Importing Namespaced Classes
$xml = Foundationphp\Exporter\Xml($result);
use Foundationphp\Exporter\Xml;


$xml = new Xml($result);




