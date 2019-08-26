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
import { Cell, GridChanges, PlayMode } from "./types";
export interface StateChange {
    flags?: number;
    toReveal?: number;
    playMode?: PlayMode;
    gridChanges?: GridChanges;
}
export declare type ChangeCallback = (changes: StateChange) => void;
export default class MinesweeperGame {
    private _width;
    private _height;
    private _mines;
    readonly toReveal: number;
    readonly width: number;
    readonly height: number;
    readonly mines: number;
    grid: Cell[][];
    private _playMode;
    private _toReveal;
    private _flags;
    private _changeCallback?;
    private _stateChange;
    private _minedCells;
    constructor(_width: number, _height: number, _mines: number);
    subscribe(callback: ChangeCallback): void;
    unsubscribe(): void;
    reveal(x: number, y: number): void;
    setFlag(x: number, y: number, flagged: boolean): void;
    /**
     * Reveal squares around the point. Returns true if successful.
     */
    attemptSurroundingReveal(x: number, y: number): boolean;
    private _flushStateChange;
    private _pushGridChange;
    private _setPlayMode;
    private _setToReveal;
    private _setFlags;
    private _endGame;
    private _placeMines;
    private _getSurrounding;
    /**
     * When the user loses, reveal all the mines.
     */
    private _revealAllMines;
    /**
     * @param x
     * @param y
     */
    private _reveal;
}
//# sourceMappingURL=index.d.ts.map