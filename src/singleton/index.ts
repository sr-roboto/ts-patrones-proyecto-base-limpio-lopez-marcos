import { ConexionDB } from './clases/ConexionDB';

export function runSingleton(): void {
  console.log('=== SINGLETON: ConexionDB de Inventario ===');
  const db = ConexionDB.obtenerInstancia('oaaaaaa', 1234, 'ruchinsky');
  db.conectar();
  db.conectar();
  db.desconectar();
  db.desconectar();
}
