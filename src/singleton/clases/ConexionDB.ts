import { IConexionDB } from '../interfaces/IConexionDB';
export class ConexionDB implements IConexionDB {
  private static instancia: ConexionDB;

  private constructor() {
    console.log('Conexión a la base de datos establecida.');
  }
  public static obtenerInstancia(): ConexionDB {
    if (!ConexionDB.instancia) {
      ConexionDB.instancia = new ConexionDB();
    }
    return ConexionDB.instancia;
  }

  public conectar(): void {
    console.log('Conectado a la base de datos.');
  }

  public desconectar(): void {
    console.log('Desconectado de la base de datos.');
  }
}
