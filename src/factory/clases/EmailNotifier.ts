import { INotifier } from '../interfaces/INotifier';

export class EmailNotifier implements INotifier {
  send(to: string, message: string): string {
    return `[Email] A: ${to} - ${message}`;
  }
}
