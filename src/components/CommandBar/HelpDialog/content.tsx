`use strict`

import * as React from "react";
import {DIALOG, SHADOW, TABLE_HEADER, TABLE_BODY} from "../../../shared/style";
import {AvailableInput} from "../CommandSearch";

interface HelpContentProps {
  updateSelectedInput: (input:string) => void;
}

const HelpContent: React.SFC<HelpContentProps> = ({updateSelectedInput}) => {

  const _loadHeader = () => (
    <thead>
      <tr>
        <th>Command</th>
        <th>Description</th>
      </tr>
      <style jsx>{`
        thead th {
          color: ${TABLE_HEADER.FOREGROUND};
          background-color: ${TABLE_HEADER.BACKGROUND};
        }
      `}</style>
    </thead>
  );

  const _updateDialog = (input:string) => () => {
    updateSelectedInput(input);
  }

  const _loadList = () => (
    <tbody>
      {
        Object.keys(AvailableInput).map((input, idx) => (
          <tr key={`helpdialog_${idx}`} onClick={_updateDialog(input)}>
            <td>{input}</td>
            <td>{AvailableInput[input].description}</td>
          </tr>
        ))
      }
      <style jsx>{`
        tbody td, tbody th {
          border-top: ${TABLE_BODY.BORDER};
        }
        td:first-child {
          padding-right: 10px;
        }
        tr:nth-child(even) {
          background-color: ${TABLE_BODY.EVEN_BACKGROUND};
        }
        tr:hover {
          background-color: ${TABLE_BODY.HOVER_BACKGROUND};
        }
      `}</style>
    </tbody>
  )

  return (
    <div className={"container"}>
      <h4>Help</h4>
      <table>
        {_loadHeader()}
        {_loadList()}
      </table>
      <style jsx> {`
        .container {
          padding: 10px 10px 40px 10px;
          color: ${DIALOG.BACKGROUND};
          background: ${DIALOG.FOREGROUND};
          box-shadow: 5px 5px 2px ${SHADOW};
          font-family: Inconsolata;
        }
        table {
          border-spacing: 0;
        }
      `}</style>
    </div>
  );
}

export default HelpContent;
