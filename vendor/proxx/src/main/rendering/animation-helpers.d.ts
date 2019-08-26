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
import { AnimationDesc, AnimationName } from "./animation";
export declare function deg2rad(deg: number): number;
export declare function easeInQuad(t: number): number;
export declare function easeOutQuad(t: number): number;
export declare function easeInOutQuad(t: number): number;
export declare function easeInCubic(t: number): number;
export declare function easeOutCubic(t: number): number;
export declare function easeInOutCubic(t: number): number;
export declare function easeInExpo(t: number): number;
export declare function easeOutExpo(t: number): number;
export declare function easeInOutExpo(t: number): number;
export declare function remap(minIn: number, maxIn: number, minOut: number, maxOut: number, v: number): number;
export declare function clamp(v: number): number;
export declare function clampedRemap(minIn: number, maxIn: number, minOut: number, maxOut: number, v: number): number;
export declare function smoothpulse(inStart: number, inEnd: number, outStart: number, outEnd: number, v: number): number;
export declare function removeAnimations(al: AnimationDesc[], names: AnimationName[]): AnimationDesc[];
//# sourceMappingURL=animation-helpers.d.ts.map