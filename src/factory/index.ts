import { NotifierFactory } from './clases/NotifierFactory';

export function runFactory() {
  const notifier = new NotifierFactory();
  const mensaje1 = notifier.create('email');
  const mensaje2 = notifier.create('sms');
  const mensaje3 = notifier.create('whatsapp');
  mensaje1.send('ana@mail.com', 'Recordatorio de clase a las 10:00');
  mensaje2.send('+5493700000000', 'Tu nota de TP1 ya está disponible.');
  mensaje3.send('+5493700000000', 'Se reprogramó la clase para mañana 9:00.');
}
