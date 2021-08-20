<?php
//File: bindvars.php
if(!$dbConn = oci_connect('hr', 'hr', '//localhost/orcl')) {
    $err = oci_error();
    trigger_error('Could not establish a connection: ' . $err['message'], E_USER_ERROR);
};
$depts = array(array("deptno" => 330, "deptname" => 'Research'), array("deptno" => 340, "deptname" => 'DB Development'));
$query = 'INSERT INTO departments (department_id, department_name) VALUES(:dept_id, :dept_name)';

$stmt = oci_parse($dbConn, $query);

foreach ($depts as $dept) {
    //Using bind variables in this example allows you to parse the statement only once and then execute it in a loop several times, each time rebinding the same variables but with different values.
    oci_bind_by_name($stmt, ':dept_id', $dept['deptno'], 4); // 4 the maximum length for the bind variable value(deptno) - (basically the size of field in database table); In SQL, DESCRIBE departments - to see the tables in details
    oci_bind_by_name($stmt, ':dept_name', $dept['deptname'], 30);

    //oci_execute
        //oci_execute  query results are held in memory and not available to you immediately.To make use of this data, you must fetch 
        //returns a true on success or false on failures
    if (!oci_execute($stmt)){ //since theres no OCI_DEFAULT mode explicity inserted, OCI_COMMIT_ON_SUCCESS is called which commits the statement automatically; OCI_DEFAULT only creates transaction and no commit
        $err = oci_error($stmt);
        //Error Handling
        trigger_error('Insertion failed: ' . $err['message'], E_USER_WARNING);
    } else {
        //OCI_COMMIT_ON_SUCCESS mode, which means that the statement is committed automatically
        print 'Row inserted! <br />';
    }
}
?>