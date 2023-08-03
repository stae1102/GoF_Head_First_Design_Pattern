import { CaffeinBeverageWithHook } from './caffeinBeverageWithHook';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export class CoffeeWithHook extends CaffeinBeverageWithHook {
  public brew(): void {
    console.log('필터로 커피를 우려내는 중');
  }

  public addCondiments(): void {
    console.log('설탕과 우유를 추가하는 중');
  }

  public customerWantsCondiments(): boolean {
    const answer: string = this.getUserInput();

    if (answer.toLowerCase().startsWith('y')) {
      return true;
    } else {
      return false;
    }
  }

  public getUserInput(): string {
    let answer: string | null = null;

    rl.question('커피에 우유와 설탕을 넣을까요? (y/n)', function (_answer) {
      answer = _answer;
      rl.close();
    });

    if (answer === null) {
      return 'no';
    }

    return answer;
  }
}
