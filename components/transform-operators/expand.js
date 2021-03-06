import { fromEvent, of } from 'rxjs';
import { mapTo, expand, delay, take } from 'rxjs/operators';
// 递归地将每个源值投射成 Observable，这个 Observable 会被合并到输出 Observable 中。
// 它与 mergeMap 类似，但将投射函数应用于每个源值 以及每个输出值。它是递归的。
{
    var clicks$ = fromEvent(document, 'click');
    var result$ = clicks$.pipe(mapTo(1), expand(function (val) { return of(2 * val).pipe(delay(1000)); }), take(10));
    // 每次点击开始发出的值都是乘以2的，最多连乘10次
    result$.subscribe(function (val) { return console.log(val); });
}
//# sourceMappingURL=expand.js.map