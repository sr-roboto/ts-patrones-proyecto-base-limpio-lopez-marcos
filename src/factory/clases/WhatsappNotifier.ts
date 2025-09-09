import { INotifier } from '../interfaces/INotifier';

export class WhatsappNotifier implements INotifier {
  send(to: string, message: string): string {
    return `[whatsapp] A: ${to} - ${message}`;
  }
}
