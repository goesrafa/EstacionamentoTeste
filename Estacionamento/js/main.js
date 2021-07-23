document.getElementById('formulario').addEventListener('submit', relatorioDia);

function relatorioDia(){
   var tot = 0;
   var totalDia = parseInt();

   var total = (tot*totalDia);
   total = total.toFixed(2);

   if (total<0){
       texto = "O dia rendeu R$ " + total + "  hoje";
       alert(texto);
   }else if(total > 0){
        texto = "O dia rendeu R$ " + total + " hoje";
   }
   document.getElementById().innerHTML = texto;

}

function mostraTudo(num) {

    if (num == 1) {
       mostrarpatio();
    }
    document.getElementById('total').innerHTML = '';
    document.getElementById('tabela').style.display= "block";
    document.getElementById('esconde').style.display = "inline-block";
    document.getElementById('mostrar').style.display = "none";
    document.getElementById('total').style.display = "block";
}

function pesquisar() {
    var pesq = document.getElementById('procurar').nodeValue.trim().toUpperCase();
    veiculos = JSON.parse(localStorage.getItem('patio'));

    var patioResultado = document.getElementById('resultados');

    for (var i = 0; i < veiculo.length; i++) {

        if (pesq == veiculos[i].placa) {
            var placa = veiculos[i].placa;
            var preco = veiculos[i].preco;
           


            patioResultado.innerHTML = '<tr><td>' + placa + '</td>' + '<td>' + preco + '</td>' +
                '<td>' + hora + '</td>' + ':' + '<td>' + minuto + '</td>' +
                '<td><button type="button" class="btn btn-primary" onclick="calculaHoras(\'' + placa + '\',\'' + preco + '\')"><img src="/Estacionamento/icons2/calculator.png">R$ </button></td>' +
                '<td><button type="button" class="btn btn-danger" onclick="confirma(\'' + placa + '\')" ></button></td>' +
                '</tr>';

            document.getElementById('procurar').innerHTML = "";
            document.getElementById('procurar').style.display = "none";
            mostraTudo(0);
            return true;
        } else {
            document.getElementById('procurar').style.display = "2px solid red";
            alert('Não existe o que procura');
            return false;
        }
    }
}