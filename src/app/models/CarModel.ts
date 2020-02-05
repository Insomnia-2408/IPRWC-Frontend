export class CarModel {

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

export const enum CarType {
  NEW=  "NEW",
  OCCASION = "OCCASSION",
  SHOWMODEL = "SHOWMODEL"
}

export const enum Transmission {

  AUTOMATIC = "AUTOMATIC",
  SEMI_AUTOMATIC = "SEMI_AUTOMATIC",
  MANUAL = "MANUAL"

}

export const enum FuelType {


  GASOLINE= "GASOLINE",
  DIESEL = "DIESEL",
  ELECTRIC = "ELECTRIC",
  HYDROGEN = "HYDROGEN"

}

export const enum BodyType {

  HATCHBACK= "HATCHBACK",
  MPV = "MPV",
  SEDAN = "SEDAN",
  STATIONWAGON = "STATIONWAGON",
  COUPE = "COUPE",
  CABRIOLET = "CABRIOLET",
  SUV = "SUV",
  REMAINING = "REMAINING"

}

export const enum EnergyLabel {

  A= "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G"

}
