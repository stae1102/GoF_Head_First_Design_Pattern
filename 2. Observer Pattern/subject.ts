import { Observer } from './observer';

export interface Subject {
  registerObserver: (observer: Observer) => void; // 옵저버 등록
  removeObserver: (observer: Observer) => void; // 옵저버 삭제
  notifyObservers: () => void; // 주제의 상태가 변경되었을 때, 모든 옵저버에게 변경 내용을 알림
}
