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
import { Cell } from "src/worker/gamelogic/types";
import { AnimationDesc } from "../animation";
import { Renderer } from "../renderer";
export default class WebGlRenderer implements Renderer {
    private _canvas?;
    private _dynamicTileDataB?;
    private _dynamicTileDataA?;
    private _shaderBox?;
    private _numTilesX?;
    private _numTilesY?;
    private _lastFocus;
    private _tileSize?;
    private _renderLoopRunning;
    createCanvas(): HTMLCanvasElement;
    init(numTilesX: number, numTilesY: number): void;
    updateFirstRect(rect: ClientRect | DOMRect): void;
    stop(): void;
    onResize(): void;
    beforeUpdate(): void;
    afterUpdate(): void;
    beforeCell(x: number, y: number, cell: Cell, animationList: AnimationDesc[], ts: number): void;
    afterCell(x: number, y: number, cell: Cell, animationList: AnimationDesc[], ts: number): void;
    render(x: number, y: number, cell: Cell, animation: AnimationDesc, ts: number): void;
    setFocus(x: number, y: number): void;
    private _updateFadeoutParameters;
    private _updateTileSize;
    private _updateDynamicTileData;
    private [AnimationName.IDLE];
    private [AnimationName.FLAGGED];
    private [AnimationName.NUMBER];
    private [AnimationName.HIGHLIGHT_IN];
    private [AnimationName.HIGHLIGHT_OUT];
    private [AnimationName.FLASH_IN];
    private [AnimationName.FLASH_OUT];
    private [AnimationName.MINED];
    private _getDynamicTileDataAForTile;
    private _getDynamicTileDataBForTile;
    private _initShaderBox;
    private _updateGridMesh;
    private _setupMesh;
    private _setupTextures;
    private _startRenderLoop;
    private _assertShaderBox;
    private _renderLoop;
}
//# sourceMappingURL=index.d.ts.map