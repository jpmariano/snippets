<?php

function getEmployees($deptno) {
    if(!$rsConnection = oci_connect('hr', 'hr', '//localhost/orcl')) {
        $err = oci_error();
        trigger_error('Could not establish a connection: ' . $err['message'], E_USER_ERROR);
    };
    $strSQL = "SELECT * FROM employees WHERE department_id =:deptid";
    $rsStatement = oci_parse($rsConnection,$strSQL);
    oci_bind_by_name($rsStatement, ":deptid", $deptno, 4);
    if (!oci_execute($rsStatement)) {
        $err = oci_error($stmt);
        trigger_error('Query failed: ' .
        $err['message'], E_USER_WARNING);
        return false;
    }
    //oci_fetch_all fetches all the retrieved rows into the employees two-dimensional array
    $nrows = oci_fetch_all($rsStatement, $employees);

    return array ($nrows, $employees);
}

$deptno = 60;
if(list($nrows, $employess) = getEmployees($deptno)){
    print '<h3>'.'All employees working in Department '.$deptno.'</h3>';
    if ($nrows > 0) {
        print "<table border=1>";
        print "<tr>n";
        while (list($key, $value) = each($employees)) {
            print "<th>$key</th>n";
        }
        print "</tr>n";
        print "</tr>n";
        for ($i = 0; $i < $nrows; $i++) {
            print "<tr>n";
            foreach ($employees as $emp) {
                print "<td>$emp[$i]</td>n";
            }
            print "</tr>n";
        }
        // results fetching, OCI8 usedall rows, fetchingprint 
        "</table>n";
    } else {
    echo "No employees found<br />n";
    }
}
?>

