//SpaceShip 3m 3p

//Cutter, Corvette, Frigate 3m 3p

class SpaceShip {
	constructor(name, speed, size) {
		this.name = name;
		this.speed = speed;
		this.size = size;
		
	}

	Name() {
		console.log(`Spaceship name: ${this.name}`);
		return this;
	}

	Speed() {
		console.log(`Spaceship speed: ${this.speed} km/h`);
		return this;
	}

	Size() {
		console.log(`Spaceship's size: ${this.size} m`);
		return this;
	}

}


class Cutter extends SpaceShip {
	constructor(name, speed, size, mass, model, country) {
		super(name, speed, size);
		this.mass = mass;
		this.model = model;
		this.country = country;
	}

	Mass() {
		console.log(`Spaceship's mass: ${this.mass} ton`);
		return this;
	}

	Model() {
		console.log(`Spaceship model: ${this.model}`);
		return this;
	}

	Country() {
		console.log(`Spaceship's country: ${this.country}`);
		return this;
	}

}

class Corvette extends SpaceShip {
	constructor(name, speed, size, height, width, fuel) {
		super(name, speed, size);
		this.height = height;
		this.width = width;
		this.fuel = fuel;
	}

	Height() {
		console.log(`Spaceship's height: ${this.height} m`);
		return this;
	}

	Width() {
		console.log(`Spaceship's width: ${this.width} m`);
		return this;
	}

	Fuel() {
		console.log(`Spaceship fuel: ${this.fuel}`);
		return this;
	}

}

class Frigate extends SpaceShip {
	constructor(name, speed, size, manufacturer, operator, launched) {
		super(name, speed, size);
		this.manufacturer = manufacturer;
		this.operator = operator;
		this.launched = launched;
	}

	Manufacturer() {
		console.log(`Spaceship's manufacturer: ${this.manufacturer}`);
		return this;
	}

	Operator() {
		console.log(`Spaceship operator: ${this.operator}`);
		return this;
	}

	Launched() {
		console.log(`Spaceship launched: ${this.launched}`);
		return this;
	}

}


const Orion = new SpaceShip('Orion', 500, 5.3);
const VSSUnity = new Cutter('VSS Unity', 400, 5.4, 10000, 'R4GB', 'USA');
const Virgin = new Corvette('Virgin', 500, 5.2, 200, 150, 'ММГ/N2O4');
const Dragon = new Frigate('Dragon', 500, 5.4, 'SpaceX', 'NASA', 15)

Orion.Name().Speed().Size();
console.log("--------");
VSSUnity.Name().Speed().Size().Mass().Model().Country();
console.log("--------");
Virgin.Name().Speed().Size().Height().Width().Fuel();
console.log("--------");
Dragon.Name().Speed().Size().Manufacturer().Operator().Launched();