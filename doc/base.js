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
