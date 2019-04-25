import { Imagen } from "./imagen";
export class Album {
  public nombre: string;
  public imagenes: Array<Imagen>;
  constructor(nombre: string) {
    this.setNombre(nombre);
    this.imagenes = [];
  }

  setNombre(nombre: string) {
    this.nombre = nombre;
  }

  agregarImagen(imagen: Imagen) {
    this.imagenes.push(imagen);
  }
}
