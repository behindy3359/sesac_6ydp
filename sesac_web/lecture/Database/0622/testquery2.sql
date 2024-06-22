-- # SQL 미션

-- > 아래 조건을 만족하는 SQL문을 작성하세요.

-- ## 테이블 조건

-- 다음은 각 테이블별 조건입니다.

-- - `환자(Patient)` 테이블

--   - 환자번호(patient_id): PRIMARY KEY, INT 타입, AUTO_INCREMENT
--   - 이름(name): VARCHAR(50), NOT NULL
--   - 생년월일(birth_date): DATE, NOT NULL

-- - `의사(Doctor)` 테이블

--   - 의사번호(doctor_id): PRIMARY KEY, INT 타입, AUTO_INCREMENT
--   - 이름(name): VARCHAR(50), NOT NULL
--   - 전공(specialty): VARCHAR(100), NOT NULL

-- - `진료(Appointment)` 테이블

--   - 진료번호(appointment_id): PRIMARY KEY, INT 타입, AUTO_INCREMENT
--   - 환자번호(patient_id): FOREIGN KEY, INT 타입, NOT NULL
--   - 의사번호(doctor_id): FOREIGN KEY, INT 타입, NOT NULL
--   - 진료일자(appointment_date): DATE, NOT NULL

-- - `진단(Diagnosis)` 테이블

--   - 진단코드(diagnosis_code): PRIMARY KEY, INT 타입, AUTO_INCREMENT
--   - 진단명(diagnosis_name): VARCHAR(100), NOT NULL
--   - 설명(description): TEXT

-- - `진단내역(Diagnosis_Record)` 테이블

--   - 진료번호(appointment_id): FOREIGN KEY, INT 타입, NOT NULL
--   - 진단코드(diagnosis_code): FOREIGN KEY, INT 타입, NOT NULL
--   - PRIMARY KEY는 (appointment_id, diagnosis_code) 조합

--     - 힌트. `PRIMARY KEY (appointment_id, diagnosis_code)` 구문 사용시 복합키(여러 개의 키 조합)로 지정 가능

-- > (참고) `mission-erd.png` 이미지로 테이블 구조 확인 가능

-- # 데이터 삽입 조건

-- 이미지를 참고하여 동일하게 데이터를 삽입해주세요.

-- > (참고) `insert-result-ex.png` 이미지로 데이터 삽입 예시 확인 가능


-- 테이블 생성 
create table patient(
	patient_id int auto_increment primary key,
    patient_name varchar(50) not null,
    patient_birth date not null
);
create table doctor(
	doctor_id int auto_increment primary key,
    doctor_name varchar(50) not null,
    doctor_speciality varchar(50) not null
);
create table appointment(
	appointment_id int auto_increment primary key,
	patient_id int not null,
    doctor_id int not null,
    appointment_date date not null,
	foreign key (patient_id) references patient(patient_id),
    foreign key (doctor_id) references doctor(doctor_id)
);
create table diagnosis(
	diagnosis_code int primary key auto_increment,
    diagnosis_name varchar(50) not null,
    description text
);
create table diagnosis_record(
	appointment_id int not null,
    diagnosis_code int not null,
	foreign key (appointment_id) references appointment(appointment_id),
	foreign key (diagnosis_code) references diagnosis(diagnosis_code),
	primary key(appointment_id , diagnosis_code)
);

drop table diagnosis_record;
drop table diagnosis;
drop table appointment;

insert into Patient values
	(null,'김철수','1990-05-15'),
	(null,'박영희','1985-11-22'),
    (null,'이지원','1998-03-08'),
    (null,'최민기','1977-09-25'),
    (null,'한지영','1992-07-01');
insert into Doctor values
	(null,'김의사','내과'),
	(null,'박의사','외과'),
	(null,'이의사','소아과'),
	(null,'최의사','정형외과'),
	(null,'한의사','피부과');
insert into diagnosis values
	(null,'꾀병',' 집에 가십쇼 선생님'),
	(null,'조금 아픈 병','조금 아픔'),
	(null,'약간 아픈 병','약간 아픔'),
	(null,'매우 아픈 병','매우 아픔'),
	(null,'진짜 아픈 병','진짜 아픔');
insert into appointment values
	(null,'1','5','2024-06-10'),
    (null,'2','4','2024-06-11'),
    (null,'3','3','2024-06-12'),
    (null,'4','2','2024-06-13'),
    (null,'5','1','2024-06-14');
insert into diagnosis_record values
	('1','1'),
	('2','2'),
	('3','3'),
	('4','4'),
	('5','5');

select * from patient;
select * from doctor;
select * from appointment;
select * from diagnosis;
select * from diagnosis_record;    
    
-- # 데이터 조회 조건

-- 아래 조건을 만족하는 DML을 작성하세요.

-- 1. 모든 환자의 이름과 생년월일을 조회하시오.
select patient_name name, patient_birth birth from patient;
-- 2. 전공이 '내과'인 의사의 이름을 조회하시오.
select doctor_name name from doctor where doctor_speciality = '내과';
-- 3. 2024년 6월 13일에 진료받은 환자의 이름과 의사 이름을 조회하시오.
select p.patient_name, d.doctor_name
	from appointment a
	join patient p on a.patient_id = p.patient_id
	join doctor d on a.doctor_id = d.doctor_id
	where a.appointment_date = '2024-06-13';
-- 4. 진단명이 '꾀병'인 진단내역의 환자 이름과 진료일자를 조회하시오.
select p.patient_name , a.appointment_date
	 from appointment a
     join patient p on a.patient_id = p.patient_id
     join diagnosis_record dr on a.appointment_id = dr.appointment_id
     join diagnosis d on dr.diagnosis_code = d.diagnosis_code
     where d.diagnosis_name='꾀병';
-- 5. 각 의사가 진료한 환자 수를 조회하시오.
select  d.doctor_name, count( * ) 진료_환자_수
	from appointment a 
	join doctor d on d.doctor_id = a.doctor_id
    group by doctor_name;
-- 6. 가장 최근에 진료받은 환자의 이름과 진료일자를 조회하시오.
select p.patient_name, a.appointment_date
	from appointment a
	join patient p on p.patient_id = a.patient_id
	order by a.appointment_date desc limit 1;