"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerDirector = exports.CustomComputerBuilder = exports.Computer = void 0;
class Computer {
    constructor() {
        this.motherboard = "";
        this.cpu = "";
        this.gpu = "";
        this.ram = 0;
        this.storageType = "";
        this.storageSize = 0;
    }
}
exports.Computer = Computer;
class CustomComputerBuilder {
    constructor() {
        this.computer = new Computer();
    }
    addMotherboard(motherboard) {
        this.computer.motherboard = motherboard;
        return this;
    }
    addCPU(cpu) {
        this.computer.cpu = cpu;
        return this;
    }
    addGPU(gpu) {
        this.computer.gpu = gpu;
        return this;
    }
    addRAM(ram) {
        this.computer.ram = ram;
        return this;
    }
    addStorage(storageType, size) {
        this.computer.storageType = storageType;
        this.computer.storageSize = size;
        return this;
    }
    build() {
        return this.computer;
    }
}
exports.CustomComputerBuilder = CustomComputerBuilder;
class ComputerDirector {
    constructHighEndComputer(builder) {
        return builder
            .addMotherboard("Gaming Motherboard")
            .addCPU("Intel Core i9")
            .addGPU("Nvidia RTX 3090")
            .addRAM(32)
            .addStorage("SSD", 2000)
            .build();
    }
}
exports.ComputerDirector = ComputerDirector;
