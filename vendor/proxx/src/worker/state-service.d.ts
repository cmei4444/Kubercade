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
import { StateChange as GameStateChange } from "./gamelogic";
export interface GameType {
    id: number;
    width: number;
    height: number;
    mines: number;
    toRevealTotal: number;
}
export interface StateChange {
    game?: GameType;
    gameStateChange?: GameStateChange;
}
export default class StateService {
    private _eventTarget;
    private _game?;
    initGame(width: number, height: number, numBombs: number): void;
    subscribe(callback: (state: StateChange) => void): void;
    reset(): void;
    restart(): void;
    flag(x: number, y: number): void;
    unflag(x: number, y: number): void;
    reveal(x: number, y: number): void;
    revealSurrounding(x: number, y: number): void;
    private _notify;
}
//# sourceMappingURL=state-service.d.ts.map