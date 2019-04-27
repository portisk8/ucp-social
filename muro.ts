import { Publicacion } from "./publicacion";
import { MuroGeneral } from "./muroGeneral";

export class Muro extends MuroGeneral {
  public publicaciones: Array<Publicacion>;

  constructor() {
    super();
  }

  agregarPublicacion(
    descripcion: string,
    contenido: string,
    espublico?: boolean
  ) {
    super.agregarPublicacion(descripcion, contenido, espublico);
    if (espublico) {
      MuroGeneral.getInstance().agregarPublicacion(
        descripcion,
        contenido,
        espublico
      );
    }
  }

  setPublicacion(publicacion: Publicacion) {
    this.publicaciones.push(publicacion);
    if (publicacion.espublico) {
      MuroGeneral.getInstance().setPublicacion(publicacion);
    }
  }
}
