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
    if (this.mounted) {
      var get_poem_attribute = props.get;
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
