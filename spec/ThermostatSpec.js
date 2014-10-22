"use strict";
describe ('Thermostat', function(){
	var thermostat;

		beforeEach(function(){
			thermostat = new Thermostat();
		});

	describe('by default', function(){

		it('is set to 20 degrees', function(){
			expect(thermostat.temperature).toEqual(20);
		});

		it('power saving mode will be on', function(){
			expect(thermostat.isPowerSaverOn).toBe(true);
		});

		it('can increase the temperature by one degree', function() {
			thermostat.increaseTemperature();
			expect(thermostat.temperature).toEqual(21);
		});

		it('can decrease the temperature by one degree', function() {
			thermostat.decreaseTemperature();
			expect(thermostat.temperature).toEqual(19);
		});		
	});

	describe('custom options', function(){

		it('can increase the temperature by 10', function(){
			thermostat.increaseTemperatureBy(10);
			expect(thermostat.temperature).toEqual(30);
		});

		it('can decrease the temperature by 10', function(){
			thermostat.decreaseTemperatureBy(10);
			expect(thermostat.temperature).toEqual(10);
		});

		it('power saving mode can be turned off', function(){
			thermostat.powerSaverButton("off");
			expect(thermostat.isPowerSaverOn).toBe(false);
		});

		it('power saver mode can be switched back on', function() {
			thermostat.powerSaverButton("on");
			expect(thermostat.isPowerSaverOn).toBe(true);
		});


	});
});