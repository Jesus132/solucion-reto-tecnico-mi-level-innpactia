CREATE DATABASE innpactia;

Create table users(
id bigint(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email varchar(255) not null,
password varchar(255) not null,
);ALTER TABLE `innpactia`.`users`
ADD COLUMN `updatedAt` TIMESTAMP COMMENT '' AFTER `createdAt`;ALTER TABLE `innpactia`.`users`
ADD COLUMN `updatedAt` TIMESTAMP COMMENT '' AFTER `createdAt`;

Create table clients(
id bigint(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
name varchar(255) not null,
phone varchar(255) not null,
);ALTER TABLE `innpactia`.`clients`
ADD COLUMN `updatedAt` TIMESTAMP COMMENT '' AFTER `createdAt`;ALTER TABLE `innpactia`.`clients`
ADD COLUMN `updatedAt` TIMESTAMP COMMENT '' AFTER `createdAt`;

Create table storages(
id bigint(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_client bigint(20) UNSIGNED,
model varchar(255) not null,
observation varchar(255) not null,
CONSTRAINT fk_clients FOREIGN KEY (id_client) REFERENCES clients (id)
);ALTER TABLE `innpactia`.`storages`
ADD COLUMN `updatedAt` TIMESTAMP COMMENT '' AFTER `createdAt`;ALTER TABLE `innpactia`.`storages`
ADD COLUMN `updatedAt` TIMESTAMP COMMENT '' AFTER `createdAt`;

Create table settings(
id bigint(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_storages bigint(20) UNSIGNED,
date varchar(255) not null,
observation varchar(255) not null,
CONSTRAINT fk_storages FOREIGN KEY (id_storages) REFERENCES storages (id)
);ALTER TABLE `innpactia`.`settings`
ADD COLUMN `updatedAt` TIMESTAMP COMMENT '' AFTER `createdAt`;ALTER TABLE `innpactia`.`settings`
ADD COLUMN `updatedAt` TIMESTAMP COMMENT '' AFTER `createdAt`;
