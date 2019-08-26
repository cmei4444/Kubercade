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
import { TextureDrawer } from "./texture-cache";
export declare const enum AnimationName {
    IDLE = 0,
    FLASH_IN = 1,
    FLASH_OUT = 2,
    HIGHLIGHT_IN = 3,
    HIGHLIGHT_OUT = 4,
    NUMBER = 5,
    FLAGGED = 6,
    MINED = 7
}
export interface AnimationDesc {
    name: AnimationName;
    start: number;
    fadeStart?: number;
    done?: () => void;
}
export declare function processDoneCallback(animation: AnimationDesc): void;
export declare let textureTileSize: number | null;
export declare let idleAnimationTextureDrawer: TextureDrawer | null;
export declare let idleSprites: HTMLImageElement[] | null;
export declare let staticTextureDrawer: TextureDrawer | null;
export declare let staticSprites: HTMLImageElement[] | null;
export declare function lazyGenerateTextures(): Promise<void>;
//# sourceMappingURL=animation.d.ts.map