
var tablero;

Meteor.methods ({
	generarMazo: function(){
		mazo = generarMazo();
	},
	
	dameFichaMadre: function(){
		return mazo.dameFichaMadre();
	},

	dameFicha: function(){
		return mazo.dameFicha();
	},

    generarTablero: function(){
        tablero = generarTablero(mazo);
    }

});

Meteor.startup(function(){
	console.log("Arrancado servidor");
});
