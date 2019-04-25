export class Imagen {
  public nombre: string;
  public contenido: string;

  constructor(nombre: string, contenido: string) {
    this.setNombre(nombre);
    this.setContenido(contenido);
  }

  setNombre(nombre: string) {
    this.nombre = nombre;
  }
  setContenido(contenido: string) {
    this.contenido = contenido;
  }
}
