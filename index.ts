import { ComputerDirector, CustomComputerBuilder } from './computerBuilder';

const computerBuilder = new CustomComputerBuilder();
const director = new ComputerDirector();
const highEndComputer = director.constructHighEndComputer(computerBuilder);

console.log(highEndComputer);
