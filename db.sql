create table employee(
    integer id primary key,
    varchar[30] name
);

insert into employee (id, name) values('1','vidit');

update employee name='vidit mathur' where id='1';

delete from employee where id='1';


