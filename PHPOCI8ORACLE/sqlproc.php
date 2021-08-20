<?php
//File: sqlproc.php
if (!$conn = oci_connect('hr', 'hr', '//localhost/orcl')) { //oci_connect('username', 'password', '//localhost/orcl'))
    $err = oci_error(); //Returns the last error found
    trigger_error('Could not establish a connection: ' . $err['message'], E_USER_ERROR); //bool trigger_error ( string $error_msg [, int $error_type = E_USER_NOTICE ] )
}
$query = 'SELECT EMPLOYEE_ID, FIRST_NAME, LAST_NAME, JOB_ID, PHP OCI8 extensionSQL statements, processingSALARY 
    FROM EMPLOYEES 
    WHERE department_id = :deptid';

$stmt = oci_parse($conn, $query); //Step 2 oci_parse returns the statement identifier 
$deptno = '60';
oci_bind_by_name($stmt, ':deptid', $deptno); //Step 2 Optional:  Binds a PHP variable to an Oracle placeholder; associate the $deptno PHP script variable with the deptid:

//Step 3 Optional: SQLprocessing statements, OCI8 used  oci_define_by_name(Connection, Columnname, PhpVar);
oci_define_by_name($stmt, "EMPLOYEE_ID", $empno);
oci_define_by_name($stmt, "FIRST_NAME", $firstname);
oci_define_by_name($stmt, "LAST_NAME", $lastname);
oci_define_by_name($stmt, "JOB_ID", $jobid);
oci_define_by_name($stmt, "SALARY", $salary);

//Step 4 Optional: set the number of records to be prefetched after oci_execute
if (!oci_set_prefetch($stmt, 5)) {
    trigger_error('Failed to set the number of rows to be
    prefetched', E_USER_WARNING);
}

//Step 5 Required: Execute the parsed statement. OCI_DEFAULT allows you to create a transaction that can be committed later by explicitly calling oci_commit or rolled back by oci_rollback.
if (!oci_execute($stmt, OCI_DEFAULT)) {
    $err = oci_error($stmt); //Step 6 Optional: retrieve the error
    trigger_error('Query failed: ' . $err['message'], E_USER_ERROR); ////bool trigger_error ( string $error_msg [, int $error_type = E_USER_NOTICE ] )
}
print '<h3>'.'All employees working in Department '.$deptno.'</h3>';
print '<table border="1">';
print '<th>EMP_ID</th>
<th>FIRST NAME</th>
<th>LAST NAME</th>
<th>JOB_ID</th>
<th>SALARY</th>';
//Step 7 Required:  oci_fetch: fetch the retrieved data into the internal result buffer 
while (oci_fetch($stmt)) {
print '<tr>';
print '<td>'.$empno.'</td>';
print '<td>'.$firstname.'</td>';
print '<td>'.$lastname.'</td>';
print '<td>'.$jobid.'</td>';
print '<td>'.$salary.'</td>';
print '</tr>';
}
print '</table>';
//SQLprocessing statements, OCI8 used
?>

