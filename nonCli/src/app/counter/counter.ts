import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export class Counter {
  
  private _count = 0;
  private _value = new BehaviorSubject<number>(this._count);

  increment() {
    if (this){
      this._value.next(++this._count);
    }else{
      this._value.next(++this._count);
    }
  }

  decrement() {
    this._value.next(--this._count);
  }

  get value(): Observable<number> {
    return this._value.asObservable();
  }
}
