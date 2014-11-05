function Thermostat(){
	this.temperature = 20;
	this.isPowerSaverOn = true;
	this.saverMaxTemp = 25;
	this.maxTemp = 32;
	this.minTemp = 10;
};

Thermostat.prototype.increaseTemperature = function() {
	return this.increaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperature = function() {
	return this.decreaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	return this.temperature += degrees;
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	return this.temperature -= degrees;
};

Thermostat.prototype.powerSaverButton = function(onOff) {
	if (onOff === "off") return this.isPowerSaverOn = false;
	else return this.isPowerSaverOn;
};

Thermostat.prototype.resetToDefaultTemperature = function() {
	return this.temperature = 20
};

	// if(this.temperature > this.saverMaxTemp && this.isPowerSaverOn === true) return this.saverMaxTemp;
	// else if(this.temperature > this.maxTemp && this.isPowerSaverOn === false) return this.maxTemp;
	// else return this.temperature;

	// if(this.temperature < this.minTemp) return this.minTemp;
	// else return this.temperature;	