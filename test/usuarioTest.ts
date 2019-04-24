import { Usuario } from "../usuario";
import { expect } from "chai";
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe("Hello function", () => {
  it("should return hello world", () => {
    const result = new Usuario("Hello World!");
    expect(result.correo).to.equal("Hello World!");
  });
});

describe("Generar Enlace Verificador", () => {
  it("Debería Generar Enlace Verificador", () => {
    const result = new Usuario("Hello World!");
    expect(result.generarEnlaceVerificador()).not.equal(null);
  });
});
