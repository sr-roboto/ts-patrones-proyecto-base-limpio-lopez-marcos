import { ConexionDB } from './clases/ConexionDB';

export function runSingleton(): void {
  const db = ConexionDB.obtenerInstancia();
  db.conectar();
  db.desconectar();
}
