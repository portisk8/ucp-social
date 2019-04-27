import { Usuario } from "../usuario";
import { Album } from "../album";
import { Imagen } from "../imagen";
import { Muro } from "../muro";
import { expect } from "chai";

describe("Agregar Publicación", () => {
  it("Se debería agregar una publicación Pública", () => {
    const usuario = new Usuario("correo@ucp.edu.ar");
    usuario.publicar("Publicación Pública", "Esto es un contenido.", true);
    expect(usuario.muro.publicaciones[0].espublico).equal(true);
  });
  //   it("No se debería agregar un album con el mismo nombre", () => {
  //     const usuario = new Usuario("correo@ucp.edu.ar");
  //     usuario.agregarAlbum("Album1");
  //     usuario.agregarAlbum("Album1");
  //     expect(usuario.albums.length).equal(2);
  //   });
  //   it("Agregar 10 albums con nombre AlbumX", () => {
  //     const usuario = new Usuario("correo@ucp.edu.ar");
  //     for (let index = 0; index < 10; index++) {
  //       usuario.agregarAlbum(`Album ${index}`);
  //     }
  //     expect(usuario.albums.length).equal(11);
  //   });
});
