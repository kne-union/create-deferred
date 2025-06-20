
# create-deferred


### 描述

用于创建一个每次只允许一定数量并发执行的函数，如果执行时超过边界值则超过部分会排队执行.


### 安装

```shell
npm i --save @kne/create-deferred
```


### 概述

### 项目概述

`@kne/create-deferred` 是一个轻量级的并发控制工具，用于创建一个每次只允许一定数量并发执行的函数。当执行时超过边界值，超过部分会自动排队执行。

### 功能特点

- **并发控制**：限制同时执行的异步操作数量
- **自动排队**：超出并发限制的操作会自动排队等待执行
- **简单易用**：API设计简洁，使用方便
- **无外部依赖**：纯JavaScript实现，无需额外依赖

### 适用场景

- **API请求限流**：控制向服务器发送的并发请求数
- **资源密集型操作**：限制同时进行的资源密集型操作数量
- **批量任务处理**：控制批量任务的执行节奏
- **防止服务过载**：避免因并发请求过多导致服务崩溃

### 安装方法

```bash
npm install @kne/create-deferred
```

或

```bash
yarn add @kne/create-deferred
```

### 基本使用

```javascript
import createDeferred from '@kne/create-deferred';

// 创建一个最大并发数为3的控制函数
const deferred = createDeferred(3);

// 使用控制函数包装异步操作
for (let i = 0; i < 10; i++) {
  deferred(async () => {
    console.log(`Task ${i} started`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Task ${i} completed`);
  });
}
```

在上面的示例中，尽管循环立即创建了10个任务，但由于设置了最大并发数为3，所以一次只会有3个任务同时执行。当一个任务完成后，队列中的下一个任务会自动开始执行。


### 示例


#### 示例样式

```scss
.ant-card {
  border-color: black;
  text-align: center;
  width: 200px;
}
```

#### 示例代码

- 这里填写示例标题
- 演示创建100个运行时间随机0~1000ms任务，4个任务并行执行
- _CreateDeferred(@kne/current-lib_create-deferred)[import * as _CreateDeferred from "@kne/create-deferred"],antd(antd)

```jsx
const { default: createDeferred } = _CreateDeferred;
const { Button, Flex } = antd;
const { useState } = React;

const BaseExample = () => {
  const [runningTask, setRunningTask] = useState(new Map());
  const [result, setResult] = useState(null);
  return <div>
    {result && <div>任务执行完成：结果为{JSON.stringify(result)}</div>}
    <Flex vertical gap={10}>
      {Array.from(runningTask.values()).map((index) => {
        return <div key={index}>任务{index}正在执行....</div>;
      })}
    </Flex>
    <Button onClick={async () => {
      const deferred = createDeferred(4);
      setResult(null);
      setResult(await Promise.all(Array.from({ length: 100 }).map((value, index) => {
        return deferred(() => {
          return new Promise((resolve) => {
            setRunningTask((value) => {
              const newList = new Map(value);
              newList.set(index, index);
              return newList;
            });
            const taskTime = Math.round(Math.random() * 1000);
            setTimeout(() => {
              resolve(`${index}任务完成,执行时间${taskTime}ms`);
              setRunningTask((value) => {
                const newList = new Map(value);
                newList.delete(index);
                return newList;
              });
            }, taskTime);
          });
        });
      })));
    }}>开始执行</Button>
  </div>;
};

render(<BaseExample />);

```


### API

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

