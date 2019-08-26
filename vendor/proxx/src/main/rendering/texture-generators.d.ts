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
export declare type TextureGenerator = (idx: number, ctx: CanvasRenderingContext2D) => void;
export declare function idleAnimationTextureGeneratorFactory(textureSize: number, cellPadding: number, numFrames: number): TextureGenerator;
export declare const enum STATIC_TEXTURE {
    OUTLINE = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5,
    NUMBER_6 = 6,
    NUMBER_7 = 7,
    NUMBER_8 = 8,
    FLASH = 9,
    MINE = 10,
    FOCUS = 11,
    INNER_CIRCLE = 12,
    DOT = 13,
    LAST_MARKER = 14
}
export declare function staticTextureGeneratorFactory(textureSize: number, cellPadding: number): TextureGenerator;
//# sourceMappingURL=texture-generators.d.ts.map