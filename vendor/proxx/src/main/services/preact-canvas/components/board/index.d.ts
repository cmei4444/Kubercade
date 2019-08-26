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
import { Animator } from "src/main/rendering/animator";
import { Renderer } from "src/main/rendering/renderer";
import { Cell } from "src/worker/gamelogic/types";
import { GameChangeCallback } from "../../index";
export interface Props {
    onCellClick: (cell: [number, number, Cell], alt: boolean) => void;
    width: number;
    height: number;
    renderer: Renderer;
    animator: Animator;
    dangerMode: boolean;
    gameChangeSubscribe: (f: GameChangeCallback) => void;
    gameChangeUnsubscribe: (f: GameChangeCallback) => void;
    onDangerModeChange: (v: boolean) => void;
}
interface State {
    keyNavigation: boolean;
}
export default class Board extends Component<Props, State> {
    state: State;
    private _canvas?;
    private _table?;
    private _buttons;
    private _firstCellRect?;
    private _additionalButtonData;
    private _currentFocusableBtn?;
    private _tableContainer?;
    componentDidMount(): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(): boolean;
    render(): JSX.Element;
    private _onWindowResize;
    private _onTableScroll;
    private _onGlobalKeyUp;
    private _doManualDomHandling;
    private _createTable;
    private _rendererInit;
    private _queryFirstCellRect;
    private removeFocusVisual;
    private setFocusVisual;
    private setFocus;
    private scrollBtnIntoView;
    private moveFocusWithMouse;
    private moveFocusByKey;
    private onKeyUpOnTable;
    private onKeyDownOnTable;
    private onMouseUp;
    private onMouseDown;
    private _toggleDangerMode;
    private onDblClick;
    private simulateClick;
    private _updateButton;
}
export {};
//# sourceMappingURL=index.d.ts.map