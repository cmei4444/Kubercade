import { Component } from "preact";
declare type GameStateChange = import("../../../worker/gamelogic").StateChange;
declare type GameType = import("../../../worker/state-service").GameType;
export interface GridType {
    width: number;
    height: number;
    mines: number;
}
interface Props {
}
interface State {
    game?: GameType;
    gridDefaults?: GridType;
    bestTime?: number;
    dangerMode: boolean;
    awaitingGame: boolean;
    settingsOpen: boolean;
    motionPreference: boolean;
    gameInPlay: boolean;
    allowIntroAnim: boolean;
    vibrationPreference: boolean;
}
export declare type GameChangeCallback = (stateChange: GameStateChange) => void;
export default class Root extends Component<Props, State> {
    state: State;
    private previousFocus;
    private _gameChangeSubscribers;
    private _awaitingGameTimeout;
    private _stateService?;
    constructor();
    componentDidMount(): void;
    render(_: Props, { game, dangerMode, awaitingGame, gridDefaults, settingsOpen, motionPreference, gameInPlay, bestTime, allowIntroAnim, vibrationPreference }: State): JSX.Element;
    private _nebulaLightColor;
    private _nebulaDarkColor;
    private _onMotionPrefChange;
    private _onVibrationPrefChange;
    private _onDangerModeChange;
    private _onGameChangeSubscribe;
    private _onGameChangeUnsubscribe;
    private _onSettingsCloseClick;
    private _onSettingsClick;
    private _onStartGame;
    private _onBackClick;
}
export {};
//# sourceMappingURL=index.d.ts.map