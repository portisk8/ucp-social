export class Album {
  public nombre: string;

  constructor(nombre: string) {
    this.setNombre(nombre);
  }

  setNombre(nombre: string) {
    this.nombre = nombre;
  }
}
