[[Database Structure|Database Structure]] > [[Character-Database|Character-Database]] > [[mail|mail]]

Column | Type | Description
--- | --- | ---
Id | int(10) unsigned | 
MessageType | tinyint(3) unsigned | 
Stationery | tinyint(3) | 
MailTemplateId | smallint(5) unsigned | 
Sender | int(10) unsigned | 
Receiver | int(10) unsigned | 
Subject | longtext | 
Body | longtext | 
Has_items | tinyint(3) unsigned | 
Expire_time | int(10) unsigned | 
Deliver_time | int(10) unsigned | 
Money | int(10) unsigned | 
Cod | int(10) unsigned | 
Checked | tinyint(3) unsigned | 
