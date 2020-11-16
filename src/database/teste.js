const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db =>{

    //inserir dados na tabela
    await saveOrphanage(db,  {
        
        lat: "-22.673247",
        lng: "-44.199216",
            name:"Local de Paz",
            description: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            images: [
                "https://images.unsplash.com/photo-1567701562484-deab2750d1e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

                "https://s2.glbimg.com/D2LUfCLzDxaSIxvFfDJ530fxSso=/e.glbimg.com/og/ed/f/original/2020/01/21/gettyimages-1142965168.jpg"


            ].toString(),
            instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            opening_hours: "Horário de visitas Das 8h até as 18h",
            open_on_weekends:"1"

    })

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente um orfanato, pelo o id

    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)
})