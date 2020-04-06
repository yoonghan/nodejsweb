import React from "react";
import SurveyBuilder from "../../components/SurveyBuilder";
import Head from "next/head";

const Questionaires:any = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Question Builder</title>
        <link href="/static/css/common.css" rel="stylesheet" />
        <link href="/static/css/font.css" rel="stylesheet" />
        <link href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.1/build/pure-min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          html {
            font-size: 14pt;
          }
        `}
        </style>
      </Head>
      <SurveyBuilder/>
    </React.Fragment>
  )
}

export default Questionaires;
