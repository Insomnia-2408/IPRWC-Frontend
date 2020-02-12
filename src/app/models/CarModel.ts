export class CarModel {

  constructor(
    carType: CarType, brand: string, mileage: number, options: string, transmission: Transmission, fuelType: FuelType,
    buildYear: number, doors: number, model: string, numberplate: string, bodyType: BodyType, motorType: string, horsepower: number,
    seats: number, gears: number, energyLabel: EnergyLabel, apk: Date, imagePath: string, price: number
  ) {
    this.carType = carType;
    this.brand = brand;
    this.mileage = mileage;
    this.options = options;
    this.transmission = transmission;
    this.fuelType = fuelType;
    this.buildYear = buildYear;
    this.doors = doors;
    this.model = model;
    this.numberplate = numberplate;
    this.bodyType = bodyType;
    this.motorType = motorType;
    this.horsepower = horsepower;
    this.seats = seats;
    this.gears = gears;
    this.energyLabel = energyLabel;
    this.apk = apk;
    this.imagePath = imagePath;
    this.price = price;
  }

  id: number;
  carType: CarType;
  brand: string;
  mileage: number;
  options: string;
  transmission: Transmission;
  fuelType: FuelType;
  buildYear: number;
  doors: number;
  model: string;
  numberplate: string;
  bodyType: BodyType;
  motorType: string;
  horsepower: number;
  seats: number;
  gears: number;
  energyLabel: EnergyLabel;
  apk: Date;
  imagePath: string;
  price: number;

}

export enum CarType {
  NEW=  "NEW",
  OCCASION = "OCCASSION",
  SHOWMODEL = "SHOWMODEL",
  OLDTIMER = "OLDTIMER"
}

export enum Transmission {

  AUTOMATIC = "AUTOMATIC",
  SEMI_AUTOMATIC = "SEMI_AUTOMATIC",
  MANUAL = "MANUAL"

}

export enum FuelType {


  GASOLINE= "GASOLINE",
  DIESEL = "DIESEL",
  ELECTRIC = "ELECTRIC",
  HYDROGEN = "HYDROGEN"

}

export enum BodyType {

  HATCHBACK= "HATCHBACK",
  MPV = "MPV",
  SEDAN = "SEDAN",
  STATIONWAGON = "STATIONWAGON",
  COUPE = "COUPE",
  CABRIOLET = "CABRIOLET",
  SUV = "SUV",
  REMAINING = "REMAINING"

}

export enum EnergyLabel {

  A= "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G"

}
