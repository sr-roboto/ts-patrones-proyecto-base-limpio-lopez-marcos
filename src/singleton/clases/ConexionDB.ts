import { IConexionDB } from '../interfaces/IConexionDB';
export class ConexionDB implements IConexionDB {
  private static instancia: ConexionDB;
  private conectado: boolean;

  private constructor(
    private host: string,
    private puerto: number,
    private usuario: string
  ) {
    this.conectado = false;
  }
  public static obtenerInstancia(
    host: string,
    puerto: number,
    usuario: string
  ): ConexionDB {
    if (!ConexionDB.instancia) {
      ConexionDB.instancia = new ConexionDB(host, puerto, usuario);
    } else {
      console.log('DB ya está conectada (Singleton).');
    }
    return ConexionDB.instancia;
  }

  public conectar(): void {
    if (!this.conectado) {
      console.log(
        `Conectado a DB → ${this.usuario}@${this.host}:${this.puerto}`
      );
      this.conectado = true;
    } else {
      console.log('DB ya está conectada (Singleton).');
    }
  }

  public desconectar(): void {
    if (this.conectado) {
      console.log('Desconectado de la DB.');
      this.conectado = false;
    } else {
      console.log('DB ya está desconectada.');
    }
  }
}
