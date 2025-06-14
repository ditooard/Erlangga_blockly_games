/**
 * @license
 * Copyright 2014 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview JavaScript for correctly linking the title link.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

(function() {
  // Change the 'Blockly Games' link when served as raw HTML files.
  // Append the language.
  var IS_HTML = !!window.location.pathname.match(/\.html$/);
  document.getElementById('back').href =
      (IS_HTML ? '' : '/') + location.search;
})();
