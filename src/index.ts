import {JavaYoshiMonoRepo} from './strategies/java-yoshi-mono-repo';
import {registerReleaseType, BaseStrategyOptions} from 'release-please';

export function init() {
  console.log('in plugin init');
  registerReleaseType(
    'java-yoshi-mono-repo',
    options => new JavaYoshiMonoRepo(options)
  );
}
