let fs = require('fs')


// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync('../teste.txt',
            {encoding:'utf8', flag:'r'});
 
// Display the file data
let html = `<table>`;
const dados = data.split('\r\n');
for(let i = 0; i < dados.length; i++){
    const dado = dados[i];
    console.log(dado.split(';'));
    const colunas = dado.split(';');
    if(i == 0){
      html += `<tr>
                <th>${colunas[0]}</th>
                <th>${colunas[1]}</th>
                <th>${colunas[1]}</th>`
                
                }else{
                  html += `<tr>
                  <th>${colunas[0]}</th>
                  <th>${colunas[1]}</th>
                  <th>${colunas[1]}</th>`
                  ;

}
}
html += `</table>`;
console.log(html);
/* fs.writeFileSync('../teste.html', html); */