import { CaffeinBeverageWithHook } from './caffeinBeverageWithHook';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export class TeaWithHook extends CaffeinBeverageWithHook {
  public brew(): void {
    console.log('찻잎을 우려내는 중');
  }

  public addCondiments(): void {
    console.log('레몬을 추가하는 중');
  }

  public customerWantsCondiments(): boolean {
    const answer: string = this.getUserInput();

    console.log(answer);

    if (answer.toLowerCase().startsWith('y')) {
      return true;
    } else {
      return false;
    }
  }

  public getUserInput(): string {
    let answer: string | null = null;

    rl.question('차에 레몬을 넣을까요? (y/n)', function (_answer) {
      answer = _answer;
      rl.close();
    });

    if (answer === null) {
      return 'no';
    }

    return answer;
  }
}
