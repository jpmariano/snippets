/*
PL/SQL Parts
- Header (Optional) - It contains the program name, the program's owner, and the parameter specification.
- Declaration (Optional) - To DECLARE local variables, cursors, and local subprograms 
- Execution (Required) - procedural section of the program and comprises the main program body and an exception section
                       - The BEGIN and END keywords indicate the beginning and end of the program body. 
                       - It must contain at least one executable statement. 
                       - During block execution, these statements are parsed and sequentially executed by the PL/SQL engine.
- Exception (Optional) - EXCEPTION handling statements


PL/SQL Classification
- Anonymous PL/SQL block - simplest PL/SQL program that has no name, but has its DECLARE-BEGIN-END skeleton. 
                         - current execution as standalone block or embedded locally within a PL/SQL program unit.
                         - cannot be stored in the database.
- Named - stored persistently in the database as a schema object. 
        - It can be invoked either from a database session or by another program unit. 
        - A named PL/SQL program can be a function, procedure, trigger, or package.
- Nested - A block within another PL/SQL block forms a nested block structure.
*/
SET SERVEROUTPUT ON;

/*Start the PL/SQL block*/
DECLARE
     
    /*Declare a local variable and initialize with a default value*/
    -- <Varname> <datatype>(<size>):= <default initital value>;
    -- Global variables 
    L_STR VARCHAR2(50) := 'I am new to PL/SQL';
    part_number       NUMBER(6);     -- SQL data type
    part_name         VARCHAR2(20);  -- SQL data type
    in_stock          BOOLEAN;       -- PL/SQL-only data type
    part_price        NUMBER(6,2);   -- SQL data type
    part_description  VARCHAR2(50);  -- SQL data type
    counter           INTEGER;  -- initial value is NULL by 
    num1              INTEGER; 
    num2              REAL; 
    num3              DOUBLE PRECISION;
    greetings varchar2(20) DEFAULT 'Have a Good Day';

    

    /*BOOLEAN*/

    /*CONSTATNT*/
    -- <Varname> CONSTANT <datatype>(<size>) := <default initital value>;
    pi CONSTANT double precision := 3.1415; 
    /*RECORD*/

    /*TABLE*/
    -- <Varname> <tablename.fieldname>%type;

    /*USER DEFINED TYPES*/
    SUBTYPE name IS char(20); 
    SUBTYPE message IS varchar2(100); 
    salutation name; 
    greetings message; 


BEGIN
    -- Local variables 
    DECLARE 
    num1              INTEGER; 
    num2              REAL; 
    num3              DOUBLE PRECISION;
/*Print the result*/
    DBMS_OUTPUT.PUT_LINE('I Said - '||L_STR);
    salutation := 'Reader '; 
    greetings := 'Welcome to the World of PL/SQL'; 
    dbms_output.put_line('Hello ' || salutation || greetings); 
EXCEPTION 
   --<exception handling> 
END;
/
-- singleline comment

/*
Scalar datatype





/*
Cursors - is a private memory area, temporarily allocated in the session's User Global Area (UGA), that is used for processing SQL statements
    - Implicit Cursors - created by Oracle
    - Explicit Cursors - created or controlled by user under DECLARE sectionm along with a SELECT query

Cursor execution cycle
    - Open
        - Open Cursor
        - Parse SQL
        - Bind SQL
        - Execute query
    - Fetch
        - fetch result
    - Close 
        - close cursor

Cursor attributes
    %ROWCOUNT: Number of rows fetched until the last fetch or impacted by the last DML operation. Applicable for SELECT as well as DML statements.

    %ISOPEN: Boolean TRUE if the cursor is still open, if not FALSE. For an implicit cursor, this attribute is always FALSE.

    %FOUND: Boolean TRUE, if the fetch operation switches and points to a record; if not, FALSE.

    %NOTFOUND: Boolean FALSE when the cursor pointer switches but does not point to a record in the result set.

*/
/*
CREATE [OR REPLACE] PROCEDURE procedure_name 
[(parameter_name [IN | OUT | IN OUT] type [, ...])] 
{IS | AS} 
BEGIN 
  < procedure_body > 
END procedure_name; 
*/