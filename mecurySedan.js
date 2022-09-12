const VehicleModule = require('./vehicle').Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    start() {
        if (this.fuel > 0) {
            console.log("vroom vroom!");
            return this.started = true
        } else {
            console.log("you're poor");
            return this.started = false;
        }
    }

    checkService() {
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        }
    }


    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + " Get a bigger car jeez, this isn't a clown car!");

            }
        } else {
            console.log(this.model + " " + this.make + " is pretty full");
        }
    }


}


let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)

myCar.typeOfVehicle()
if (myCar.checkService() == true) {
    console.log('Please take car in for servicing!')
}
// console.log(myCar.scheduleService)
myCar.start()
myCar.loadPassenger(5)
while (myCar.fuel > 0) {
    myCar.accelerate()
}
while (myCar.speed > 0) {
    myCar.decelerate()
}
console.log(myCar.make + " " + myCar.model + " has stopped moving");
myCar.stop()
myCar.checkService()

console.log(myCar)