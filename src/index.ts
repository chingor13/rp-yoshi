// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {registerReleaseType} from 'release-please';
import {DotnetYoshi} from './strategies/dotnet-yoshi';
import {GoYoshi} from './strategies/go-yoshi';
import {JavaYoshi} from './strategies/java-yoshi';
import {JavaYoshiMonoRepo} from './strategies/java-yoshi-mono-repo';
import {PHPYoshi} from './strategies/php-yoshi';
import {RubyYoshi} from './strategies/ruby-yoshi';

export function init() {
  console.log('in plugin init');
  registerReleaseType('dotnet-yoshi', options => new DotnetYoshi(options));
  registerReleaseType('go-yoshi', options => new GoYoshi(options));
  registerReleaseType('java-yoshi', options => new JavaYoshi(options));
  registerReleaseType(
    'java-yoshi-mono-repo',
    options => new JavaYoshiMonoRepo(options)
  );
  registerReleaseType('php-yoshi', options => new PHPYoshi(options));
  registerReleaseType('ruby-yoshi', options => new RubyYoshi(options));
}
