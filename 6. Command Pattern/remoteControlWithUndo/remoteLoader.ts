import { Light } from './light';
import { LightOnCommand } from './lightOnCommand';
import { LightOffCommand } from './lightOffCommand';
import { RemoteControlWithUndo } from './remoteControlWithUndo';

const remoteControl: RemoteControlWithUndo = new RemoteControlWithUndo(); // 리모컨 인보커

/**
 * 리시버 초기화
 */
const livingRoomLight: Light = new Light('거실'); // 거실 조명 리시버

/**
 * 조명용 커맨드 객체
 */
const livingRoomLightOn = new LightOnCommand(livingRoomLight); // 거실 조명 켜는 커맨드 객체
const livingRoomLightOff = new LightOffCommand(livingRoomLight); // 거실 조명 끄는 커맨드 객체

/**
 * 인보커에 커맨드 객체 등록 -> 리모컨 슬롯에 커맨드 로드
 */
remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff); // 거실 커맨드 등록

remoteControl.onButtonWasPushed(0);
remoteControl.offButtonWasPushed(0);
console.log(remoteControl.toString());
remoteControl.undoButtonWasPushed();
remoteControl.offButtonWasPushed(0);
remoteControl.onButtonWasPushed(0);
console.log(remoteControl.toString());
remoteControl.undoButtonWasPushed();
