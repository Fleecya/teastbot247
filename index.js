const Discord = require('discord.js');
const { prefix, token, } = require('./config.json');
const client = new Discord.Client();
const { hulu, minecraft, uplay, fortnite, spotify, origin, valorant, disney, brazzers, wish, sonyvegas, nordvpn, psn } = require('./accounts.json');
const fs = require('fs');

client.once('ready', () => {
    console.log(('READY'))
    stock1 = hulu.length
    stock2 = minecraft.length
    stock3 = uplay.length
    stock4 = fortnite.length
    stock5 = spotify.length
    stock6 = origin.length
    stock7 = disney.length
    stock8 = valorant.length
    stock9 = brazzers.length
    stock10 = wish.length
    stock11 = sonyvegas.length
    stock12 = nordvpn.length
    stock13 = psn.length
    

})

client.on("message", message => {
    console.log(message.content);
})

client.on("message", message => {
    if(message.content.startsWith(`${prefix}Hulu`)) {
        if(message.channel.type == "text") {
            let result1 = Math.floor((Math.random() * hulu.length))
            let acc1embed = new Discord.MessageEmbed()
            .setAuthor('FlycsBot', 'https://i.ibb.co/55gFrC8/4a425077ed2809403254ffec40454752.png')
            .setColor('#94bf49')
            .setTitle("Hulu Account Succesfully generated!")
            .setDescription(`[Click This Link](${hulu[result1]})\n\n`)
            .setTimestamp()
            .addField('-', "**Instructions:**\nCopy the link, paste it into your browser, and complete the ad for your account!")
            .addField('-', "**Enjoy your New Account!**\n Do not change the password, doing so will get you blacklisted from the bot! Thank you for using Flyc'sBot!")
            .setFooter("Made By Fleecyツ")
            .setThumbnail('https://i.ibb.co/3zgPNj6/600x600wa.png');

        message.author.send(acc1embed);
        message.reply("I've Sent You the Account!").then(message => {
            message.delete({ timeout: 999999 })
        })
        message.delete({ timeout: 999999 })
        }
    }
    if(message.content.startsWith(`${prefix}Minecraft`)) {
        if(message.channel.type == "text") {
            let result2 = Math.floor((Math.random() * minecraft.length))
            let acc2embed = new Discord.MessageEmbed()
            .setAuthor('FlycsBot', 'https://i.ibb.co/55gFrC8/4a425077ed2809403254ffec40454752.png')
            .setColor('#94bf49')
            .setTitle("Miencraft Account Succesfully generated!")
            .setDescription(`[Click This Link](${minecraft[result2]})\n\n`)
            .setTimestamp()
            .addField('-', "**Instructions:**\nCopy the link, paste it into your browser, and complete the ad for your account!")
            .addField('-', "**Enjoy your New Account!**\n Do not change the password, doing so will get you blacklisted from the bot! Thank you for using Flyc'sBot!")
            .setFooter("Made By Fleecyツ")
            .setThumbnail('https://i.ibb.co/QpJvBW1/apps-45782-9007199266731945-debbc4f1-cde0-491b-8c6f-b6b015eecab6.png');

        message.author.send(acc2embed);
        message.reply("I've Sent You the Account!").then(message => {
            message.delete({ timeout: 999999 })
        })
        message.delete({ timeout: 999999 })
        }
    }
    if(message.content.startsWith(`${prefix}Uplay`)) {
        if(message.channel.type == "text") {
            let result3 = Math.floor((Math.random() * uplay.length))
            let acc3embed = new Discord.MessageEmbed()
            .setAuthor('FlycsBot', 'https://i.ibb.co/55gFrC8/4a425077ed2809403254ffec40454752.png')
            .setColor('#94bf49')
            .setTitle("Uplay Account Succesfully generated!")
            .setDescription(`[Click This Link](${uplay[result3]})\n\n`)
            .setTimestamp()
            .addField('-', "**Instructions:**\nCopy the link, paste it into your browser, and complete the ad for your account!")
            .addField('-', "**Enjoy your New Account!**\n Do not change the password, doing so will get you blacklisted from the bot! Thank you for using Flyc'sBot!")
            .setFooter("Made By Fleecyツ")
            .setThumbnail('https://i.ibb.co/55gFrC8/4a425077ed2809403254ffec40454752.png')
        message.author.send(acc3embed);
        message.reply("I've Sent You the Account!").then(message => {
            message.delete({ timeout: 999999 })
        })
        message.delete({ timeout: 999999 })
        }
    }
    if(message.content.startsWith(`${prefix}Fortnite`)) {
        if(message.channel.type == "text") {
            let result4 = Math.floor((Math.random() * fortnite.length))
            let acc4embed = new Discord.MessageEmbed()
            .setAuthor('FlycsBot', 'https://i.ibb.co/55gFrC8/4a425077ed2809403254ffec40454752.png')
            .setColor('#94bf49')
            .setTitle("Fortnite Account Succesfully generated!")
            .setDescription(`[Click This Link](${fortnite[result4]})\n\n`)
            .setTimestamp()
            .addField('-', "**Instructions:**\nCopy the link, paste it into your browser, and complete the ad for your account!")
            .addField('-', "**Enjoy your New Account!**\n Do not change the password, doing so will get you blacklisted from the bot! Thank you for using Flyc'sBot!")
            .setFooter("Made By Fleecyツ")
            .setThumbnail('https://i.ibb.co/BNfdYw5/f75cb8c8074b5ccc961668aa91bbec9256a4c544-00.jpg');

        message.author.send(acc4embed);
        message.reply("I've Sent You the Account!").then(message => {
            message.delete({ timeout: 999999 })
        })
        message.delete({ timeout: 999999 })
        }
    }
    if(message.content.startsWith(`${prefix}Disney+`)) {
        if(message.channel.type == "text") {
            let result7 = Math.floor((Math.random() * disney.length))
            let acc7embed = new Discord.MessageEmbed()
            .setAuthor('FlycsBot', 'https://i.ibb.co/55gFrC8/4a425077ed2809403254ffec40454752.png')
            .setColor('#94bf49')
            .setTitle("Disney+ Account Succesfully generated!")
            .setDescription(`[Click This Link](${disney[result7]})\n\n`)
            .setTimestamp()
            .addField('-', "**Instructions:**\nCopy the link, paste it into your browser, and complete the ad for your account!")
            .addField('-', "**Enjoy your New Account!**\n Do not change the password, doing so will get you blacklisted from the bot! Thank you for using Flyc'sBot!")
            .setFooter("Made By Fleecyツ")
            .setThumbnail('https://ibb.co/ydZ8C72');

        message.author.send(acc7embed);
        message.reply("I've Sent You the Account!").then(message => {
            message.delete({ timeout: 999999 })
        })
        message.delete({ timeout: 999999 })
        }
    }
    if(message.content.startsWith(`${prefix}Spotify`)) {
        if(message.channel.type == "text") {
            let result5 = Math.floor((Math.random() * spotify.length))
            let acc5embed = new Discord.MessageEmbed()
            .setAuthor('FlycsBot', 'https://i.ibb.co/55gFrC8/4a425077ed2809403254ffec40454752.png')
            .setColor('#94bf49')
            .setTitle("Spotify Account Succesfully generated!")
            .setDescription(`[Click This Link](${spotify[result5]})\n\n`)
            .setTimestamp()
            .addField('-', "**Instructions:**\nCopy the link, paste it into your browser, and complete the ad for your account!")
            .addField('-', "**Enjoy your New Account!**\n Do not change the password, doing so will get you blacklisted from the bot! Thank you for using Flyc'sBot!")
            .setFooter("Made By Fleecyツ")
            .setThumbnail('https://i.ibb.co/TH399Sw/spotify-logo-png-open-2000.png');

        message.author.send(acc5embed);
        message.reply("I've Sent You the Account!").then(message => {
            message.delete({ timeout: 999999 })
        })
        message.delete({ timeout: 999999 })
        }
    }
    if(message.content.startsWith(`${prefix}Origin`)) {
        if(message.channel.type == "text") {
            let result6 = Math.floor((Math.random() * origin.length))
            let acc6embed = new Discord.MessageEmbed()
            .setAuthor('FlycsBot', 'https://i.ibb.co/55gFrC8/4a425077ed2809403254ffec40454752.png')
            .setColor('#94bf49')
            .setTitle("Origin Account Succesfully generated!")
            .setDescription(`[Click This Link](${origin[result6]})\n\n`)
            .setTimestamp()
            .addField('-', "**Instructions:**\nCopy the link, paste it into your browser, and complete the ad for your account!")
            .addField('-', "**Enjoy your New Account!**\n Do not change the password, doing so will get you blacklisted from the bot! Thank you for using Flyc'sBot!")
            .setFooter("Made By Fleecyツ")
            .setThumbnail('https://i.ibb.co/Tg4Ymb9/download.png');

        message.author.send(acc6embed);
        message.reply("I've Sent You the Account!").then(message => {
            message.delete({ timeout: 999999 })
        })
        message.delete({ timeout: 999999 })
        }
    }
    if(message.content.startsWith(`${prefix}Valorant`)) {
        if(message.channel.type == "text") {
            let result8 = Math.floor((Math.random() * valorant.length))
            let acc8embed = new Discord.MessageEmbed()
            .setAuthor('FlycsBot', 'https://i.ibb.co/55gFrC8/4a425077ed2809403254ffec40454752.png')
            .setColor('#94bf49')
            .setTitle("Valorant Account Succesfully generated!")
            .setDescription(`[Click This Link](${valorant[result8]})\n\n`)
            .setTimestamp()
            .addField('-', "**Instructions:**\nCopy the link, paste it into your browser, and complete the ad for your account!")
            .addField('-', "**Enjoy your New Account!**\n Do not change the password, doing so will get you blacklisted from the bot! Thank you for using Flyc'sBot!")
            .setFooter("Made By Fleecyツ")
            .setThumbnail('https://i.ibb.co/f2D5S0f/Valorant-logo.png');

        message.author.send(acc8embed);
        message.reply("I've Sent You the Account!").then(message => {
            message.delete({ timeout: 999999 })
        })
        message.delete({ timeout: 999999 })
        }
    }
    if(message.content.startsWith(`${prefix}Brazzers`)) {
        if(message.channel.type == "text") {
            let result9 = Math.floor((Math.random() * brazzers.length))
            let acc9embed = new Discord.MessageEmbed()
            .setAuthor('FlycsBot', 'https://i.ibb.co/55gFrC8/4a425077ed2809403254ffec40454752.png')
            .setColor('#94bf49')
            .setTitle("Brazzers Account Succesfully generated!")
            .setDescription(`[Click This Link](${brazzers[result9]})\n\n`)
            .setTimestamp()
            .addField('-', "**Instructions:**\nCopy the link, paste it into your browser, and complete the ad for your account!")
            .addField('-', "**Enjoy your New Account!**\n Do not change the password, doing so will get you blacklisted from the bot! Thank you for using Flyc'sBot!")
            .setFooter("Made By Fleecyツ")
            .setThumbnail('https://i.ibb.co/qxLt0Kn/Brazers-logos.jpg');

        message.author.send(acc9embed);
        message.reply("I've Sent You the Account!").then(message => {
            message.delete({ timeout: 999999 })
        })
        message.delete({ timeout: 999999 })
        }
    }
    if(message.content.startsWith(`${prefix}Wish`)) {
        if(message.channel.type == "text") {
            let result10 = Math.floor((Math.random() * wish.length))
            let acc10embed = new Discord.MessageEmbed()
            .setAuthor('FlycsBot', 'https://i.ibb.co/55gFrC8/4a425077ed2809403254ffec40454752.png')
            .setColor('#94bf49')
            .setTitle("Wish Account Succesfully generated!")
            .setDescription(`[Click This Link](${wish[result10]})\n\n`)
            .setTimestamp()
            .addField('-', "**Instructions:**\nCopy the link, paste it into your browser, and complete the ad for your account!")
            .addField('-', "**Enjoy your New Account!**\n Do not change the password, doing so will get you blacklisted from the bot! Thank you for using Flyc'sBot!")
            .setFooter("Made By Fleecyツ")
            .setThumbnail('https://i.ibb.co/dbgXP6G/346-3466964-wish-logo-png.jpg');

        message.author.send(acc10embed);
        message.reply("I've Sent You the Account!").then(message => {
            message.delete({ timeout: 999999 })
        })
        message.delete({ timeout: 999999 })
        }
    }
    if(message.content.startsWith(`${prefix}Sonyvegas`)) {
        if(message.channel.type == "text") {
            let result11 = Math.floor((Math.random() * sonyvegas.length))
            let acc11embed = new Discord.MessageEmbed()
            .setAuthor('FlycsBot', 'https://i.ibb.co/55gFrC8/4a425077ed2809403254ffec40454752.png')
            .setColor('#94bf49')
            .setTitle("SonyVegas Account Succesfully generated!")
            .setDescription(`[Click This Link](${sonyvegas[result11]})\n\n`)
            .setTimestamp()
            .addField('-', "**Instructions:**\nCopy the link, paste it into your browser, and complete the ad for your account!")
            .addField('-', "**Enjoy your New Account!**\n Do not change the password, doing so will get you blacklisted from the bot! Thank you for using Flyc'sBot!")
            .setFooter("Made By Fleecyツ")
            .setThumbnail('https://i.ibb.co/bmF6ggM/600px-Vegas-Pro-15-0.png');

        message.author.send(acc11embed);
        message.reply("I've Sent You the Account!").then(message => {
            message.delete({ timeout: 999999 })
        })
        message.delete({ timeout: 999999 })
        }
    }
    if(message.content.startsWith(`${prefix}Nordvpn`)) {
        if(message.channel.type == "text") {
            let result12 = Math.floor((Math.random() * nordvpn.length))
            let acc12embed = new Discord.MessageEmbed()
            .setAuthor('FlycsBot', 'https://i.ibb.co/55gFrC8/4a425077ed2809403254ffec40454752.png')
            .setColor('#94bf49')
            .setTitle("Nordvpn Account Succesfully generated!")
            .setDescription(`[Click This Link](${nordvpn[result12]})\n\n`)
            .setTimestamp()
            .addField('-', "**Instructions:**\nCopy the link, paste it into your browser, and complete the ad for your account!")
            .addField('-', "**Enjoy your New Account!**\n Do not change the password, doing so will get you blacklisted from the bot! Thank you for using Flyc'sBot!")
            .setFooter("Made By Fleecyツ")
            .setThumbnail('https://i.ibb.co/tqCg5Z9/04-Ey1-LL9kvrxr-F6nva9-OPEI-6-v-1569471434.png');

        message.author.send(acc12embed);
        message.reply("I've Sent You the Account!").then(message => {
            message.delete({ timeout: 999999 })
        })
        message.delete({ timeout: 999999 })
        }
    }
    if(message.content.startsWith(`${prefix}Psn`)) {
        if(message.channel.type == "text") {
            let result13 = Math.floor((Math.random() * psn.length))
            let acc13embed = new Discord.MessageEmbed()
            .setAuthor('FlycsBot', 'https://i.ibb.co/55gFrC8/4a425077ed2809403254ffec40454752.png')
            .setColor('#94bf49')
            .setTitle("Psn+ Account Succesfully generated!")
            .setDescription(`[Click This Link](${psn[result13]})\n\n`)
            .setTimestamp()
            .addField('-', "**Instructions:**\nCopy the link, paste it into your browser, and complete the ad for your account!")
            .addField('-', "**Enjoy your New Account!**\n Do not change the password, doing so will get you blacklisted from the bot! Thank you for using Flyc'sBot!")
            .setFooter("Made By Fleecyツ")
            .setThumbnail('https://i.ibb.co/PNVM28z/7-73100-playstation-network-playstation-psn-wallet-top-up-pound.jpg');

        message.author.send(acc13embed);
        message.reply("I've Sent You the Account!").then(message => {
            message.delete({ timeout: 999999 })
        })
        message.delete({ timeout: 999999 })
        }
    }
    
    
    


    // STOCK AND STATUS
    client.user.setActivity("+Help | Free Accounts");

    if(message.content.startsWith(`${prefix}Stock`)) {
        let embedstock = new Discord.MessageEmbed()
        .setAuthor('FlycsBot', 'https://i.ibb.co/55gFrC8/4a425077ed2809403254ffec40454752.png')
        .setTitle('Stock of the Accounts!')
        .addFields(
            { name: 'Hulu:', value: (stock1), inline: true},
            { name: 'Minecraft:', value: (stock2), inline: true},
            { name: 'Uplay:', value: (stock3), inline: true},
            { name: 'Fortnite:', value: (stock4), inline: true},
            { name: 'Spotify:', value: (stock5), inline: true},
            { name: 'Origin:', value: (stock6), inline: true},
            { name: 'Disney:', value: (stock7), inline: true},
            { name: 'Valorant:', value: (stock8), inline: true},
            { name: 'Brazzers:', value: (stock9), inline: true},
            { name: 'Wish:', value: (stock10), inline: true},
            { name: 'Sonyvegas:', value: (stock11), inline: true},
            { name: 'Nordvpn:', value: (stock12), inline: true},
            { name: 'Psn:', value: (stock13), inline: true},
        )
        .setThumbnail('https://cdn.discordapp.com/attachments/724355056442277926/724436340535459892/image0.jpg')
        .setFooter('Made By Fleecyツ')
        .setTimestamp();
    message.channel.send(embedstock).then(message => {
        message.delete({ timeout: 999999 })
    })
    message.delete({ timeout: 999999 })
    }

    if(message.content.startsWith(`${prefix}Help`)) {
        let embedhelp = new Discord.MessageEmbed()
        .setAuthor('FlycsBot', 'https://i.ibb.co/55gFrC8/4a425077ed2809403254ffec40454752.png')
        .setTitle('Stock of the Accounts!')
        .addFields(
            { name: '+Hulu:', value: ("Generates a Hulu Account!"), inline: true},
            { name: '+Minecraft:', value: ("Generates a Minecraft Account!"), inline: true},
            { name: '+Uplay:', value: ("Generates an Uplay Account!"), inline: true},
            { name: '+Fortnite:', value: ("Generates a Fortnite Account!"), inline: true},
            { name: '+Disney+:', value: ("Generates a Disney+ Account!"), inline: true},
            { name: '+Spotify:', value: ("Generates a Spotify Account!"), inline: true},
            { name: '+Origin:', value: ("Generates a Origin Account!"), inline: true},
            { name: '+Valorant:', value: ("Generates a Valorant Account!"), inline: true},
            { name: '+Brazzers:', value: ("Generates a Brazzers Account!"), inline: true},
            { name: '+Wish:', value: ("Generates a Wish Account!"), inline: true},
            { name: '+Sonyvegas:', value: ("Generates a Sonyvegas Account!"), inline: true},
            { name: '+Nordvpn:', value: ("Generates a Nordvpn Account!"), inline: true},
            { name: '+Psn:', value: ("Generates a Psn+ Account!"), inline: true},
            { name: '+Stock:', value: ("Shows the stock of every Account!"), inline: true},
            { name: '+Help:', value: ("Brings this menu up!"), inline: true},
        )
        .setThumbnail('https://cdn.discordapp.com/attachments/724355056442277926/724436340535459892/image0.jpg')
        .setFooter('Made By Fleecyツ')
        .setTimestamp();
    message.channel.send(embedhelp).then(message => {
        message.delete({ timeout: 999999 })
    })
    message.delete({ timeout: 999999 })
    }
if(message.content.startsWith(`${prefix}hulu`)) {
    message.channel.send("Make sure to capitalize the first letter. It should be \'+Hulu\'").then(message => {
        message.delete({ timeout: 999999 })
    })
    message.delete({ timeout: 999999 })
}
if(message.content.startsWith(`${prefix}minecraft`)) {
    message.channel.send("Make sure to capitalize the first letter. It should be \'+Minecraft\'").then(message => {
        message.delete({ timeout: 999999 })
    })
    message.delete({ timeout: 999999 })
}
if(message.content.startsWith(`${prefix}uplay`)) {
    message.channel.send("Make sure to capitalize the first letter. It should be \'+Uplay\'").then(message => {
        message.delete({ timeout: 999999 })
    })
    message.delete({ timeout: 999999 })
}
if(message.content.startsWith(`${prefix}fortnite`)) {
    message.channel.send("Make sure to capitalize the first letter. It should be \'+Fortnite\'").then(message => {
        message.delete({ timeout: 999999 })
    })
    message.delete({ timeout: 999999 })
}
if(message.content.startsWith(`${prefix}disney+`)) {
    message.channel.send("Make sure to capitalize the first letter. It should be \'+Disney+\'").then(message => {
        message.delete({ timeout: 999999 })
    })
    message.delete({ timeout: 999999 })
}
if(message.content.startsWith(`${prefix}spotify`)) {
    message.channel.send("Make sure to capitalize the first letter. It should be \'+Spotify\'").then(message => {
        message.delete({ timeout: 999999 })
    })
    message.delete({ timeout: 999999 })
}
if(message.content.startsWith(`${prefix}origin`)) {
    message.channel.send("Make sure to capitalize the first letter. It should be \'+Origin\'").then(message => {
        message.delete({ timeout: 999999 })
    })
    message.delete({ timeout: 999999 })
}
if(message.content.startsWith(`${prefix}valorant`)) {
    message.channel.send("Make sure to capitalize the first letter. It should be \'+Valorant\'").then(message => {
        message.delete({ timeout: 999999 })
    })
    message.delete({ timeout: 999999 })
}
if(message.content.startsWith(`${prefix}brazzers`)) {
    message.channel.send("Make sure to capitalize the first letter. It should be \'+Brazzers\'").then(message => {
        message.delete({ timeout: 999999 })
    })
    message.delete({ timeout: 999999 })
}
if(message.content.startsWith(`${prefix}wish`)) {
    message.channel.send("Make sure to capitalize the first letter. It should be \'+Wish\'").then(message => {
        message.delete({ timeout: 999999 })
    })
    message.delete({ timeout: 999999 })
}
if(message.content.startsWith(`${prefix}sonyvegas`)) {
    message.channel.send("Make sure to capitalize the first letter. It should be \'+Sonyvegas\'").then(message => {
        message.delete({ timeout: 999999 })
    })
    message.delete({ timeout: 999999 })
}
if(message.content.startsWith(`${prefix}nordvpn`)) {
    message.channel.send("Make sure to capitalize the first letter. It should be \'+Nordvpn\'").then(message => {
        message.delete({ timeout: 999999 })
    })
    message.delete({ timeout: 999999 })
}
if(message.content.startsWith(`${prefix}psn`)) {
    message.channel.send("Make sure to capitalize the first letter. It should be \'+Psn\'").then(message => {
        message.delete({ timeout: 999999 })
    })
    message.delete({ timeout: 999999 })
}
if(message.content.startsWith(`${prefix}help`)) {
    message.channel.send("Make sure to capitalize the first letter. It should be \'+Help\'").then(message => {
        message.delete({ timeout: 999999 })
    })
    message.delete({ timeout: 999999 })
}
if(message.content.startsWith(`${prefix}stock`)) {
    message.channel.send("Make sure to capitalize the first letter. It should be \'+Stock\'").then(message => {
        message.delete({ timeout: 999999 })
    })
    message.delete({ timeout: 999999 })
}
if(message.channel.name == "general") {
    message.delete({ timeout: 999999 })

}

})
client.login(token);