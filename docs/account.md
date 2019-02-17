[[Database Structure|Database Structure]] > [[Auth-Database|Auth-Database]] > [[account|account]]

Column | Type | Description
--- | --- | ---
Id | int(10) unsigned | 
Username | varchar(32) | 
Sha_pass_hash | varchar(40) | 
Sessionkey | varchar(80) | 
V | varchar(64) | 
S | varchar(64) | 
Email | varchar(254) | 
Joindate | timestamp | 
Last_ip | varchar(15) | 
Failed_logins | int(10) unsigned | 
Locked | tinyint(3) unsigned | 
Last_login | timestamp |
totaltime | int(10) unsigned [0] | total time played on all characters
Online | tinyint(3) unsigned | 
Expansion | tinyint(3) unsigned | 
Mutetime | bigint(20) | 
Mutereason | varchar(255) | 
Muteby | varchar(50) | 
Locale | tinyint(3) unsigned | 
Os | varchar(3) | 
Recruiter | int(10) unsigned | 
