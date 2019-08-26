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
import { Component } from "preact";
import { Color } from "src/main/rendering/constants";
export interface Props {
    colorLight: Color;
    colorDark: Color;
    useMotion: boolean;
}
interface State {
}
export default class Nebula extends Component<Props, State> {
    private _timePeriod;
    private _fadeSpeed;
    private _colorBlend;
    private _shaderBox?;
    private _loopRunning;
    private _prevColors;
    componentDidMount(): void;
    shouldComponentUpdate({ colorLight, colorDark, useMotion }: Props): boolean;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    componentDidUpdate(oldProps: Props): void;
    render({ colorLight, colorDark, useMotion }: Props): JSX.Element;
    private _initShaderbox;
    private _updateColors;
    private _start;
    private _stop;
    private _onResize;
    private _loop;
}
export {};
//# sourceMappingURL=index.d.ts.map