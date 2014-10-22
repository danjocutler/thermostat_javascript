function Thermostat(){
	this.temperature = 20;
	this.isPowerSaverOn = true;
};

Thermostat.prototype.increaseTemperature = function() {
	this.increaseTemperatureBy(1);
};
Thermostat.prototype.decreaseTemperature = function() {
	this.decreaseTemperatureBy(1);
};
Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees
};
Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	this.temperature -= degrees
};

Thermostat.prototype.powerSaverButton = function(onOff) {
	if (onOff === "off") return this.isPowerSaverOn = false;
	if (onOff === "on") return this.isPowerSaverOn;
};

	// if (powerSaverButton(off)) return this.isPowerSaverOn = false;
	// else
	// return true;
