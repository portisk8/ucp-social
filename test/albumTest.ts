import { Usuario } from "../usuario";
import { Album } from "../album";
import { Imagen } from "../imagen";
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
    expect(usuario.albums.length).equal(2);
  });
  it("Agregar 10 albums con nombre AlbumX", () => {
    const usuario = new Usuario("correo@ucp.edu.ar");
    for (let index = 0; index < 10; index++) {
      usuario.agregarAlbum(`Album ${index}`);
    }
    expect(usuario.albums.length).equal(11);
  });
});

describe("Quitar Album por nombre", () => {
  it("Se debería quitar un album por el nombre", () => {
    const usuario = new Usuario("correo@ucp.edu.ar");
    usuario.agregarAlbum("Album1");
    usuario.quitarAlbum("Album1");
    expect(usuario.albums.length).equal(1);
  });
  it("No debería quitar un album por el nombre si no existe", () => {
    const usuario = new Usuario("correo@ucp.edu.ar");
    usuario.agregarAlbum("Album1");
    usuario.quitarAlbum("Album2");
    expect(usuario.albums.length).equal(2);
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

describe("Agregar Imagen", () => {
  it("Se debería agregar una imagen en un album", () => {
    const usuario = new Usuario("correo@ucp.edu.ar");
    usuario.agregarAlbum("Album1");
    usuario.agregarImagen("Album1", new Imagen("fotoperfil1.jpg", ""));
    var album = usuario.obtenerAlbum("Album1");
    expect(album.imagenes.length).to.equals(1);
  });
});

describe("Eliminar imagen", () => {
  it("Se debería eliminar una imagen indicando nombre de album e imagen", () => {
    const usuario = new Usuario("correo@ucp.edu.ar");
    usuario.agregarAlbum("Album1");
    usuario.agregarImagen("Album1", new Imagen("fotoperfil1.jpg", ""));
    usuario.quitarImagen("Album1", "fotoperfil1.jpg");
    var album = usuario.obtenerAlbum("Album1");
    expect(album.imagenes).is.empty;
  });
});

describe("Asingar Caratula", () => {
  it("Se debería asignar una caratula a partir de nombre de imagen", () => {
    const usuario = new Usuario("correo@ucp.edu.ar");
    usuario.agregarAlbum("Album1");
    usuario.agregarImagen("Album1", new Imagen("fotoperfil1.jpg", ""));
    usuario.asignarCaratula("Album1", "fotoperfil1.jpg");
    var album = usuario.obtenerAlbum("Album1");
    expect(album.caratula.nombre).is.equal("fotoperfil1.jpg");
  });
});

describe("Asingar Foto de perfil", () => {
  it("Se debería asignar foto de perfil a usuario a partir de nombre de imagen", () => {
    const usuario = new Usuario("correo@ucp.edu.ar");
    usuario.agregarImagen("Fotos de Perfil", new Imagen("fotoperfil1.jpg", ""));
    usuario.asignarFotoPerfil("fotoperfil1.jpg");
    expect(usuario.fotoPerfil.nombre).is.equal("fotoperfil1.jpg");
  });
});
