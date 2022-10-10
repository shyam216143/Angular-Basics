import { Component, OnDestroy, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { interval, map, Observable, Subject, Subscription, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit,OnDestroy {
  promise : Promise<{}>
  observable  : Observable<number>; 
  observableData! : number;
  public chartData!: Data[];
  observableNumber!: Observable<number>;
  latestValue!: number;
  unsubscribe$: Subject<void> = new Subject<void>();
  subscriptionToObservableNumber!: Subscription;
  constructor() {
    this.promise = this.promisefunc();
    this.observable= this.observablefunc()
     this.subscribeObservable()
  }
 
  ngOnInit(): void {
 
    this.observableNumber = Observable.create((observer:any) => {
      // initialize value of temp variable 'val' with 0
      let val = 0;
      const interval = setInterval(() => {
        // observer.next will announce the change made in 'val
        // by 'observableNumber'
        observer.next(val);
        // increment value of 'val' after every 1 sec
        val++;
      }, 1000);
      return () => clearInterval(interval);
    });
    // this.observableNumber.subscribe(value => {
    //   // this subscription make sure to have latest value always
    //   this.latestValue = value;
    // }); ///or
    this.subscriptionToObservableNumber = this.observableNumber.subscribe(value => {
      // this subscription make sure to have latest value always
      this.latestValue = value;
    });
    this.observableNumber
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(value => {
      this.latestValue = value;
    });
    
  }

  promisefunc() { 
    return new Promise<{}>((resolve, reject) => {
      setTimeout(() => {
        resolve("This is promises")
      }, 4000);
    });
  }
  observablefunc(){
    return interval(1000).pipe(take(5), map(value =>value+1))
  
  }

  subscribeObservable(){
    // this.observable.subscribe(value => this.observableData = value )
    this.observablefunc().subscribe(value => this.observableData = value)
  }  
  
  
  // ngOnDestroy executes when component is destroyed
  ngOnDestroy() {
    // unsubscribe when the component is destroyed
    this.subscriptionToObservableNumber.unsubscribe();
     // unsubscribe when the component is destroyed
     this.unsubscribe$.next();
     this.unsubscribe$.complete();
  }

  
}
