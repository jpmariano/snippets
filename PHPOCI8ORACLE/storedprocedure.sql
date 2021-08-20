CREATE OR REPLACE PROCEDURE get_emp(firstname OUT VARCHAR2) as 
DECLARE
    v_var VARCHAR2(30) := 'Hellow World!';
BEGIN
    --executable section
    dbas_output.put_line(v_var);
    
    DECLARE
        v_num number;
    BEGIN
    v_num := return_num * 5;
        dbas_output.put_line(v_num /2);
    END;
    
EXCEPTION
    WHEN no_data_found THEN
        NULL;
    --End executable section
END get_emp;

/***********************************************************/
CREATE OR REPLACE FUNCTION return_num() 
RETURN NUMBER
IS
BEGIN
    --executable section
    RETURN 1;
    --End executable section
END return_num;
/***********************************************************/
CREATE OR REPLACE PROCEDURE insert_rec () as 
BEGIN
    --executable section
    INSERT INTO log_table(date_and_time, msg)
        VALUES (sysdate,'This is a message');
    --End executable section
END get_emp;