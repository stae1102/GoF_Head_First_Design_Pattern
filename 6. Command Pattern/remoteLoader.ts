import { Light } from './light';
import { CeilingFan } from './ceilingFan';
import { GarageDoor } from './garageDoor';
import { Stereo } from './stereo';
import { LightOnCommand } from './lightOnCommand';
import { LightOffCommand } from './lightOffCommand';
import { CeilingFanOnCommand } from './ceilingFanOnCommand';
import { CeilingFanOffCommand } from './ceilingFanOffCommand';
import { GarageDoorUpCommand } from './garageDoorUpCommand';
import { GarageDoorDownCommand } from './garageDoorDownCommand';
import { StereoOnWithCDCommand } from './stereoOnWithCDCommand';
import { StereoOffCommand } from './stereoOffCommand';
import { RemoteControl } from './remoteControl';

const remoteControl: RemoteControl = new RemoteControl(); // 리모컨 인보커

/**
 * 리시버 초기화
 */
const livingRoomLight: Light = new Light('거실'); // 거실 조명 리시버
const kitchenLight: Light = new Light('주방'); // 주방 조명 리시버
const ceilingFan: CeilingFan = new CeilingFan('거실'); // 거실 선풍기 리시버
const garageDoor: GarageDoor = new GarageDoor('차고'); // 차고 리시버
const stereo: Stereo = new Stereo('거실'); // 거실 오디오 리시버

/**
 * 조명용 커맨드 객체
 */
const livingRoomLightOn = new LightOnCommand(livingRoomLight); // 거실 조명 켜는 커맨드 객체
const livingRoomLightOff = new LightOffCommand(livingRoomLight); // 거실 조명 끄는 커맨드 객체
const kitchenLightOn = new LightOnCommand(kitchenLight); // 주방 조명 켜는 커맨드 객체
const kitchenLightOff = new LightOffCommand(kitchenLight); // 주방 조명 끄는 커맨드 객체

/**
 * 선풍기 커맨드 객체
 */
const ceilingFanOn = new CeilingFanOnCommand(ceilingFan); // 선풍기 켜는 커맨드 객체
const ceilingFanOff = new CeilingFanOffCommand(ceilingFan); // 선풍기 끄는 커맨드 객체

/**
 * 차고 커맨드 객체
 */
const garageDoorUp: GarageDoorUpCommand = new GarageDoorUpCommand(garageDoor); // 차고 문 여는 커맨드 객체
const garageDownDown: GarageDoorDownCommand = new GarageDoorDownCommand(
  garageDoor
); // 차고 문 닫는 커맨드 객체

/**
 * 오디오 커맨드 객체
 */
const stereoOnWithCD: StereoOnWithCDCommand = new StereoOnWithCDCommand(stereo); // CD와 함께 오디오를 켜는 커맨드 객체
const stereoOff: StereoOffCommand = new StereoOffCommand(stereo); // 오디오를 끄는 커맨드 객체

/**
 * 인보커에 커맨드 객체 등록 -> 리모컨 슬롯에 커맨드 로드
 */
remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff); // 거실 커맨드 등록
remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff); // 주방 커맨드 등록
remoteControl.setCommand(2, ceilingFanOn, ceilingFanOff); // 선풍기 커맨드 등록
remoteControl.setCommand(3, stereoOnWithCD, stereoOff); // 오디오 커맨드 등록

console.log(remoteControl.toString());

remoteControl.onButtonWasPushed(0);
remoteControl.offButtonWasPushed(0);
remoteControl.onButtonWasPushed(1);
remoteControl.offButtonWasPushed(1);
remoteControl.onButtonWasPushed(2);
remoteControl.offButtonWasPushed(2);
remoteControl.onButtonWasPushed(3);
remoteControl.offButtonWasPushed(3);
