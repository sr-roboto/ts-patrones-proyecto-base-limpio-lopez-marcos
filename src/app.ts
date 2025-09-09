import { runObserver } from './observer/index';
import { runAdapter } from './adapter';
import { runSingleton } from './singleton/index';
import { runFactory } from './factory';

(async () => {
  await runObserver();
  await runAdapter();
  await runSingleton();
  await runFactory();
})();
