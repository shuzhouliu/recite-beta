/**
 * src/components/index.tsx
 * (c) 2022 Shuzhou Liu.
 * Code is served under the MIT license.
 */
import React from "react";

type StateType = {
  poem_text: string;
  poem_origin: string;
};

interface IndexPage {
  state: StateType;
}

class IndexPage extends React.Component {
  state: StateType = {
    poem_text: "",
    poem_origin: ""
  };
  mounted: boolean = false;

  UNSAFE_componentWillMount() {
    this.mounted = true;
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  constructor(props: any) {
    super(props);
    fetch("https://v1.jinrishici.com/all.json", {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          poem_text: data.content,
          poem_origin: data.author + "《" + data.origin + "》"
        });
      });
  }
  render(): React.ReactNode {
    return (
      <>
        <div className="ui cards">
          <div className="card">
            <div className="content">
              <div className="header">诗词推荐</div>
              <div className="description">
                {this.state.poem_text}
                <br />
                ——{this.state.poem_origin}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export { IndexPage };
