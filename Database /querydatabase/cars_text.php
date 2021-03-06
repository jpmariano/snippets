<?php
require_once 'includes/cars_mysqli.php';
if (isset($_POST['download'])) {
	header('Content-Type: text/plain');
	header('Content-Disposition: attachment;filename=cars.txt');
	//Disable Cache
	header('Cache-Control: no-cache, no-store, must-revalidate');
	header('Pragma: no-cache');
	header('Expires: 0');
	//Streams it to the browser
	$output = fopen('php://output', 'w');
	while ($row = getRow($result)) {
		foreach ($row as $key => $value) {
			fwrite($output, ucfirst($key) . ": $value\r\n");
		}
		fwrite($output, "\r\n");
	}
	fclose($output);
	exit;
}
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Used Cars</title>
<link href="styles/styles.css" rel="stylesheet" type="text/css">
</head>

<body>
<div id="wrapper">
<?php
if (isset($error)) {
    echo "<p>$error</p>";
}
?>
    <h1>Used Cars for Sale</h1>
    <?php while ($row = getRow($result)) { ?>
    <h2><?php echo $row['make']; ?></h2>
    <ul>
        <li>Price: $<?php echo number_format($row['price'], 2); ?></li>
        <li>Year: <?php echo $row['yearmade']; ?></li>
        <li>Mileage: <?php echo number_format($row['mileage'], 0); ?></li>
        <li>Transmission: <?php echo $row['transmission']; ?></li>
    </ul>
    <p><?php echo $row['description']; ?></p>
    <hr>
    <?php } ?>
    <form method="post">
        <fieldset>
            <legend>Download Results</legend>
            <p>
                <input type="submit" name="download" id="download" value="Download Text File">
            </p>
        </fieldset>
    </form>
</div>
</body>
</html>