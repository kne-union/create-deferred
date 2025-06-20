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
