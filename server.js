const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Listo${client.user.tag}!`);
  client.user.setStatus('online');
   
  
});

client.on('message', msg => {
  if (msg.content === 'nutri') {
    msg.reply('Hola soy nutri97 el bot de tecnobear para ver los comandos pone --comando');
  }
});
//Lista de Comandos//
client.on('message', msg => {
    if (msg.content === '--comando') {
      msg.reply('Hola soy nutri97, los comandos son: .');
  });
//Comando de nutri//


client.on('message', msg => {
    if (msg.content === '--redes') {
      msg.channel.send('Redes Sociales - TecnoBear');
      msg.channel.send('Instagram: https://www.instagram.com/tecno_bear/ ');
      msg.channel.send('Facebook: https://www.facebook.com/yoel.almiron/');
      msg.channel.send('Youtube: https://www.youtube.com/channel/UC0Bo9WRAikw29daSVurI-QA');
    }
  });

  client.on('message', msg => {
  if (msg.content === '--nutri') {
    const embed = new Discord.MessageEmbed()
      .addField('TODOS LOS COMANDOS TIENE PREFIJO --',' --ejemplo ')
      .addField('ver las Redes','--redes')
      .addField('informacion de mates','--mates')
      .addField('futuros comandos','xD');
    msg.channel.send(embed);
  }
    });
//Comandos Personalizados//
client.on('message', msg => {
    if (msg.content === '--mates') {
      msg.reply('Hola soy nutri97, tecnobear hizo un video de los mates.En el video explica relleno, perimetros y hasta velocidades de impresion.');
    }
  });

client.login('Token');
