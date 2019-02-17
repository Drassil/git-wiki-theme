## Introduction

Azerothcore has 4 ways of interfacing with the world server.

- In Game
- The Console
- Telnet (RA)
- HTTP (SOAP)

The in game menus and the console are pretty self explanatory, however you are not always able to administer the server locally nor do the first two options provide many opportunities for automation. If you want to provide a way to access your server remotely, or let software manage it then you have two options.

## Choosing the Correct Protocol

### Remote Access

Remote access is basically a telnet connection and has all of the downsides a telnet connection brings. These would be:
- Data is sent over cleartext which can be intercepted easily.
- You use distinct sessions, meaning you open and close a connection each time.
- It can be difficult to parse the return since it just returns what you would see in the CLI

However, it has upsides as well, namely:
- It is simple with little overhead.
- It is well established and documented.
- Platform independent.

Remote access is good for running on a local server, and accessing it securely over SSH to send it commands. Its simplicity is its strength. On top of that it is built in to most machines without any configuration needed.

### SOAP

It stands for simple object access protocol and is a format for sharing structured data between machines. It is a common xml analogue to ReST and json, and lets two pieces of software interact with each other despite running on different code bases, languages, and operating systems. Lets get on to the weaknesses.

- No default encoding meaning that you can get away with almost anything. Some people may see it as a bonus but it can be confusing.
- Little security

And its strengths.

- XML is a well established format supported in most programming languages.
- Uses standard HTTP

In a more simplified format: SOAP for websites, telnet for command line.

## Using the Protocol of Choice

### Setup

1. Both protocols must be enabled via the [worldserver config files](https://github.com/azerothcore/azerothcore-wotlk/blob/master/src/worldserver/worldserver.conf.dist#L2756). 
2. When they are enabled, in order to authorize access to the database, you need to find the `account_access` table in the auth database and make sure the realmID of your user is -1 (meaning all realms).
3. When that is done you are set up to use telnet and SOAP

### Access
#### Telnet

Due to it's ubiquity telnet is easy to use from almost anywhere. 

1. open up a terminal session (or PuTTY) and type in `telnet {{ ip }} {{port}}`
2. Enter your username and password.

#### Soap

Soap works using POST requests on the HTTP protocol. If you are using php for your server, these is a module that will create and send SOAPs for you, namely:

    $conn = new SoapClient(NULL, array(
        'location' => "http://{{ ip }}:{{ port }}/",
        'uri'      => 'urn:TC',
        'style'    => SOAP_RPC,
        'login'    => '{{ username }}',
        'password' => '{{ password }}'
    ));
    echo $conn->executeCommand(new SoapParam('server info', 'command'));

However if you are not using php, it's a little more complicated. Or, it was before this documentation showed up! To create a valid soap request you need to include the appropriate xml namespaces. These were taken directly from the ones the server itself uses. You can see the SOAP itself is taken from the SOAP-ENV schema. Under the ns1 namespace are the commands we need to interact with the server. All commands go in the body of the SOAP. To send a command, you call the function executeCommand in the ns1 namespace and send the parameter command to the server. In this case our command gets the server status.

	<SOAP-ENV:Envelope  
		xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" 
		xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" 
		xmlns:xsi="http://www.w3.org/1999/XMLSchema-instance" 
		xmlns:xsd="http://www.w3.org/1999/XMLSchema" 
		xmlns:ns1="urn:TC">
		<SOAP-ENV:Body>
	 		<ns1:executeCommand>
	 			<command>server status</command>
	 		</ns1:executeCommand>
		</SOAP-ENV:Body>
	</SOAP-ENV:Envelope>

The response to this command is what you would expect from the terminal.
