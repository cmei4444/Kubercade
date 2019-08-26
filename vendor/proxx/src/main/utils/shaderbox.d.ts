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
export declare function setShader(gl: WebGLRenderingContext, program: WebGLProgram, type: number, src: string): void;
declare type Color = [number, number, number, number];
interface Mesh {
    data?: ArrayBuffer;
    dimensions: number;
    name: string;
    usage?: "STATIC_DRAW" | "DYNAMIC_DRAW";
}
export interface ShaderBoxOpts {
    canvas?: HTMLCanvasElement;
    scaling: number;
    timing: (ts: number) => number;
    uniforms: string[];
    antialias: boolean;
    alpha: boolean;
    mesh: Mesh[];
    indices: number[];
    clearColor: Color;
}
export interface AddTextureOpts {
    interpolation: "LINEAR" | "NEAREST";
}
export default class ShaderBox {
    private _vertexShader;
    private _fragmentShader;
    readonly canvas: HTMLCanvasElement;
    private _gl;
    private _opts;
    private _uniformLocations;
    private _uniformValues;
    private _textures;
    private _vbos;
    constructor(_vertexShader: string, _fragmentShader: string, opts?: Partial<ShaderBoxOpts>);
    updateVBO(name: string, data: ArrayBuffer): void;
    resize(): void;
    hasUniform(name: string): boolean;
    readonly uniforms: string[];
    getUniform(name: string): number[] | undefined;
    setUniform1i(name: string, val: number): void;
    setUniform1f(name: string, val: number): void;
    setUniform2f(name: string, val: [number, number]): void;
    setUniform3f(name: string, val: [number, number, number]): void;
    setUniform4f(name: string, val: [number, number, number, number]): void;
    draw(): void;
    getUniformNames(): string[];
    activateTexture(name: string, unit: number): void;
    addTexture(name: string, imageData: TexImageSource, userOpts?: Partial<AddTextureOpts>): void;
    private _assertVBOExists;
    private _assertUniformExists;
    private _getUniformLocation;
}
export {};
//# sourceMappingURL=shaderbox.d.ts.map