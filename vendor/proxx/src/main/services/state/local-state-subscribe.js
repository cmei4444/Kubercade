/**
 * Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as tslib_1 from "tslib";
// WARNING: This module is part of the main bundle. Avoid adding to it if possible.
export default function localStateSubscribe(stateService, callback) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var comlinkProxy;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, import("../preact-canvas/lazy-load")];
                case 1:
                    comlinkProxy = (_a.sent()).comlinkProxy;
                    stateService.subscribe(comlinkProxy(callback));
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=local-state-subscribe.js.map