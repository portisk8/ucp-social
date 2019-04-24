export class Usuario {
  public nombre: string;
  public apellido: string;
  // public imagen: string;
  public intereses: Array<string>;
  public correo: string;
  public verificado: boolean;
  public verificador: string;

  constructor(correo: string) {
    this.setCorreo(correo);
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

  private S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
}
