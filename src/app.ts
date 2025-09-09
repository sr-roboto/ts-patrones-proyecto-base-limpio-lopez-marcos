import { runObserver } from './observer/index';
import { runAdapter } from './adapter';
import { runSingleton } from './singleton/index';
import { runFactory } from './factory/index';

(async () => {
  await runObserver();
  await runAdapter();
  await runSingleton();
  await runFactory();
})();
