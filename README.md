[English](README.en.md) |  简体中文  

<p align="center">
    <img width="300" src="src/assets/img/yanyunchangfeng.png">
</p>

##  介绍
你好，我是徐晓东，笔名[燕云长风](https://yanyunchangfeng.com)。大漠穷秋于 2019-03-16 21:22 赠此笔名。   
寓意：结合李白著名的边塞诗《关山月》取【燕云长风】—— 长风几万里，吹度玉门关。

## RXJS讲解演示

## 创建类操作符

1.   [formEvent](src/app/create-operators/from-event.ts)   
2.   [from](src/app/create-operators/from.ts)   
3.   [of](src/app/create-operators/of.ts)   
4.   [interval](src/app/create-operators/interval.ts)   
5.   [timer](src/app/create-operators/timer.ts)   
6.   [never](src/app/create-operators/never.ts)   
7.   [throwError](src/app/create-operators/throw-error.ts)   
8.   [empty](src/app/create-operators/empty.ts)   
9.   [range](src/app/create-operators/range.ts)   
10.  [defer](src/app/create-operators/defer.ts)   
11.  [generate](src/app/create-operators/generate.ts)   
12.  [create](src/app/create-operators/create.ts)   
13.  [ajax](src/app/create-operators/ajax.ts)   
14.  [fromEventPattern](src/app/create-operators/from-event-pattern.ts)   

## 工具类操作符

1.  [tap](src/app/util-operators/tap.ts)   
2.  [delay](src/app/util-operators/delay.ts)   
3.  [delayWhen](src/app/util-operators/delay-when.ts)   
4.  [dematerialize](src/app/util-operators/dematerialize.ts)   
5.  [materialize](src/app/util-operators/materialize.ts)   
6.  [timeInterval](src/app/util-operators/time-interval.ts)   
7.  [timeout](src/app/util-operators/time-out.ts)   
8.  [timeoutWith](src/app/util-operators/time-out-with.ts)   
9.  [timestamp](src/app/util-operators/time-stamp.ts)   

## 过滤类操作符

1.  [debounceTime](src/app/filter-operators/debounce-time.ts)   
2.  [debounce](src/app/filter-operators/debounce.ts)   
3.  [distinct](src/app/filter-operators/distinct.ts)   
4.  [distinctUntilChanged](src/app/filter-operators/distinct-until-changed.ts)   
5.  [distinctUntilKeyChanged](src/app/filter-operators/distinct-until-key-changed.ts)   
6.  [filter](src/app/filter-operators/filter.ts)   
7.  [reduce](src/app/filter-operators/reduce.ts)   
8.  [scan](src/app/filter-operators/scan.ts)   
9.  [take](src/app/filter-operators/take.ts)   
10. [takeUtil](src/app/filter-operators/take-until.ts)   
11. [first](src/app/filter-operators/first.ts)   
12. [last](src/app/filter-operators/last.ts)   
13. [throttle](src/app/filter-operators/throttle.ts)   
14. [throttleTime](src/app/filter-operators/throttle-time.ts)   
15. [audit](src/app/filter-operators/audit.ts)   
16. [auditTime](src/app/filter-operators/audit-time.ts)   
17. [sample](src/app/filter-operators/sample.ts)   
18. [sampleTime](src/app/filter-operators/sample-time.ts)   
19. [single](src/app/filter-operators/single.ts)   
20. [skipLast](src/app/filter-operators/skip-last.ts)   
21. [elementAt](src/app/filter-operators/element-at.ts)   
22. [ignore-elements](src/app/filter-operators/ignore-elements.ts)   
23. [skipUntil](src/app/filter-operators/skip-until.ts)   
24. [takeWhile](src/app/filter-operators/take-while.ts)   
25. [skipWhile](src/app/filter-operators/skip-while.ts)   
26. [min](src/app/filter-operators/min.ts)   
27. [max](src/app/filter-operators/max.ts)   

## 转换类的操作符

1.  [map](src/app/transform-operators/map.ts) 
2.  [mapTo](src/app/transform-operators/map-to.ts) 
3.  [concatMap](src/app/transform-operators/concat-map.ts) 
4.  [concatMapTo](src/app/transform-operators/concat-map-to.ts) 
5.  [pluck](src/app/transform-operators/pluck.ts) 
6.  [buffer](src/app/transform-operators/buffer.ts) 
7.  [bufferCount](src/app/transform-operators/buffer-count.ts) 
8.  [bufferTime](src/app/transform-operators/buffer-time.ts) 
9.  [bufferToggle](src/app/transform-operators/buffer-toggle.ts) 
10. [bufferWhen](src/app/transform-operators/buffer-when.ts) 
11. [exhaustMap](src/app/transform-operators/exhaust-map.ts) 
12. [exhaust](src/app/transform-operators/exhaust.ts) 
13. [expand](src/app/transform-operators/expand.ts) 
14. [groupBy](src/app/transform-operators/group-by.ts) 
15. [pairwise](src/app/transform-operators/pairwise.ts) 
16. [partition](src/app/transform-operators/partition.ts) 
17. [window](src/app/transform-operators/window.ts) 
18. [windowCount](src/app/transform-operators/window-count.ts) 
19. [windowToggle](src/app/transform-operators/window-toggle.ts) 
20. [windowWhen](src/app/transform-operators/window-when.ts) 
21. [windowTime](src/app/transform-operators/window-time.ts) 
22. [repeat](src/app/transform-operators/repeat.ts) 
23. [repeatWhen](src/app/transform-operators/repeat-when.ts) 
24. [toArray](src/app/transform-operators/to-array.ts) 


## 合并类的操作符

1.   [combineLatest](src/app/merge-operators/combine-latest.ts) 
2.   [concat](src/app/merge-operators/concat.ts) 
3.   [merge](src/app/merge-operators/merge.ts) 
4.   [startWith](src/app/merge-operators/start-with.ts) 
5.   [zip](src/app/merge-operators/zip.ts) 
6.   [withLatestFrom](src/app/merge-operators/with-latest-from.ts) 
7.   [race](src/app/merge-operators/race.ts) 
8.   [combineAll](src/app/merge-operators/combine-all.ts) 
9.   [concatAll](src/app/merge-operators/concat-all.ts) 
10.  [endWith](src/app/merge-operators/end-with.ts) 
11.  [forkJoin](src/app/merge-operators/fork-join.ts) 

## 条件类的操作符

1.  [defaultIfEmpty](src/app/conditional-operators/default-if-empty.ts)  
2.  [iif](src/app/conditional-operators/iif.ts) 
3.  [find](src/app/conditional-operators/find.ts) 
4.  [findIndex](src/app/conditional-operators/find-index.ts) 
5.  [count](src/app/conditional-operators/count.ts) 
6.  [every](src/app/conditional-operators/every.ts) 
7.  [squenceEqual](src/app/conditional-operators/squence-equal.ts) 


## 高阶操作符

1.  [mergeMap](src/app/senior-operators/merge-map.ts) 
2.  [switchMap](src/app/senior-operators/switch-map.ts) 
3.  [mergeMapTo](src/app/senior-operators/merge-map-to.ts) 
4.  [mergeScan](src/app/senior-operators/merge-scan.ts) 
5.  [mergeAll](src/app/senior-operators/merge-all.ts) 

## 多播操作符

1.  [multicast](src/app/multicast-operators/multicast.ts)  
2.  [share](src/app/multicast-operators/share.ts)  
3.  [shareReplay](src/app/multicast-operators/share-replay.ts)  
4.  [publish](src/app/multicast-operators/publish.ts)  

## Subject Class

1.  [Subject](src/app/subject-class/subject.ts) 
2.  [BehaviorSubject](src/app/subject-class/behavior-subject.ts) 
3.  [ReplaySubject](src/app/subject-class/replay-subject.ts) 
4.  [AsyncSubject](src/app/subject-class/replay-subject.ts) 

## 自定义操作符

1.  [takeEveryNth](src/app/custom-operators/takeEveryNth.ts)

## Observable Custom

1. [Observable](src/app/my-observable/index.ts)  

## Jest Unit 测试

### 安装
```
   npm install --save-dev jest typescript ts-jest @types/jest  or yarn add --dev jest typescript ts-jest @types/jest
```
### 创建测试ts类型的配置文件 jest config file
```
   npx ts-jest config:init or  yarn ts-jest config:init
```
### 具体配置参数文档 请参照官网：  
* https://jestjs.io/docs/en/configuration.html

### 运行unit测试
```
npm t  or yarn test
```

## cypress e2e 测试

### 安装
```
  npm install cypress --save-dev or  yarn add cypress --dev
```
### 打开cypress 测试
```
   npx cypress open  or  yarn run cypress open
```
### 添加 npm script in package.json
```
{
  "scripts": {
    "cypress:open": "cypress open"
  }
}

```

### typescript文件测试,需在cypress 目录文件夹下创建tsconfig.json
```
{
  "compilerOptions": {
    "strict": true,
    "baseUrl": "../node_modules",
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress"]
  },
  "include": [
    "**/*.ts"
  ]
}
```

### 创建测试文件需要在cypress/integration 文件夹下创建
```
   touch {your_project}/cypress/integration/sample_spec.(j|t)s
```

### 运行e2e测试,选择指定文件进行测试 
```
    npm run cypress:open
```

## 我的个人博客  

* [燕云长风](https://yanyunchangfeng.com) 

## 我参与的系列项目

1. [NiceFish]( https://gitee.com/mumu-osc/NiceFish)：美人鱼，这是一个微型Blog系统，前端基于Angular7.0 + PrimeNG7.1.0。（GVIP 码云最有价值的开源项目 3207 ☆)
2. [NiceFish-React]( https://github.com/damoqiongqiu/NiceFish-React)：这是React版的实现，和 NiceFish Angular 版本保持风格一致。采用React Hooks 16.8.3 版本，使用TypeScript、Ant Design组件库以及Bootstrap v4.2.1 开发。  (7 ☆)
3. [OpenWMS-Frontend](https://gitee.com/mumu-osc/OpenWMS-Frontend)：OpenWMS项目前端基于 Angular 7.0 + PrimeNG 7.1.0。  (已推荐 201 ☆)
4. [nicefish-spring-cloud](https://gitee.com/mumu-osc/nicefish-spring-cloud)：这是NiceFish的服务端代码，基于SpringCloud。已经完成了一些基本的功能，如 SpringSecurity+OAuth2+JWT 实现SSO，文章、用户、评论等的分页查询等。如果你需要与这个后端代码进行对接，请检出本项目的 for-spring-cloud 分支。 (已推荐 118 ☆)
 
## 我的社交主页  

1.  [燕云长风知乎](https://zhihu.com/people/hbxyxuxiaodong)  
2.  [燕云长风知乎专栏](https://zhuanlan.zhihu.com/yanyunchangfeng) 
3.  [燕云长风github](https://github.com/yanyunchangfeng)  
4.  [燕云长风gitee](https://gitee.com/yanyunchangfeng)  
5.  [燕云长风twitter](https://twitter.com/yanyunchangfeng)  
6.  [燕云长风medium](https://medium.com/@yanyunchangfeng)  
7.  [燕云长风facebook](https://facebook.com/yanyunchangfeng)  
8.  [燕云长风stackoverflow](http://stackoverflow.com/users/11366314)  
9.  [燕云长风npm](https://npmjs.com/~yanyunchangfeng)  
10. [燕云长风linkedin](https://www.linkedin.com/in/yanyunchangfeng)  
11. [燕云长风youtube](https://www.youtube.com/channel/UCaz2-l8Bd8tTBf1q-2ww7VA)  
12. [燕云长风gmail](mailto:yanyunchangfeng@gamil.com)  
## 开源许可证

MIT