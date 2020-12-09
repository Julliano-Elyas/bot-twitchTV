var tmi = require('tmi.js');

var canal = "jullianoelyas"; //usuario pessoal

var options = {
	options: {
		debug: true
	},
	connection: {
		cluster: "aws",
		reconnect: true
	},
	identity: {     //Username e chave de acesso da conta que servirá como bot
		username: "BOT_jel",
		password: "oauth:i9rsx5jvmg8v9kiul4t7xsmv1wq4gb"
	},
	channels: [canal]
};


var client = new tmi.client(options);
client.connect();


client.on("chat", function(channel, user, message, self)
{
	var message = message.toLowerCase();

	switch(message)
	{
		case '!elo':
		{
			client.action(canal, "NoWays / SpockMata -> Prata I");

			break;
		}

		case '!Olá':
		{
			client.action(canal, user['display-name'] + ", seja bem vindo(a)!!");

			break;
		}


		case "!bot":
		{
			client.action(canal, "Olá Olá! Sou o Bot :)");

			break;
		}

		case "!commands":
		case "!comandos":
		case "!ajuda":
		case "!help":
		{
			client.action(canal, "!elo, '!Olá', !redes-sociais, !bot,");

			break;
		}

		case "!redes-sociais":
            {
                client.action(canal, "Instagram: Julliano Elyas");
        }
	}
});