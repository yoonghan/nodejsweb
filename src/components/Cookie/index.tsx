`use strict`

/**
* Made for EUROPEAN regulation, but this site do not use cookies.
* For references, pages/* need to provide the context in getInitialProps and
* pass into the props.
**/

import * as React from "react";
import {COOKIEBOX, LINK_COLOR} from "../../shared/style";

interface CookieProps {
  isClosed:boolean;
}

const cookiePrivacy = "https://policies.google.com/technologies/cookies";

export const wasCookieRead = () => {
  const cookie = document.cookie;

  if(typeof cookie === "undefined") {
    return false;
  }

  const keyValues = cookie.split(";");
  const filterTermsValue = keyValues.filter(keyValue => {
    return keyValue.startsWith("termsRead");
  });

  return filterTermsValue && (filterTermsValue[0].split("=")[1] == "true");
}

const Cookie:React.FC<CookieProps> = (props) => {

  const [isClosed, setClosed] = React.useState(props.isClosed || false);

  const reactToCookieButton = () => {
    setClosed(true);
    saveCookieWithTerms();
  }

  const saveCookieWithTerms = () => {
    document.cookie = "termsRead=true";
  }

  if(isClosed) {
    return <React.Fragment/>;
  }

  return (
    <div className={"container"}>
      <div className={"message"}>
        <h4>This site uses cookies.</h4>
        <p>This site uses cookie to monitor visits and usage traffics. We use google analytics, please <a href={cookiePrivacy} target="_blank"> refer here</a>.</p>
        <p>By proceeding on this website, you are accepting and agreed to the cookie usage.</p>
      </div>
      <div className={"button-container"}>
        <button onClick={reactToCookieButton} >Close</button>
      </div>
      <style jsx>{`
        a {
          text-decoration: underline;
        }
        .container{
          width: 100%;
          bottom: 0;
          position: fixed;
          background-color: ${COOKIEBOX.BACKGROUND};
          color: ${COOKIEBOX.FOREGROUND};
          display: flex;
          padding: 20px;
        }
        .message {
          width: 75%;
          font-size: 0.9rem;
        }
        .button-container {
          width: 25%;
          text-align: center;
          align-self: center;
        }
        .button-container > button {
          border-radius: 5px;
          cursor: pointer;
          padding: 1rem;
          background-color: ${COOKIEBOX.FOREGROUND};
          color: ${COOKIEBOX.BACKGROUND};
          font-weight: bold;
        }
        @media only screen and (max-width: 480px) {
          .container{
            padding: 2px 10px;
            flex-direction: column;
          }

          .message {
            width: 100%;
          }

          .button-container {
            align-self: flex-end;
          }

          .button-container > button {
            align-self: flex-end;
            background: none;
            color: ${LINK_COLOR};
            border: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Cookie;
