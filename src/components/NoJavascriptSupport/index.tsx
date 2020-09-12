`use strict`

import * as React from "react";
import NoJavascript from "./NoJavascript";

interface INoJavascriptInverse {
  noScriptElem?:JSX.Element;
}

const NoJavascriptInverse: React.SFC<INoJavascriptInverse> = ({noScriptElem, children}) => {
  const javascriptRunElement = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if(javascriptRunElement.current !== null) {
      javascriptRunElement.current.style.display='block'
    }
  }, []);

  const _renderNoJavascript = () => {
    if(noScriptElem) {
      return noScriptElem;
    }
    return <NoJavascript />;
  }

  return (
    <>
      <noscript>
      {_renderNoJavascript()}
      </noscript>
      <section ref={javascriptRunElement} className="container">
        {children}
        <style jsx>{`
          .container {
            display: none;
          }
        `}</style>
      </section>
    </>
  );
}

export default NoJavascriptInverse
