var continuar = true;

while (continuar) {
  var inputMonto = prompt('Colocar monto a calcular:');
  var monto = parseFloat(inputMonto);


  if (isNaN(monto) || monto <= 0) {
    alert(' Por favor, ingrese un monto válido.');
  } else {
    var inputCuotas = prompt('Cantidad de cuotas deseadas:');
    var cuotas = parseInt(inputCuotas);


    if (isNaN(cuotas) || cuotas <= 0) {
      alert('Por favor, coloque una cantidad de cuotas válida.');
    } else {
      var montoCuota = monto / cuotas;
      alert('Monto: $' + monto.toFixed(2) + '\nCuotas: ' + cuotas + '\nMonto por Cuota: $' + montoCuota.toFixed(2));
      continuar = false;
    }
  }
}
