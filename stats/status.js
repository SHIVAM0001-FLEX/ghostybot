client.on("ready", async() => {
    
    const channel = await client.channels.fetch("828082170207404032")

    const embed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setDescription("Please wait for a minute!\nStatus is being ready!")
    channel.bulkDelete(10);
    channel.send(embed).then((msg) => {
        setInterval(() =>{
            const status = {
                ONLINE: "**Online** <a:online:819559633836310528>",
                OFFLINE: "**Offline** <a:offline:828116927297355786>",
                IDLE: "**Idle** <a:idle:828116193545682974>",
                DND: "**DND** <a:dnd:828116425012805662>"
            }
            const my = status[client.users.cache.get('764546128204005436').presence.status.toUpperCase()]
            const wrl = status[client.users.cache.get('818175224310792233').presence.status.toUpperCase()]
            const om = status[client.users.cache.get('650716865093566501').presence.status.toUpperCase()]
            const rembed = new Discord.MessageEmbed()
            .setTitle('World Bot Status')
            .addField('`World Bot`', wrl, true)
            .addField('`!" ItzShivamᶠᴿᴺ </>乛ᴴᴿᴴ (Developer)`', my, true)
            .addField('`ƊƇ丶Sᴜᴊᴀʟ (Owner)`', om, true)
            .setColor("BLUE")
            .setTimestamp()
            msg.edit(rembed);
        }, 60000);})

})
