import { GumballMachine } from './gumbleMachine';

const gumballMachine: GumballMachine = new GumballMachine(5);

gumballMachine.toString();

gumballMachine.insertQuarter();
gumballMachine.turnCrank();

gumballMachine.toString();

gumballMachine.insertQuarter();
gumballMachine.turnCrank();
gumballMachine.insertQuarter();
gumballMachine.turnCrank();

gumballMachine.toString();
