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
import { GridChanges } from "src/worker/gamelogic/types";
import { Animator } from "../animator";
import { Renderer } from "../renderer";
export default class NoMotionAnimator implements Animator {
    private _numTilesX;
    private _numTilesY;
    private _renderer;
    constructor(_numTilesX: number, _numTilesY: number, _renderer: Renderer);
    readonly numTiles: number;
    updateCells(changes: GridChanges): void;
    stop(): void;
    private _renderCell;
}
//# sourceMappingURL=index.d.ts.map