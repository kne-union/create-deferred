
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
- 这里填写示例说明
- _CreateDeferred(@kne/current-lib_create-deferred)[import * as _CreateDeferred from "@kne/create-deferred"]

```jsx
const {default:CreateDeferred} = _CreateDeferred;

const BaseExample = ()=>{
    return <div>
        <CreateDeferred />
    </div>;
};

render(<BaseExample />);

```


### API

| 属性名 | 说明 | 类型 | 默认值 |
|-----|----|----|-----|
|     |    |    |     |

