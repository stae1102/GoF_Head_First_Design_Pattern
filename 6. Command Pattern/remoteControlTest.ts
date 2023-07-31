import { Light } from './light';
import { LightOnCommand } from './lightOnCommand';
import { SimpleRemoteControl } from './simpleRemoteControl';

const remote: SimpleRemoteControl = new SimpleRemoteControl(); // 인보커
const light: Light = new Light(); // 리시버
const lightOn = new LightOnCommand(light); // 커맨드 객체

remote.setCommand(lightOn); // 커맨드 객체를 인보커에 전달
remote.buttonWasPressed(); // 리시버에 있는 행동 메서드 호출
