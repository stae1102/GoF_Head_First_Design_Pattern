import { Turkey } from './turkey';

export class WildTurkey implements Turkey {
  public gobble(): void {
    console.log('골골');
  }

  public fly(): void {
    console.log('짧은 거리를 날고 있어요!');
  }
}
