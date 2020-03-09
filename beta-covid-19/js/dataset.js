/*
	Funzioni per il download e la manipolazione dei dati forniti dal Dipartimento della Protezione Civile.

	Progetto in fase di sviluppo, il codice potrebbe cambiare.
*/

// [{giorno:{chiave:valore}}, ...]
var datiRegionali = [];
var datiNazionali = [];

var urlDatiRegionali = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv";
var urlDatiNazionali = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-andamento-nazionale/dpc-covid19-ita-andamento-nazionale.csv";

// Scarica i dati regionali e nazionali
function init(callback) {
	d3.csv(urlDatiRegionali)
	.then(function(datiReg) {
		datiRegionali = datasetConversion(datiReg);
		d3.csv(urlDatiNazionali)
		.then(function(datiNaz){
			datiNazionali = datasetConversion(datiNaz);
			if(callback && typeof callback === 'function')
				callback();
		});
	});
}

// Scarica solo i dati regionali
function initDatiRegionali(callback) {
	d3.csv(urlDatiRegionali)
	.then(function(datiReg) {
		datiRegionali = datasetConversion(datiReg);
		if(callback && typeof callback === 'function')
			callback();
	});
}

// Scarica solo i dati nazionali
function initDatiNazionali(callback) {
	d3.csv(urlDatiNazionali)
	.then(function(datiNaz){
		datiNazionali = datasetConversion(datiNaz);
		if(callback && typeof callback === 'function')
			callback();
	});
}

// Converte il dataset
// inData => dataset scaricato
// return dataset manipolato
function datasetConversion(data) {
	var outData = [];
	for(var i = 0; i < data.length; i++) {
		var giorno = {};
		giorno[data[i]["data"]] = {
			"denominazione_regione": data[i]["denominazione_regione"],
			"deceduti": data[i]["deceduti"],
			"dimessi_guariti": data[i]["dimessi_guariti"],
			"isolamento_domiciliare": data[i]["isolamento_domiciliare"],
			"ricoverati_con_sintomi": data[i]["ricoverati_con_sintomi"],
			"tamponi": data[i]["tamponi"],
			"terapia_intensiva": data[i]["terapia_intensiva"],
			"totale_attualmente_positivi": data[i]["totale_attualmente_positivi"],
			"totale_casi": data[i]["totale_casi"],
			"totale_ospedalizzati": data[i]["totale_ospedalizzati"],
		};
		outData.push(giorno);
	}
	return outData;
}

// Ritorna un dataset per il grafico filtrando uno specifico parametro
// data => dataset manipolato
// parametro => string
// label => string
// color => string (HEX)
function datasetsParametro(data, parametro, label, color) {
	var dataLabels = []; // Giorni
	var dataValues = []; // Numero di casi per giorno

	// Crea i dataLabels
	for(var i = 0; i < data.length; i++) {
		var giorno = Object.keys(data[i])[0];
		dataLabels.push(giorno);
		dataValues.push(data[i][giorno][parametro]);
	}

	return {
		labels: dataLabels,
		datasets: [{
			label: label,
			data: dataValues,
			backgroundColor: color,
		}],
	};
}

// Disegna il grafico del dataset fornito
// chartID => id canvas
// data => dataset manipolato
function drawChart(chartID, data) {
	var chart = new Chart(chartID, {
		type: 'bar',
		data: data,
		options: {
			legend: {
				display: true,
				labels: {
					fontColor: '#FFFFFF',
				},
			},
			scales: {
				yAxes: [{
					ticks: {
						fontColor: '#FFFFFF',
					},
					gridLines: {
						color: '#616161',
					},
				}],
				xAxes: [{
					ticks: {
						fontColor: '#FFFFFF',
					},
					gridLines: {
						color: '#616161',
					},
				}],
			},
			plugins: {
	            datalabels: {
	            	color: '#FFFFFF',
	            	anchor: 'end',
	            },
	        },
		}
	});
}