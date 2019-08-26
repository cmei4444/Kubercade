import { Component } from "preact";
import { PresetName } from "src/main/services/state/grid-presets";
declare type GridType = import("../../../preact-canvas").GridType;
export interface Props {
    onStartGame: (width: number, height: number, mines: number) => void;
    defaults?: GridType;
    motion: boolean;
}
interface State {
    presetName?: PresetName | "custom";
    width?: number;
    height?: number;
    mines?: number;
}
export default class Intro extends Component<Props, State> {
    private _presetSelect?;
    private _widthInput?;
    private _heightInput?;
    private _minesInput?;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps({ defaults }: Props): void;
    render({ motion }: Props, { width, height, mines, presetName }: State): JSX.Element;
    private _onKeyUp;
    private _onSelectChange;
    private _onSettingInput;
    private _startGame;
}
export {};
//# sourceMappingURL=index.d.ts.map