import * as tslib_1 from "tslib";
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
import { Component, h } from "preact";
import { bind } from "../../../../../utils/bind";
import { minSec } from "../../../../utils/format";
import { isFeaturePhone } from "../../../../utils/static-display";
import { getPresetName } from "../../../state/grid-presets";
import { Timer } from "../icons/additional";
import { againButton, againShortcutKey, gridName as gridNameStyle, mainButton, noMotion, score, scoreRow, shortcutKey, time as timeStyle, timeLabel, timerIcon, winInner, winScreen, winSquare, winState } from "./style.css";
var End = /** @class */ (function (_super) {
    tslib_1.__extends(End, _super);
    function End(props) {
        var _this = _super.call(this, props) || this;
        var width = props.width, height = props.height, mines = props.mines;
        var presetName = getPresetName(width, height, mines);
        _this.state = {
            gridName: presetName +
                " mode" +
                (presetName === "custom" ? " - " + width + "x" + height + ":" + mines : "")
        };
        return _this;
    }
    End.prototype.componentDidMount = function () {
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 0);
        this._playAgainBtn.focus();
        window.addEventListener("keyup", this.onKeyUp);
    };
    End.prototype.componentWillUnmount = function () {
        window.removeEventListener("keyup", this.onKeyUp);
    };
    End.prototype.render = function (_a, _b) {
        var _this = this;
        var onRestart = _a.onRestart, onMainMenu = _a.onMainMenu, time = _a.time, bestTime = _a.bestTime, useMotion = _a.useMotion;
        var gridName = _b.gridName;
        var timeStr = minSec(time);
        var bestTimeStr = minSec(bestTime);
        return (h("div", { class: winScreen },
            h("div", { class: winInner },
                h("div", { class: [winSquare, useMotion ? "" : noMotion].join(" ") },
                    h("div", null,
                        h("div", null,
                            h("div", null,
                                h("div", null,
                                    h("div", null)))))),
                h("h2", { class: winState },
                    time === bestTime ? "New high score!" : "You win!",
                    " ",
                    h("span", { class: gridNameStyle },
                        "(",
                        gridName,
                        ")")),
                h("div", { class: scoreRow },
                    h("div", { class: score },
                        h("div", { class: timeLabel }, "Score"),
                        h("div", { class: timeStyle }, timeStr)),
                    h(Timer, { class: timerIcon }),
                    h("div", { class: score },
                        h("div", { class: timeLabel }, "Best"),
                        h("div", { class: timeStyle }, bestTimeStr))),
                h("button", { class: againButton, onClick: onRestart, ref: function (el) { return (_this._playAgainBtn = el); } },
                    isFeaturePhone && (h("span", { class: [shortcutKey, againShortcutKey].join(" ") }, "#")),
                    " ",
                    "Play again"),
                h("button", { class: mainButton, onClick: onMainMenu },
                    isFeaturePhone ? h("span", { class: shortcutKey }, "*") : "",
                    " Main menu"))));
    };
    End.prototype.onKeyUp = function (event) {
        if (event.key === "#") {
            this.props.onRestart();
        }
        else if (event.key === "*") {
            this.props.onMainMenu();
        }
    };
    tslib_1.__decorate([
        bind
    ], End.prototype, "onKeyUp", null);
    return End;
}(Component));
export default End;
//# sourceMappingURL=index.js.map