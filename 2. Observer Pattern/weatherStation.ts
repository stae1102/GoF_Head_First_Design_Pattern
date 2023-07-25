export interface Subject {
  registerObserver: (observer: Observer) => void; // 옵저버 등록
  removeObserver: (observer: Observer) => void; // 옵저버 삭제
  notifyObservers: () => void; // 주제의 상태가 변경되었을 때, 모든 옵저버에게 변경 내용을 알림
}

// 옵저버 interface는 옵저버 클래스에서 구현해야 하며 즉, update 메서드를 구현해야 한다.
export interface Observer {
  update: (temp: number, humidity: number, pressure: number) => void;
}

// 디스플레이 항목을 화면에 표시하기 위함
export interface DisplayElement {
  display: () => void;
}
