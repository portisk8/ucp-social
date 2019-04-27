import { Publicacion } from "./publicacion";

export class MuroGeneral {
  public publicaciones: Array<Publicacion>;
  private static instance: MuroGeneral;
  constructor() {
    this.publicaciones = [];
  }

  static getInstance() {
    if (!MuroGeneral.instance) {
      MuroGeneral.instance = new MuroGeneral();
    }
    return MuroGeneral.instance;
  }

  agregarPublicacion(
    descripcion: string,
    contenido: string,
    espublico?: boolean
  ) {
    this.publicaciones.push(new Publicacion(descripcion, contenido, espublico));
  }

  setPublicacion(publicacion: Publicacion) {
    this.publicaciones.push(publicacion);
  }
}
