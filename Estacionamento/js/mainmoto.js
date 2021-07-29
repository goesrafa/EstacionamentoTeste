document.getElementById('formulario').addEventListener('submit', cadastrarVeiculo);

function cadastrarVeiculo(e) {
    var placaVeiculo = document.getElementById('placaVeiculo').nodeValue.trim().toUpperCase();
    var valHor = document.getElementById('valHor').nodeValue;
    var horEnt = new Date();

    if (placaVeiculo == "" || valHor == "") {

        alert("Os campos devem ser preenchidos!");
        return false;
    }

    //Criando os objetos com dados preenchidos

    var veiculo = {
        placa: placaVeiculo,
        preco: valHor,
        hora: horEnt.getHours(),
        minutos: horEnt.getMinutes(),
    };

    if (localStorage.getItem('patio') === null) {
        var veiculo = [];
        veiculo.push(veiculo);
        localStorage.setItem('patio', JSON.stringify(veiculo));
    } else {
        var veiculo = JSON.parse(localStorage.getItem('patio'));
        veiculo.push(veiculo);
        localStorage.setItem('patio', JSON.stringify(veiculo));
    }

    document.getElementById('formulario').reset();

    mostrarpatio();
    e.preventDeault();
}

function confirmar(placa) {
    var c = confirm("Deseja mesmo excluir?");

    if (c) {
        removerVeiculo(placa);
        console.log('Moto removida');
    } else {
        console.log('Moto não removida');
        return false;
    }

}

function removerVeiculo(placa) {
    var patio = JSON.parse(localStorage.getItem('patio'));
    console.log(patio);

    for (var i = 0; i < patio.length; i++) {
        if (patio[i].placa == placa) {
            patio.splice(i, 1);
        }
    }

    localStorage.setItem('patio', JSON.stringify(patio));

    mostrarpatio();
}

//Calculo do total final

function calcularHoras(preco, hora, minuto) {

    var Tot = 0;
    var preco = parseInt(preco);
    var hora = parseInt(hora);
    var minuto = parseInt(minuto);

    var total = document.getElementById('total');

    var date = new Date();
    var horAtual = new parseInt(date.getHours());
    var minAtual = new parseInt(date.getMinutes());

    var qtdeHor = horAtual - hora;
    var qtdeMin = minAtual - minuto;
    var precHor = qtdeHor * preco;
    var precMin = (qtdeMin / 60) * preco;

    if (precHor == 0) {
        Tot = precMin.toFixed(2);
    } else {
        Tot = (precHor + precMin).toFixed(2);
    }
	total.style.border = " 2px solid black";

    total.innerHTML = 'R$ ' + Tot;
}

//Mostrando as funções dos botões

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

function escondeTudo() {
    document.getElementById('tabela').style.display = '';
    document.getElementById('mostrar').style.display = "inline-block";
    document.getElementById('esconde').style.display = "none";
    document.getElementById('total').style.display = "none";
}

function pesquisar() {
    var pesq = document.getElementById('procurar').nodeValue.trim().toUpperCase();
    veiculos = JSON.parse(localStorage.getItem('patio'));

    var patioResultado = document.getElementById('resultados');

    for (var i = 0; i < veiculo.length; i++) {

        if (pesq == veiculos[i].placa) {
            var placa = veiculos[i].placa;
            var preco = veiculos[i].preco;
            var hora = veiculos[i].hora;
            var minuto = veiculos[i].minuto;


            patioResultado.innerHTML = '<tr><td>' + placa + '</td>' + '<td>' + preco + '</td>' +
                '<td>' + hora + '</td>' + ':' + '<td>' + minuto + '</td>' +
                '<td><button type="button" class="btn btn-primary" onclick="calculaHoras(\'' + placa + '\',\'' + preco + '\',\'' + hora + '\',\'' + minutos + '\')"><img src="/Estacionamento/icons2/calculator.png">R$ </button></td>' +
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