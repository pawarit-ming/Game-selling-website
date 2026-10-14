drop database if exists Market;

create database if not exists Market;

use Market;

create table if not exists admin_(
ad_id			int				not null	primary key,
ad_name			varchar(255)	not null,
email			varchar(255)	not null,
pass_word		varchar(255)	not null
);

create table if not exists product(
item_id			int				not null	primary key,
item_name		varchar(255) 	not null,
price			int				not null,
yr				int,
tag				varchar(255),
image			varchar(255)			
);

insert into admin_ values
(001,"AdMing","admin1@example.com","demo_password_change_me"),
(002,"AdNemo","admin2@example.com","demo_password_change_me"),
(003,"AdPeepo","admin3@example.com","demo_password_change_me");

insert into product values
(1,'God of War',1290,2018,'Action,Open World,Violent','https://drive.google.com/uc?id=1EVF9h9Uae81Wg3j0Al2LoAFPQhbJHY7a'),
(2,'NBA 2K24',1490,2023,'Sport','https://drive.google.com/uc?id=1cYMHva5V_IcM2xxPzs-OanrbKhWLpFzz'),
(3,'Stardew Valley',315,2016,'Farming','https://drive.google.com/uc?id=15vsvdtS1LooWJ7Bhz-qC5tVGsPYUylNL'),
(4,'Elden Ring',1790,2023,'Action,Open World,Violent','https://drive.google.com/uc?id=1SGkhfH6JiyCycnscS6kUcFEdybwqiVkN'),
(5,'Dokapon Kingdom :Connect',899,2023,'Action','https://drive.google.com/uc?id=1fowpl2m9r2OhchHxqAhqgjBDnI1kfVJT'),
(6,'Fifa 24',1290,2023,'Sport','https://drive.google.com/uc?id=1DjCyxI_jQVpaWP1-9aSjOa1WYhtQF_Df'),
(7,'Grand Theft Auto V',699,2013,'Action,Open World,Violent','https://drive.google.com/uc?id=1od22wBE8ND3gcIlUexImS87A2FBMEHy5'),
(8,'Resident Evil 4: Remake',1929,2023,'Action,Open World,Violent','https://drive.google.com/uc?id=1bHUatwAqg7UbjboUcVYCv_3Id6ky4nsX'),
(9,'Sekiro: Shadows Die Twice',1790,2019,'Action,Open World,Violent','https://drive.google.com/uc?id=1eNJImrlVCcahW6gob9uxc5iX27eKfsTp'),
(10,"Marvel's Spider-Man Remastered",1690,2023,'Action,Open World','https://drive.google.com/uc?id=1UgMYfejwpYQ5oyNeSKdnqWKemjscE7E7');

SELECT * FROM admin_;

SELECT * FROM product;
