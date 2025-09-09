// import { runObserver } from './observer/index';
import { runAdapter } from './adapater/index';
import { runSingleton } from './singleton/index';
import { runFactory } from './factory/index';

(async () => {
  // await runObserver();
  await runAdapter();
  console.log();
  await runSingleton();
  console.log();
  await runFactory();
})();
