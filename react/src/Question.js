import React from "react";
import "./styles.css";
import Answer from "./Answer";
import Demo from "./demo.gif";

export default function App() {
  return (
    <div className="App">
      <div className="question-area">
        <h3>题目要求</h3>
        <p>参考说明与图示，实现一个组件</p>
        <p>
          1. 实现一个「Add」按钮。每次点击创建一个格子，最多 9 个，按照 9
          宫格排布； 超过 9 个后，每次点击会从首格开始更新格子内的值
        </p>
        <p>2. 实现一个「Reduce」按钮。每次点击删除一个格子，最少 0 个。</p>
        <br />
        <i>示例：</i>
        <div>
          <img src={Demo} alt="demo" />
        </div>

        <h4>注意事项：</h4>
        <p>1. 可以使用 es5 及之后任意版本的语法作答</p>
        <p>
          2. 按钮组件可以使用 antd；格子的样式不用 100% 还原，但至少要实现 9
          宫格的效果
        </p>
      </div>

      <hr />

      <div className="answer-area">
        <h3>作答</h3>
        <p>
          请访问&nbsp;
          <a
            href="https://codesandbox.io/s/solitary-paper-ex4jh"
            target="_blank"
          >
            codesandbox
          </a>
          &nbsp;Fork 本题目，并在 `./Answer.js` 和 `./Answer.css` 文件中完成编码
        </p>
        <p>
          完成作答后，请在 codesandbox 平台保存所有文件，将你 Fork 项目的网址
          URL 作为答案提交即可
        </p>
        {/* 完成后作答后，请取消当前文件内，顶部「import Answer from "./Answer"; 」 和下方「 <Answer />」 的注释 */}
        <Answer />
      </div>
    </div>
  );
}
