"use strict";(self.webpackChunk_kne_components_create_deferred=self.webpackChunk_kne_components_create_deferred||[]).push([[690],{5690:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r,manifest:()=>a});const r={CreateDeferred:{name:"create-deferred",summary:'<h1>create-deferred</h1>\n<h3>\u63cf\u8ff0</h3>\n<p>\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u6bcf\u6b21\u53ea\u5141\u8bb8\u4e00\u5b9a\u6570\u91cf\u5e76\u53d1\u6267\u884c\u7684\u51fd\u6570\uff0c\u5982\u679c\u6267\u884c\u65f6\u8d85\u8fc7\u8fb9\u754c\u503c\u5219\u8d85\u8fc7\u90e8\u5206\u4f1a\u6392\u961f\u6267\u884c.</p>\n<h3>\u5b89\u88c5</h3>\n<pre><code class="language-shell">npm i --save @kne/create-deferred\n</code></pre>',description:"\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u6bcf\u6b21\u53ea\u5141\u8bb8\u4e00\u5b9a\u6570\u91cf\u5e76\u53d1\u6267\u884c\u7684\u51fd\u6570\uff0c\u5982\u679c\u6267\u884c\u65f6\u8d85\u8fc7\u8fb9\u754c\u503c\u5219\u8d85\u8fc7\u90e8\u5206\u4f1a\u6392\u961f\u6267\u884c.",packageName:"@kne/create-deferred",api:"<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>",example:{isFull:!1,className:"create_deferred_e347d",style:".create_deferred_e347d .ant-card {\n  border-color: black;\n  text-align: center;\n  width: 200px;\n}",list:[{title:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u6807\u9898",description:"\u6f14\u793a\u521b\u5efa100\u4e2a\u8fd0\u884c\u65f6\u95f4\u968f\u673a0~1000ms\u4efb\u52a1\uff0c4\u4e2a\u4efb\u52a1\u5e76\u884c\u6267\u884c",code:"const { default: createDeferred } = _CreateDeferred;\nconst { Button, Flex } = antd;\nconst { useState } = React;\n\nconst BaseExample = () => {\n  const [runningTask, setRunningTask] = useState(new Map());\n  const [result, setResult] = useState(null);\n  return <div>\n    {result && <div>\u4efb\u52a1\u6267\u884c\u5b8c\u6210\uff1a\u7ed3\u679c\u4e3a{JSON.stringify(result)}</div>}\n    <Flex vertical gap={10}>\n      {Array.from(runningTask.values()).map((index) => {\n        return <div key={index}>\u4efb\u52a1{index}\u6b63\u5728\u6267\u884c....</div>;\n      })}\n    </Flex>\n    <Button onClick={async () => {\n      const deferred = createDeferred(4);\n      setResult(null);\n      setResult(await Promise.all(Array.from({ length: 100 }).map((value, index) => {\n        return deferred(() => {\n          return new Promise((resolve) => {\n            setRunningTask((value) => {\n              const newList = new Map(value);\n              newList.set(index, index);\n              return newList;\n            });\n            const taskTime = Math.round(Math.random() * 1000);\n            setTimeout(() => {\n              resolve(`${index}\u4efb\u52a1\u5b8c\u6210,\u6267\u884c\u65f6\u95f4${taskTime}ms`);\n              setRunningTask((value) => {\n                const newList = new Map(value);\n                newList.delete(index);\n                return newList;\n              });\n            }, taskTime);\n          });\n        });\n      })));\n    }}>\u5f00\u59cb\u6267\u884c</Button>\n  </div>;\n};\n\nrender(<BaseExample />);\n\n",scope:[{name:"_CreateDeferred",packageName:"@kne/current-lib_create-deferred",importStatement:'import * as _CreateDeferred from "@kne/create-deferred"',component:t(1401)},{name:"antd",packageName:"antd",component:t(8833)}]}]}}},a={name:"create-deferred",version:"0.1.0","open-version":!0,"public-url":"/create-deferred",modules:[{name:"create-deferred",baseDir:"/home/runner/work/create-deferred/create-deferred",description:"\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u6bcf\u6b21\u53ea\u5141\u8bb8\u4e00\u5b9a\u6570\u91cf\u5e76\u53d1\u6267\u884c\u7684\u51fd\u6570\uff0c\u5982\u679c\u6267\u884c\u65f6\u8d85\u8fc7\u8fb9\u754c\u503c\u5219\u8d85\u8fc7\u90e8\u5206\u4f1a\u6392\u961f\u6267\u884c.",packageName:"@kne/create-deferred"}]}}}]);
//# sourceMappingURL=690.5e0a737d.chunk.js.map