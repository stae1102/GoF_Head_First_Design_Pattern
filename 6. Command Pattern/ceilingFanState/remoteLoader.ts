import { RemoteControlWithUndo } from './remoteControlWithUndo';
import { CeilingFan } from './ceilingFan';
import { CeilingFanMediumCommand } from './ceilingFanMediumCommand';
import { CeilingFanHighCommand } from './ceilingFanHighCommand';
import { CeilingFanOffCommand } from './ceilingFanOffCommand';

const remoteControl: RemoteControlWithUndo = new RemoteControlWithUndo(); // 리모컨 인보커

/**
 * 리시버 초기화
 */
const ceilingFan: CeilingFan = new CeilingFan('거실'); // 거실 선풍기 리시버 객체

/**
 * 선풍기 속도 커맨드 객체
 */
const ceilingFanMedium: CeilingFanMediumCommand = new CeilingFanMediumCommand(
  ceilingFan
);
const ceilingFanHigh: CeilingFanHighCommand = new CeilingFanHighCommand(
  ceilingFan
);
const ceilingFanOff: CeilingFanOffCommand = new CeilingFanOffCommand(
  ceilingFan
);

/**
 * 인보커에 커맨드 객체 등록 -> 리모컨 슬롯에 커맨드 로드
 */
remoteControl.setCommand(0, ceilingFanMedium, ceilingFanOff);
remoteControl.setCommand(1, ceilingFanHigh, ceilingFanOff);

remoteControl.onButtonWasPushed(0);
remoteControl.offButtonWasPushed(0);
console.log(remoteControl.toString());
remoteControl.undoButtonWasPushed();

remoteControl.onButtonWasPushed(1);
console.log(remoteControl.toString());
remoteControl.undoButtonWasPushed();
