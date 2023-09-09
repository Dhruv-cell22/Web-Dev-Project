create database Techmo default character set utf8mb4;
use Techmo;
create table complain (brand varchar(255), model varchar(255), warranty varchar(255), year int, descr varchar (500), cname varchar(30), cphone bigint, caddress varchar(100), cmail varchar(50));
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';