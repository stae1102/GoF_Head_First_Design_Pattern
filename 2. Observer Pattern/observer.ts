// 옵저버 interface는 옵저버 클래스에서 구현해야 하며 즉, update 메서드를 구현해야 한다.
export interface Observer {
  update: () => void;
}
