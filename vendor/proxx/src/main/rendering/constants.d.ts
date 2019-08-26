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
export declare const spriteSize = 1024;
export declare const numInnerRects = 5;
export declare const rippleSpeed: number;
export declare type ShaderColor = [number, number, number, number];
export declare type Color = [number, number, number];
export declare function toShaderColor(x: Color): ShaderColor;
export declare const focusRing = "rgb(122, 244, 66)";
export declare const turquoise = "rgb(109, 205, 218)";
export declare const white = "#fff";
export declare const idleAnimationLength = 5000;
export declare const fadeInAnimationLength = 300;
export declare const fadeOutAnimationLength = 300;
export declare const flashInAnimationLength = 50;
export declare const flashOutAnimationLength = 300;
export declare const revealedAlpha = 0.3;
export declare const fadedLinesAlpha = 0.3;
export declare const safetyBufferFactor = 0.97;
export declare const thickLine: number;
export declare const thinLine: number;
export declare const borderRadius: number;
export declare const innerCircleRadius: number;
export declare const flagCircleRadius: number;
export declare const numberCircleRadius = 0.8;
export declare const numberFontSizeFactor = 0.45;
export declare const numberFontTopShiftFactor = 0.03;
export declare const glowFactor: number;
export declare const glowAlpha = 0.5;
export declare const blackHoleInnerRed = "255, 40, 75";
export declare const blackHoleOuterRed = "255, 34, 106";
export declare const blackHoleOuterRadius = 1;
export declare const blackHoleInnerRadius = 0.9;
export declare const blackHoleRadius = 0.75;
export declare const idleAnimationNumFrames: number;
//# sourceMappingURL=constants.d.ts.map