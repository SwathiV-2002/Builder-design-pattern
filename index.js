"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computerBuilder_1 = require("./computerBuilder");
const computerBuilder = new computerBuilder_1.CustomComputerBuilder();
const director = new computerBuilder_1.ComputerDirector();
const highEndComputer = director.constructHighEndComputer(computerBuilder);
console.log(highEndComputer);
