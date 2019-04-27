import { Usuario } from "../usuario";
import { Album } from "../album";
import { Imagen } from "../imagen";
import { Muro } from "../muro";
import { expect } from "chai";
import { MuroGeneral } from "../muroGeneral";

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

describe("Muro General", () => {
  it("Se debería agregar una publicación Pública y visualizarse en Muro General", () => {
    const usuario = new Usuario("correo@ucp.edu.ar");
    usuario.publicar("Publicación Pública", "Esto es un contenido.", true);
    expect(MuroGeneral.getInstance().publicaciones[0].descripcion).equal(
      "Publicación Pública"
    );
  });
  it("Se debería agregar una publicación Privada y No visualizarse en Muro General", () => {
    const usuario = new Usuario("correo@ucp.edu.ar");
    usuario.publicar("Publicación Privada", "Esto es un contenido.");
    expect(MuroGeneral.getInstance().publicaciones.length).equal(2); //esto sucede porque cuando inicio el test como es singleton y al testear con 2 publicaciones publicas se envían al Muro General
  });
});
