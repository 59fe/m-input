# m-input

---

用于表单的输入。

## 何时使用

封装了原生的input和textarea输入框，当需要使用表单输入的时候使用此组件。

## API

属性 | 说明 | 类型 | 默认值
---- | ---- | ---- | ----
type | 设置输入框样式类型，可选值为`bordered` `line` | string | `bordered`
htmlType | 设置输入框的html类型，可选值为input的原生类型以及`textarea` | string | `text`
defaultValue | 输入框的默认值 | string | 
placeholder | 输入框的提示文案 | string | 
clearable | 是否有清除按钮，htmlType为`textarea`时无效 | boolean | `true` 
counter | textarea的计数器,只有当htmlType是`textarea`的时候生效 | boolean | `false`
state | 输入框的状态，可选值为`error`, `success`, `warning` | string | 
readOnly | 设置输入框为只读 | boolean | `false`
disabled | 禁用输入框 | boolean | `false`
onChange | 输入框的内容change事件 | Function | 



# 基本输入框

- order: 0

基本输入框默认是带边框的，其中`htmlType`与原生的input类型对应，默认为`'text'`，其它属性如`name`、`placeholder`、`readonly`、`disabled`、`maxLength`等所原生`input`属性一致；

`clearable`属性表示是否带清除按钮，默认为`true`。

---

```jsx
import {FormItem, Input} from '@ali/msui-react';
ReactDOM.render(
    <div>
        <FormItem>
            <Input onChange={(curr, prev) => console.log('%conChange: ', 'color:green', curr, prev)} maxLength="20" placeholder="普通的输入框(默认带清除按钮)" />
        </FormItem>
        <FormItem>
            <Input clearable={false} placeholder="不带清除按钮的输入框" />
        </FormItem>
        <FormItem>
            <Input htmlType="password" maxLength="20" placeholder="密码输入框" />
        </FormItem>
        <FormItem>
            <Input htmlType="search" defaultValue="秋裤" clearable placeholder="搜索框" />
        </FormItem>
        <FormItem>
            <Input readOnly defaultValue="只读的文本框" />
        </FormItem>
        <FormItem>
            <Input disabled defaultValue="禁用的文本框" />
        </FormItem>
    </div>
, document.getElementById('container'));
```


# 下横线输入框 

- order: 1

通过设置`type="line"`使输入框只带下横线。

---

```jsx
import {FormItem, Input} from '@ali/msui-react';
ReactDOM.render(
    <div>
        <FormItem>
            <Input type="line" placeholder="下横线文本框" />
        </FormItem>
        <FormItem>
            <Input type="line" disabled defaultValue="禁用的下横线文本框" />
        </FormItem>
        <FormItem>
            <Input type="line" defaultValue="我是默认的值~~" placeholder="带清除的下横线文本框" />
        </FormItem>
        <FormItem>
            <Input type="line" readOnly defaultValue="只读的下横线文本框" />
        </FormItem>
        <FormItem>
            <Input type="line" htmlType="password" placeholder="请输入密码……" />
        </FormItem>
    </div>
, document.getElementById('container'));
```


# 不同显示状态

- order: 2

通过设置`state`来改变输入框的显示状态，可选值有`error`、`success`、`warning`。

---

```jsx
import {FormItem, Input} from '@ali/msui-react';
ReactDOM.render(
    <div>
        <FormItem>
            <Input state="error" placeholder="状态为error" />
        </FormItem>
        <FormItem>
            <Input state="success" placeholder="状态为success" />
        </FormItem>
        <FormItem>
            <Input state="warning" placeholder="状态为warning" />
        </FormItem>
        <FormItem>
            <Input type="line" state="error" placeholder="状态为error" />
        </FormItem>
        <FormItem>
            <Input type="line" state="success" placeholder="状态为success" />
        </FormItem>
        <FormItem>
            <Input type="line" state="warning" placeholder="状态为warning" />
        </FormItem>
    </div>
, document.getElementById('container'));
```



# 多行文件输入框

- order: 3

通过设置`htmlType="textarea"`显示为多行文件输入框，即原生的textarea，其它属性`col`、`row`等textarea的原生属性均会生效；

通过设置`counter`来增加文本记数器，默认为`false`。

---

```jsx
import {FormItem, Input} from '@ali/msui-react';
ReactDOM.render(
    <div>
        <FormItem>
            <Input htmlType="textarea" maxLength="100" placeholder="普通的textarea" />
        </FormItem>
        <FormItem>
            <Input htmlType="textarea" maxLength="150" counter placeholder="带记数器的textarea" />
        </FormItem>
    </div>
, document.getElementById('container'));
```
