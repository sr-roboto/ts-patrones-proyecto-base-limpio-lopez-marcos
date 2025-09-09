import { INotifier } from '../interfaces/INotifier';

export class SmsNotifier implements INotifier {
  public send(to: string, message: string): string {
    return `[SMS] A: ${to} - ${message}`;
  }
}
