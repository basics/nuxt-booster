import { Observable } from 'rxjs';
import { mergeMap, share } from 'rxjs/operators';
import Deferred from '../Deferred';

export default class IntersectionObservable {
  constructor (options) {
    this.observer = new Deferred();

    this.observable = new Observable((observer) => {
      const intersectionObserver = new global.IntersectionObserver(entries => observer.next(entries), options);
      this.observer.resolve(intersectionObserver);
      return () => intersectionObserver.disconnect();
    }).pipe(
      mergeMap(entries => entries),
      share()
    );
  }
}
