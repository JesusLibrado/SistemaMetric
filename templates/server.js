function route(app, regex, prefix) {
	app.get(regex, function(req, res) {
			var type = req.params[0];
			var path = req.params[1];
			var file = prefix + type + '/' + path
			res.sendfile(file);
		}
	);
}

var express = require('express');
var PORT = 8080;
var app = express();

//a href="#" class="active">Inicio</a>
//			<a href="cotizaciones.html">Cotizaciones</a>
//			<a href="#">Eventos</a>	
//			<a href="personal.html">Personal</a>
//			<a href="clientes.html">Clientes</a>
//			<a href="cotizadores.html">Cotizadores</a>
//			<a href="#">Herramientas</a>

app.get('/', function(req, res) {
		res.sendfile('index.html');
	}
);

app.get('/index.html', function(req, res) {
		res.sendfile('index.html');
	}
);

app.get('/cotizaciones.html', function(req, res) {
		res.sendfile('cotizaciones.html');
	}
);

app.get('/personal.html', function(req, res) {
		res.sendfile('personal.html');
	}
);

app.get('/clientes.html', function(req, res) {
		res.sendfile('clientes.html');
	}
);

app.get('/cotizadores.html', function(req, res) {
		res.sendfile('cotizadores.html');
	}
);

route(app, /^\/(css|js|images|fonts)\/(.*)/, './');

app.listen(PORT);
console.log('Running on port ' + PORT);
