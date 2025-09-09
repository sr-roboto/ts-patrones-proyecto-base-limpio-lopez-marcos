import { EmailNotifier } from './EmailNotifier';
import { SmsNotifier } from './SmsNotifier';
import { WhatsappNotifier } from './WhatsappNotifier';

export class NotifierFactory {
  public create(channel: Channel) {
    if (channel === 'sms') {
      return new SmsNotifier();
    }
    if (channel === 'email') {
      return new EmailNotifier();
    } else {
      return new WhatsappNotifier();
    }
  }
}
