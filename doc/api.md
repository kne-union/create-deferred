### API参考

#### createDeferred

创建一个并发控制函数，用于限制异步操作的并发数量。

| 参数 | 说明 | 类型 | 默认值 |
|-----|----|----|-----|
| size | 最大并发数量 | number | - |

**返回值**：

| 类型 | 说明 |
|-----|-----|
| Function | 并发控制函数，接收一个回调函数作为参数 |

**返回的函数参数**：

| 参数 | 说明 | 类型 | 默认值 |
|-----|----|----|-----|
| callback | 需要执行的回调函数 | Function | - |

**返回的函数返回值**：

| 类型 | 说明 |
|-----|-----|
| Promise | 一个Promise，当回调函数执行完成时解析 |

### 使用示例

#### 基本用法

```javascript
import createDeferred from '@kne/create-deferred';

// 创建一个最大并发数为2的控制函数
const deferred = createDeferred(2);

// 使用控制函数包装异步操作
deferred(async () => {
  // 异步操作1
  await someAsyncOperation();
});

deferred(async () => {
  // 异步操作2
  await anotherAsyncOperation();
});

deferred(async () => {
  // 异步操作3 - 由于最大并发数为2，这个操作会等待前面的操作完成后再执行
  await thirdAsyncOperation();
});
```

#### 处理返回值

```javascript
import createDeferred from '@kne/create-deferred';

const deferred = createDeferred(3);

// deferred函数返回一个Promise，可以等待操作完成
const result = await deferred(async () => {
  const response = await fetch('https://api.example.com/data');
  return await response.json();
});

console.log(result); // 输出API返回的数据
```

#### 批量请求示例

```javascript
import createDeferred from '@kne/create-deferred';

async function fetchWithLimit(urls) {
  const deferred = createDeferred(5); // 最多同时发送5个请求
  const results = [];
  
  const promises = urls.map(url => 
    deferred(async () => {
      const response = await fetch(url);
      return await response.json();
    })
  );
  
  return Promise.all(promises);
}

// 使用
const data = await fetchWithLimit([
  'https://api.example.com/data/1',
  'https://api.example.com/data/2',
  // ... 更多URL
]);
```

### 注意事项

- 传入的回调函数可以是异步函数（返回Promise）或同步函数
- 如果回调函数抛出错误，不会影响队列中其他函数的执行
- 返回的Promise会传递回调函数的返回值或抛出的错误
