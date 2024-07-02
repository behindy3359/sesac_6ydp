create table member(
	id int primary key auto_increment,
    userid varchar(20) not null,
    username varchar(20) not null,
    userpassword varchar(20),
    singuptime datetime not null
);

insert into member value(null, 'wizardH', 'harryporter', '12345678', '2024-06-20 12:11:00');
insert into member value(null, '가나', '가나', 'rksk', '2024-06-20 12:11:00');

select * from member;

-- drop table appointment;
-- drop table author;
-- drop table board;
-- drop table departments;
-- drop table diagnosis;
-- drop table diagnosis_record;
-- drop table books;
-- drop table orders;
-- drop table user;
-- drop table patient;
-- drop table employees;
-- drop table doctor;
-- drop table departments;
-- drop table books;
-- drop table author;

drop table member;
