//Respuestas de ejemplo formato JSON
const variant = new Object({
    //Respuesta de consuta de viajes programados
    response:{
        stores:[
        {
        store: '1000',
            transport:{
                type: 'tractor',
                plate:'AX354C',
                line:'PITIC',
                user: 'pancho2019'   
            }
        },
        {
        store: '1001',
            transport:{
                type: '3 1/2',
                plate:'VC87B2',
                line:'TUMSA',
                user: 'pancho2019'   
            }
        }],
        travel:[{
            id:"TCE123456789",
            store: '1000',
            transport:{
                type: '3 1/2',
                plate:'VC87B2',
                line:'TUMSA',
                user: 'pancho2019'   
            }
        }]
    }
});

module.exports = variant;