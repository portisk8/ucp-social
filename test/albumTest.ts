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
  it("No se debería agregar un album con el mismo nombre", () => {
    const usuario = new Usuario("correo@ucp.edu.ar");
    usuario.agregarAlbum("Album1");
    usuario.agregarAlbum("Album1");
    expect(usuario.albums.length).equal(1);
  });
  it("Agregar 10 albums con nombre AlbumX", () => {
    const usuario = new Usuario("correo@ucp.edu.ar");
    for (let index = 0; index < 10; index++) {
      usuario.agregarAlbum(`Album ${index}`);
    }
    expect(usuario.albums.length).equal(10);
  });
});

describe("Quitar Album por nombre", () => {
  it("Se debería quitar un album por el nombre", () => {
    const usuario = new Usuario("correo@ucp.edu.ar");
    usuario.agregarAlbum("Album1");
    usuario.quitarAlbum("Album1");
    expect(usuario.albums).is.empty;
  });
  it("No debería quitar un album por el nombre si no existe", () => {
    const usuario = new Usuario("correo@ucp.edu.ar");
    usuario.agregarAlbum("Album1");
    usuario.quitarAlbum("Album2");
    expect(usuario.albums.length).equal(1);
  });
  it("Quitar 'Album 4' luego de insertar 10 albums", () => {
    const usuario = new Usuario("correo@ucp.edu.ar");
    for (let index = 0; index < 10; index++) {
      usuario.agregarAlbum(`Album ${index}`);
    }
    usuario.quitarAlbum("Album 4");
    var album = usuario.obtenerAlbum("Album 4");
    expect(album).equal(null);
  });
});

describe("Obtener Album por nombre", () => {
  it("Se debería obtener un album por el nombre", () => {
    const usuario = new Usuario("correo@ucp.edu.ar");
    usuario.agregarAlbum("Album1");
    var album = usuario.obtenerAlbum("Album1");
    expect(album.nombre).to.equals("Album1");
  });
});
