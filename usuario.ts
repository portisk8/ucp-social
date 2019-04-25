import { Album } from "./album";
export class Usuario {
  public nombre: string;
  public apellido: string;
  // public imagen: string;
  public intereses: Array<string>;
  public correo: string;
  public verificado: boolean;
  public verificador: string;
  public albums: Array<Album>;

  constructor(correo: string) {
    this.setCorreo(correo);
    this.albums = [];
  }

  setCorreo(correo: string) {
    this.correo = correo;
  }

  generarEnlaceVerificador() {
    let guid = (
      this.S4() +
      this.S4() +
      "-" +
      this.S4() +
      "-4" +
      this.S4().substr(0, 3) +
      "-" +
      this.S4() +
      "-" +
      this.S4() +
      this.S4() +
      this.S4()
    ).toLowerCase();
    this.verificador = guid;
    return `api/verificar/${guid}`;
  }

  agregarAlbum(nombre: string) {
    this.albums.push(new Album(nombre));
  }
  quitarAlbum(nombre: string) {
    this.albums.forEach((item, index) => {
      if (item.nombre === nombre) {
        this.albums.splice(index, 1);
      }
    });
  }
  obtenerAlbum(nombre: string): Album {
    var album = null;
    this.albums.forEach((item, index) => {
      if (item.nombre === nombre) {
        album = item;
      }
    });
    return album;
  }

  //Private Classes
  private S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
}
