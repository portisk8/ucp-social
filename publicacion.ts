export class Publicacion {
  public descripcion: string;
  public fecha: string;
  public contenido: string;
  public espublico: boolean;

  constructor(descripcion: string, contenido: string, espublico?: boolean) {
    this.setDescripcion(descripcion);
    this.setContenido(contenido);
    if (espublico) {
      this.setEsPublico(espublico);
    } else {
      this.setEsPublico(false);
    }
    this.fecha = Date.now().toLocaleString();
  }

  setDescripcion(descripcion: string) {
    this.descripcion = descripcion;
  }
  setContenido(contenido: string) {
    this.contenido = contenido;
  }
  setEsPublico(espublico: boolean) {
    this.espublico = espublico;
  }
}
