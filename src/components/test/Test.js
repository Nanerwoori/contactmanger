import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      userId: 0,
      title: "",
      body: "",
      isLoaing: true
    };
    console.log("Construct Component ... ");
  }

  componentDidMount() {
    fetch("https:/jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(data =>
        this.setState({
          id: data.id,
          userId: data.userId,
          title: data.title,
          body: data.body,
          isLoaing: false
        })
      );
  }

  //   componentDidMount() {
  //     console.log("componentDidMount ... ");
  //     setTimeout(() => {
  //       this.setState({
  //         name: "Mr,Kim"
  //       });
  //     }, 1000 * 3);
  //   }

  //   componentWillMount() {
  //     console.log("componentWillMount ... ");
  //   }
  //   componentWillUpdate() {
  //     console.log(this.state);
  //     console.log("componentWillUpdate ... ");
  //   }

  //   componentDidUpdate() {
  //     console.log("componentDidUpdate ... ");
  //     console.log(this.state);
  //   }
  //   UNSAFE_componentWillReceiveProps(nextProps, nextState) {
  //     console.log("UNSAFE_componentWillReceiveProps");
  //     console.log(nextProps);
  //     console.log(nextState);
  //   }

  render() {
    console.log("render ... ");
    const { title, body, isLoaing } = this.state;
    return (
      <div>
        <h3>For Testing LifeCycle Method </h3>
        {isLoaing ? (
          <div style={{ height: "100vh", textAlign: "center", margin: "auto" }}>
            <h3>Loading ... </h3>
          </div>
        ) : (
          <div className="card-panel">
            <h3 className="card-title">{title}</h3>
            <p>{body}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Test;
