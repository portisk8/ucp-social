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
  it("Se debería agregar una publicación Privada", () => {
    const usuario = new Usuario("correo@ucp.edu.ar");
    usuario.publicar("Publicación Privada", "Esto es un contenido.");
    expect(usuario.muro.publicaciones[0].espublico).equal(false);
  });
});
