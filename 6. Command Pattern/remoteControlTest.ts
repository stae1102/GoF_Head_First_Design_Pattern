import { GarageDoor } from './garageDoor';
import { GarageDoorUpCommand } from './garageDoorUpCommand';
import { Light } from './light';
import { LightOnCommand } from './lightOnCommand';
import { SimpleRemoteControl } from './simpleRemoteControl';

const remote: SimpleRemoteControl = new SimpleRemoteControl(); // 리모컨 인보커
const light: Light = new Light(''); // 조명 리시버
const garageDoor: GarageDoor = new GarageDoor(''); // 차고 리시버
const lightOn = new LightOnCommand(light); // 조명 커맨드 객체
const garageOpen: GarageDoorUpCommand = new GarageDoorUpCommand(garageDoor); // 차고 커맨드 객체

remote.setCommand(lightOn); // 조명 커맨드 객체를 인보커에 전달
remote.buttonWasPressed(); // 리시버에 있는 조명 켜는 행동 메서드 호출
remote.setCommand(garageOpen); // 차고 커맨드 객체를 인보커에 전달
remote.buttonWasPressed(); // 리시버에 있는 차고 여는 행동 메서드 호출
