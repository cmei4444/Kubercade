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
import { Component } from "preact";
import { PlayMode } from "../../../../../worker/gamelogic/types";
export interface Props {
    toRevealTotal?: number;
    toReveal?: number;
    timerRunning?: boolean;
    playMode?: PlayMode;
    useMotion?: boolean;
    showBestTime?: boolean;
    bestTime?: number;
}
export interface State {
}
export default class TopBar extends Component<Props, State> {
    render({ toReveal, toRevealTotal, timerRunning, playMode, useMotion, bestTime, showBestTime }: Props): JSX.Element;
}
//# sourceMappingURL=index.d.ts.map