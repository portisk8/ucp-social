import { Usuario } from "../usuario";
import { Album } from "../album";
import { expect } from "chai";
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe("Agregar Album", () => {
  it("Se debería agregar un album", () => {
    const usuario = new Usuario("correo@ucp.edu.ar");
    usuario.agregarAlbum("Album1");
    expect(usuario.albums).not.empty;
  });
});

describe("Quitar Album por nombre", () => {
  it("Se debería quitar un album por el nombre", () => {
    const usuario = new Usuario("correo@ucp.edu.ar");
    usuario.agregarAlbum("Album1");
    usuario.quitarAlbum("Album1");
    expect(usuario.albums).is.empty;
  });
});
