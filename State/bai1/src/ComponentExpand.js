import React from "react";

class ComponentExpand extends React.Component {
  state = {
    checkOut: false,
  };
  clickButton = () => {
    this.setState({
      checkOut: !this.state.checkOut,
    });
  };
  render() {
    let { checkOut } = this.state;
    return (
      <>
      <div>
        <h1>Component Expand</h1>
      </div>
        {checkOut === false ? 
          <div>
            <button onClick={() => this.clickButton()}> Bấm vào để xem </button>
          </div>
        : 
          <>
            <div>
              Để làm một ứng dụng Single Page -SPA thì có nhiều cách triển khai
              và trong bài viết này tôi sẽ hướng tới cách dùng ReactJS để tạo ra
              một chương trình như thế. Nếu bạn đã biết qua một chút về ReactJS
              thì bài viết này có thể hữu ích cho bạn trong quá trình tìm hiểu
              về ReactJS. Để tạo ra một SPA thì tôi sẽ cần dùng những Module
              dưới đây
            </div>
            <div>
              <button onClick={() => this.clickButton()}>Ẩn</button>
            </div>
          </>
        }
      </>
    );
  }
}
export default ComponentExpand;
