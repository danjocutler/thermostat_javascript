var thermostat = new Thermostat

$(document).ready(function() {
  // new Thermostat('.thermostat h2');
  $('.thermostat h2').text(thermostat.temperature);
  });

// $('.increase_temperature').on('click', function() {
// 	$('.thermostat h2').text("hello")

// });