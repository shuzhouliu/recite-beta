/**
 * src/components/index.tsx
 * (c) 2022 Shuzhou Liu.
 * Code is served under the MIT license.
 */
import React from "react";
// @ts-ignore
import poems from "./poems.tsx";

type StateType = {
  poem_text: string;
  poem_origin: string;
};

interface IndexPage {
  state: StateType;
}

class IndexPage extends React.Component {
  constructor(props: any) {
    super(props);
    var get_poem_attribute = props.get;
    this.state = {
      poem_text: "",
      poem_origin: ""
    };
    if (get_poem_attribute === "random") {
      // rnd between [0, poems.length)
      let rnd: number = Math.floor(Math.random() * poems.length);
      this.setState({
        poem_text: poems[rnd].poem_text,
        poem_origin: poems[rnd].poem_origin
      });
    } else {
      this.setState({
        poem_text: poems[get_poem_attribute].poem_text,
        poem_origin: poems[get_poem_attribute].poem_origin
      });
    }
  }
  render(): React.ReactNode {
    return (
      <>
        {this.state.poem_text}
        <br />
        ——{this.state.poem_origin}
      </>
    );
  }
}

export { IndexPage };
