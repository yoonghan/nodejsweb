`use strict`

import * as React from "react";
import NoSSR from 'react-no-ssr';
import produce, {Draft} from "immer";
import {BACKGROUND, FOREGROUND} from "../shared/style";

export interface ScrollToTopStates {
  visible: boolean;
}

export interface ScrollToTopProps {
}

class ScrollToTop extends React.PureComponent<ScrollToTopProps, ScrollToTopStates> {
  constructor(props:ScrollToTopProps) {
    super(props);
    this.state = {
      visible: this._isOverTheBar()
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this._handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this._handleScroll);
  }

  _isOverTheBar = () => {
    const currentScrollPos = window.pageYOffset;
    return currentScrollPos > 320;
  }

  _handleScroll = () => {
    this.setState(
      produce((draft: Draft<ScrollToTopStates>) => {
        draft.visible = this._isOverTheBar()
      })
    );
  };

  _clickScrollUp = () => {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        {this.state.visible && <div onClick={this._clickScrollUp}>Up</div>}
        <style jsx>{`
          div {
            right: 2rem;
            position: fixed;
            bottom: 2rem;
            cursor: pointer;
            background: ${FOREGROUND};
            color: ${BACKGROUND};
            opacity: 0.7;
            padding: 5px;
            border-radius: 3px;
          }

          div:before {
            content: '';
            position: absolute;
            top: -5px;
            left: 0px;
            margin-left: 10px;
            width: 0;
            height: 0;
            border-bottom: solid 5px #FFF;
            border-left: solid 5px transparent;
            border-right: solid 5px transparent;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

const ScrollToTopWithNoSSR = () => (
  <NoSSR>
    <ScrollToTop />
  </NoSSR>
);

export default ScrollToTopWithNoSSR;
