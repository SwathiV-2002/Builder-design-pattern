class Computer {
    motherboard: string = "";
    cpu: string = "";
    gpu: string = "";
    ram: number = 0;
    storageType: string = "";
    storageSize: number = 0;
  }
  
  interface ComputerBuilder {
    addMotherboard(motherboard: string): this;
    addCPU(cpu: string): this;
    addGPU(gpu: string): this;
    addRAM(ram: number): this;
    addStorage(storageType: string, size: number): this;
    build(): Computer;
  }
  
  class CustomComputerBuilder implements ComputerBuilder {
    computer: Computer;
  
    constructor() {
      this.computer = new Computer();
    }
  
    addMotherboard(motherboard: string): this {
      this.computer.motherboard = motherboard;
      return this;
    }
  
    addCPU(cpu: string): this {
      this.computer.cpu = cpu;
      return this;
    }
  
    addGPU(gpu: string): this {
      this.computer.gpu = gpu;
      return this;
    }
  
    addRAM(ram: number): this {
      this.computer.ram = ram;
      return this;
    }
  
    addStorage(storageType: string, size: number): this {
      this.computer.storageType = storageType;
      this.computer.storageSize = size;
      return this;
    }
  
    build(): Computer {
      return this.computer;
    }
  }
  
  class ComputerDirector {
    constructHighEndComputer(builder: ComputerBuilder): Computer {
      return builder
        .addMotherboard("Gaming Motherboard")
        .addCPU("Intel Core i9")
        .addGPU("Nvidia RTX 3090")
        .addRAM(32)
        .addStorage("SSD", 2000)
        .build();
    }
  }
  
  export { Computer, ComputerBuilder, CustomComputerBuilder, ComputerDirector };
  