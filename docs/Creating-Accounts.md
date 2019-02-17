# Verifying Your Installation

Your initial installation of AzerothCore will come with 10 default test accounts.  These accounts are named test1 through test10. The default password for all of these accounts is `a` (literally the letter). These accounts can be used to test your worldserver functionality without needing to create an account immediately.

> If you choose to leave your test accounts on your server then it is recommended to log into each of them and change the password. You can create a character on the account, enter the game and use the `.account password` command to modify it.

# Creating Your First Account

Your first account will need to be created from the worldserver console.  After you start the worldserver it will function as an interactive console.  In your worldserver console you can use the following command to create a new user:

`account create <username> <password>`

Note that any gm commands issued from the worldconsole do not require a . in front of them as all inputs are considered server commands.  This will create a basic account with no admin rights. Here is an example of creating an account with the name acoreuser and abc123 as the password:

`account create acoreuser abc123`

# Modifying Account GM Levels

From the worldserver console you can use the account set gmlevel command to modify the gm rights for user.  The available levels range from 0 (no access) to 3 (most access).  The following command is used to set gm levels for an account:

`account set gmlevel <accountname> <gmlevel> <realmid>`

The realm ID indicates what realm their account will have GM access to.  If you only have one realm or if you want the account to have blanket gm privleges to all realms just use -1.  Otherwise you will use the realm id in your auth.realmlist table.  To give our acoreuser full gm rights on all realms we'd run the following command:

`account set gmlevel acoreuser 3 -1`

# Higher Level Access

It is possible to give a user level 4 GM access which will give them the ability to do account management in-game.  This is not recommended as they will have access not only to create, but also delete accounts.  If you want to provide them this access you can either use your preferred MySQL application to modify the needed tables or do it from the mysql command line.  If doing it from the MySQL console just use the following command:

`UPDATE auth.account_access AS access
INNER JOIN auth.account AS account ON access.id = account.id
SET gmlevel = '4' WHERE name = '<accountName>';`

In this case we are assuming you used the default database name of auth.  If you named your database differently make sure to change it in the preceding code.  If we wanted to change our acoreuser to a GM level of 4 we would execute the following sql command:

`UPDATE auth.account_access AS access
INNER JOIN auth.account AS account ON access.id = account.id
SET gmlevel = '4' WHERE name = 'acoreuser';`