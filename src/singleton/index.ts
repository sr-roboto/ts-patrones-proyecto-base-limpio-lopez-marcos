import { ConexionDB } from './clases/ConexionDB';

export function runSingleton(): void {
  const db = ConexionDB.obtenerInstancia('oaaaaaa', 1234, 'ruchinsky');
  db.conectar();
  db.desconectar();
}
