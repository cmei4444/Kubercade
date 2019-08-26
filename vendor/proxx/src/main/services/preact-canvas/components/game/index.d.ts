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
import { Remote } from "comlink/src/comlink";
import { Component } from "preact";
import { Animator } from "src/main/rendering/animator";
import { Renderer } from "src/main/rendering/renderer";
import { GameChangeCallback } from "src/main/services/preact-canvas";
import { PlayMode } from "src/worker/gamelogic/types";
import StateService from "src/worker/state-service";
export interface Props {
    stateService: Remote<StateService>;
    width: number;
    height: number;
    mines: number;
    gameChangeSubscribe: (f: GameChangeCallback) => void;
    gameChangeUnsubscribe: (f: GameChangeCallback) => void;
    onDangerModeChange: (v: boolean) => void;
    dangerMode: boolean;
    toRevealTotal: number;
    useMotion: boolean;
    bestTime?: number;
    useVibration: boolean;
}
interface State {
    playMode: PlayMode;
    toReveal: number;
    startTime: number;
    endTime: number;
    renderer?: Renderer;
    animator?: Animator;
    completeTime: number;
    bestTime: number;
}
export default class Game extends Component<Props, State> {
    state: State;
    private _tryAgainBtn?;
    constructor(props: Props);
    render({ dangerMode, width, height, mines, gameChangeSubscribe, gameChangeUnsubscribe, toRevealTotal, useMotion, bestTime: previousBestTime }: Props, { playMode, toReveal, animator, renderer, completeTime, bestTime }: State): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(_: Props, previousState: State): void;
    private _init;
    private onKeyUp;
    private onReset;
    private onRestart;
    private onGameChange;
    private onCellClick;
}
export {};
//# sourceMappingURL=index.d.ts.map