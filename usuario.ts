import { Album } from "./album";
import { Imagen } from "./imagen";

export class Usuario {
  public nombre: string;
  public apellido: string;
  // public imagen: string;
  public intereses: Array<string>;
  public correo: string;
  public verificado: boolean;
  public verificador: string;
  public albums: Array<Album>;
  public fotoPerfil: Imagen;

  constructor(correo: string) {
    this.setCorreo(correo);
    this.albums = [];
    this.agregarAlbum("Fotos de Perfil");
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
    var album = this.obtenerAlbum(nombre);
    if (!album) {
      this.albums.push(new Album(nombre));
    }
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

  agregarImagen(albumNombre: string, imagen: Imagen) {
    this.obtenerAlbum(albumNombre).agregarImagen(imagen);
  }
  quitarImagen(albumNombre: string, imagenNombre: string) {
    this.obtenerAlbum(albumNombre).quitarImagen(imagenNombre);
  }

  asignarCaratula(albumNombre: string, imagenNombre: string) {
    this.obtenerAlbum(albumNombre).asignarCaratula(imagenNombre);
  }

  asignarFotoPerfil(nombreImagen: string) {
    var imagen = this.obtenerAlbum("Fotos de Perfil").obtenerImagen(
      nombreImagen
    );
    if (imagen) this.fotoPerfil = imagen;
  }

  //Private Classes
  private S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
}
