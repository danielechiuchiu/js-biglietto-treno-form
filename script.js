// buttons
var buttonGenera = document.getElementById('form_genera');
var buttonAnnulla = document.getElementById('form_annulla');

// elementi form
var formNome = document.getElementById('form_nome');
var formEta = document.getElementById('form_eta');
var formKm = document.getElementById('form_km');

// elementi Biglietto
var biglietto = document.getElementById('biglietto');
var biglNome = document.getElementById('bigl-nome');
var biglOfferta = document.getElementById('bigl-offerta');
var biglCosto = document.getElementById('bigl-costo');
var biglCarrozza = document.getElementById('bigl-carrozza');
var biglCodice = document.getElementById('bigl-codice');


// Evento click button genera
buttonGenera.addEventListener('click',
  function() {
    var formKmValue = parseInt(formKm.value);
    var formEtaValue = formEta.value;
    var formNomeLength = formNome.value;

    // Gestione errore compilazione form
    if( isNaN(formKmValue) || formNomeLength.length == 0 ) {
      alert('Compila tutti i campi')
    } else {

      // Calcolo prezzo e offerta biglietto
      var prezzo = formKmValue * 0.21;
      var offerta = 'Biglietto standard'

      // Calcolo sconto e offerta biglietto
      if (formEtaValue == 'minorenne') {
        prezzo = prezzo - (prezzo * 20 / 100);
        offerta = 'Biglietto minorenni';
      }
      else if (formEtaValue == 'over') {
        prezzo = prezzo - (prezzo * 40 / 100);
        offerta = 'Biglietto over 65';
      }
    }

    // Compilazione biglietto
    biglNome.innerHTML = formNome.value;
    biglCosto.innerHTML = prezzo.toFixed(2);
    biglOfferta.innerHTML = offerta;
    biglCarrozza.innerHTML = Math.floor(Math.random() * 10) + 1;
    biglCodice.innerHTML = Math.floor(Math.random() * 10000) + 1;

    // Biglietto visible
    biglietto.className = 'tabella2';
  }
)


// Evento click button annulla
buttonAnnulla.addEventListener('click',
  function() {
    // biglietto hidden
    biglietto.className = 'hidden';

    // annullamento form
    formNome.value = '';
    formKm.value = '';
    formEta.value = 'maggiorenne';

    // annullamento biglietto
    biglNome.innerHTML = '';
    biglOfferta.innerHTML = '';
    biglCarrozza.innerHTML = '';
    biglCodice.innerHTML = '';
    biglCosto.innerHTML = '';
  }
)
