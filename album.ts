import { Imagen } from "./imagen";
export class Album {
  public nombre: string;
  public imagenes: Array<Imagen>;
  public caratula: Imagen;
  constructor(nombre: string) {
    this.setNombre(nombre);
    this.imagenes = [];
  }

  setNombre(nombre: string) {
    this.nombre = nombre;
  }

  agregarImagen(imagen: Imagen) {
    this.imagenes.push(imagen);
    if (!this.caratula) this.asignarCaratula(imagen.nombre);
  }

  quitarImagen(nombre: string) {
    this.imagenes.forEach((item, index) => {
      if (item.nombre === nombre) {
        this.imagenes.splice(index);
      }
    });
  }
  asignarCaratula(nombreImagen: string) {
    let imagen = this.obtenerImagen(nombreImagen);
    if (imagen) this.caratula = imagen;
  }

  obtenerImagen(nombreImagen: string) {
    var imagen = null;
    this.imagenes.forEach((item, index) => {
      if (item.nombre === nombreImagen) {
        imagen = item;
      }
    });
    return imagen;
  }
}
