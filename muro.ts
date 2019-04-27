import { Publicacion } from "./publicacion";

export class Muro {
  public publicaciones: Array<Publicacion>;

  constructor() {
    this.publicaciones = [];
  }

  agregarPublicacion(
    descripcion: string,
    contenido: string,
    espublico?: boolean
  ) {
    this.publicaciones.push(new Publicacion(descripcion, contenido, espublico));
  }
}
