
# create-deferred


### 描述

用于创建一个每次只允许一定数量并发执行的函数，如果执行时超过边界值则超过部分会排队执行


### 安装

```shell
npm i --save @kne/create-deferred
```

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

| 属性名 | 说明 | 类型 | 默认值 |
|-----|----|----|-----|
|     |    |    |     |

