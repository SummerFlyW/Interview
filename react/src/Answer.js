// 样式内容直接在 Answer.css 内编写即可
import "./Answer.css";

// 请在下方完成你的作答
import React from "react";
import { Button } from "antd";

module.exports = class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArr: []
    };
  }
  btnClick(type,e) {
    let arr = this.state.dataArr;
    if(type === 'add'){
      arr.unshift(arr.length + 1);
    }else if(type === 'reduce'){
      arr.shift(0);
    }
    this.setState({
      dataArr: arr
    });
  }
  render() {
    const {dataArr} = this.state;
    return (
      <div className="answer-container">
        <div>
          <Button className="add-button" onClick={this.btnClick.bind(this,'add')}>Add</Button>
          <Button className="add-button" onClick={this.btnClick.bind(this,'reduce')}>Reduce</Button>
          <span>count: {dataArr.length}</span>  
        </div>
        <div className="grid-list">
          {dataArr.length !== 0 && dataArr.map((val, index) => {
            if (index > 8) {
              return '';
            }
            return (<div key={index} className="grid-item">
            {val}
            </div>);
          })}
        </div>
      </div>
    );
  }
}