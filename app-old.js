const http=require('http');

http.createServer((request, response)=>{

    // response.writeHead(200,{'Content-Type':'application/JSON'})
    // const persona={
    //     id:1,
    //     nombre: 'Joaquin'
    // }
        
    // response.setHeader('Content-Disposition','attachment; filename=lista.csv');
    // response.writeHead(200,{'Content-Type':'application/csv'});
    // response.write(JSON.stringify(persona));
    // response.write('id; nombre\n');
    // response.write('1; Joaquin\n');
    // response.write('2; Fernando\n');
    // response.write('3; Maria\n');

    response.write('Hola Mundo');
    
    response.end();
})
.listen(8080);

console.log('Escuchando el puerto', 8080);