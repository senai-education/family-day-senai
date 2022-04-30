var dados = [];

function BuscarDados() {
  dados = [['Década', 'Frequência']];
  var nome = document.getElementById("nome").value;
  axios.get(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome}`)
  .then(response => {
    response.data[0].res.forEach(decada => {
      dados.push([
        decada.periodo.replaceAll("[", "").replaceAll(","," - "),
        decada.frequencia
      ])
    });
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(DesenhaGrafico);
  })
  .catch(error => {
    document.getElementById('grafico').innerHTML = "<center><h1>Não foi encontrado nada</h1></center>"
  })

}


function DesenhaGrafico() {
  var dadosFormatados = google.visualization.arrayToDataTable(dados);
  var opcoes = {
    hAxis: { title: 'Nome ao Longo das Décadas', titleTextStyle: { color: '#333' } },
    vAxis: { minValue: 1900 }
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('grafico'));
  chart.draw(dadosFormatados, opcoes);
}