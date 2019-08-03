`use strict`

import * as React from "react";
import produce, {Draft} from "immer";
import Modal from "../Modal";
import EmailSender from "../LetterBox/EmailSender";

export interface SocialFabProps {
}

export interface SocialFabStates {
  isEmailShow: boolean;
}

class SocialFab extends React.PureComponent<SocialFabProps, SocialFabStates> {

  constructor(props: SocialFabProps) {
    super(props);
    this.state = {
      isEmailShow: false
    }
  }

  _onOpenEmail = () => {
    this.setState(
      produce((draft: Draft<SocialFabStates>) => {
        draft.isEmailShow = true;
      })
    );
  }

  _closeCallback = () => {
    this.setState(
      produce((draft: Draft<SocialFabStates>) => {
        draft.isEmailShow = false;
      })
    );
  }

  render() {
    const {isEmailShow} = this.state;

    return (
      <div className="fab">
        <span className="fab-action-button">
            <i className="fab-action-button__icon"></i>
        </span>
        <ul className="fab-buttons">
          <li className="fab-buttons__item">
            <a className="fab-buttons__link" target="onnew" href="//www.facebook.com/walcoorperation">
              <i className="icon-material icon-material_fb"></i>
            </a>
          </li>
          <li className="fab-buttons__item">
            <a className="fab-buttons__link" onClick={this._onOpenEmail}>
              <i className="icon-material icon-material_gm"></i>
            </a>
          </li>
        </ul>
        {
          isEmailShow && <Modal cancelCallback={this._closeCallback}><EmailSender writeTo={"Walcron Website"}/></Modal>
        }
        <style jsx>
          {`
            a:hover {
              cursor: pointer;
            }
            
            .fab {
              position: fixed;
              width: 56px;
              right: 15px;
              bottom: 15px;
              margin-left: -28px;
            }

            .fab:hover .fab-buttons {
              opacity: 1;
              visibility: visible;
            }

            .fab:hover .fab-buttons__link {
              transform: scaleY(1) scaleX(1) translateY(-16px) translateX(0px);
            }

            .fab-action-button:hover + .fab-buttons .fab-buttons__link:before {
              visibility: visible;
              opacity: 1;
              transform: scale(1);
              transform-origin: right center 0;
              transition-delay: 0.3s;
            }

            .fab-action-button {
              position: absolute;
              bottom: 0;
              display: block;
              width: 56px;
              height: 56px;
              background-color: #000;
              border-radius: 50%;
              box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
            }

            .fab-buttons {
              position: absolute;
              left: 0;
              right: 0;
              bottom: 30px;
              list-style: none;
              margin: 0;
              padding: 0;
              opacity: 0;
              visibility: hidden;
              transition: 0.2s;
            }

            .fab-action-button__icon {
              display: inline-block;
              width: 56px;
              height: 56px;
              background: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0xOCAxNi4wOGMtLjc2IDAtMS40NC4zLTEuOTYuNzdMOC45MSAxMi43Yy4wNS0uMjMuMDktLjQ2LjA5LS43cy0uMDQtLjQ3LS4wOS0uN2w3LjA1LTQuMTFjLjU0LjUgMS4yNS44MSAyLjA0LjgxIDEuNjYgMCAzLTEuMzQgMy0zcy0xLjM0LTMtMy0zLTMgMS4zNC0zIDNjMCAuMjQuMDQuNDcuMDkuN0w4LjA0IDkuODFDNy41IDkuMzEgNi43OSA5IDYgOWMtMS42NiAwLTMgMS4zNC0zIDNzMS4zNCAzIDMgM2MuNzkgMCAxLjUtLjMxIDIuMDQtLjgxbDcuMTIgNC4xNmMtLjA1LjIxLS4wOC40My0uMDguNjUgMCAxLjYxIDEuMzEgMi45MiAyLjkyIDIuOTIgMS42MSAwIDIuOTItMS4zMSAyLjkyLTIuOTJzLTEuMzEtMi45Mi0yLjkyLTIuOTJ6Ii8+Cjwvc3ZnPg==") center no-repeat;
            }

            .fab-buttons__item {
              display: block;
              text-align: center;
              margin: 12px 0;
            }

            .fab-buttons__link {
              display: inline-block;
              width: 40px;
              height: 40px;
              text-decoration: none;
              background-color: #ffffff;
              border-radius: 50%;
              box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
              transform: scaleY(0.5) scaleX(0.5) translateY(0px) translateX(0px);
              -moz-transition: .3s;
              -webkit-transition: .3s;
              -o-transition: .3s;
              transition: .3s;
            }

            .icon-material {
              display: inline-block;
              width: 40px;
              height: 40px;
            }

            .icon-material_fb {
              background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Zz48cGF0aCBkPSJNMjU3LjEsNTA3LjlDMTE5LjEsNTA3LjksOCwzOTUuNCw4LjUsMjU1LjRDOS4xLDExNy4xLDEyMC43LDQuOCwyNTkuNyw2LjIgICBjMTM2LjIsMS40LDI0NywxMTMuMiwyNDUuOCwyNTMuMUM1MDQuNCwzOTYuOSwzOTQsNTA3LjUsMjU3LjEsNTA3Ljl6IE0yNTcuNSwyNS45QzEzMywyNS4zLDI5LjMsMTI2LjYsMjguMSwyNTQuNSAgIGMtMS4zLDEzMC4yLDEwMi43LDIzMi40LDIyNi41LDIzMy43YzEyNS44LDEuMywyMzAuNy0xMDAuNiwyMzEuMy0yMjkuMkM0ODYuNSwxMjkuNiwzODQuMywyNS45LDI1Ny41LDI1Ljl6IiBmaWxsPSIjNEE2NEE0Ii8+PHBhdGggZD0iTTIwNi45LDM0NWMwLTI3LjUtMC4xLTU1LDAuMS04Mi41YzAtNC44LTEuNC01LjgtNS45LTUuN2MtOS44LDAuMy0xOS43LDAtMjkuNSwwLjFjLTIuOCwwLTMuOC0wLjctMy44LTMuNiAgIGMwLjEtMTcuMywwLjEtMzQuNywwLTUyYzAtMy4xLDEtNC4xLDQtNGMxMC4yLDAuMSwyMC4zLTAuMSwzMC41LDAuMWMzLjUsMC4xLDQuNi0xLDQuNi00LjVjLTAuMi0xNS4zLTAuMS0zMC43LTAuMS00NiAgIGMwLjEtMzYuNSwyMi4zLTU3LjgsNTUuMy02NGMxNy45LTMuNCwzNS45LTIsNTMuOC0yLjNjOS4yLTAuMSwxOC4zLDAuMSwyNy41LTAuMWMzLjgtMC4xLDQuMywxLjUsNC4zLDQuN2MtMC4xLDE3LjUtMC4xLDM1LDAsNTIuNSAgIGMwLDMuNS0xLDQuNi00LjUsNC41Yy0xMi4zLTAuMi0yNC43LTAuMS0zNy0wLjFjLTEyLjYsMC0xOS4zLDYuOS0xOS4zLDE5LjVjMCwxMC4zLDAuMSwyMC43LTAuMSwzMWMtMC4xLDMuNSwxLDQuNiw0LjUsNC41ICAgYzE3LTAuMiwzNCwwLDUxLTAuMmM0LDAsNS4xLDEsNC44LDUuMWMtMS41LDE3LjEtMy42LDM0LjEtNi4yLDUxLjFjLTAuNSwzLTEuNiwzLjgtNC41LDMuN2MtMTQuOC0wLjEtMjkuNywwLjEtNDQuNS0wLjIgICBjLTQuMi0wLjEtNS4yLDEuMi01LjEsNS4zYzAuMSw1NS4yLDAsMTEwLjMsMC4yLDE2NS41YzAsNC4yLTAuOCw1LjctNS40LDUuNmMtMjMuMi0wLjMtNDYuMy0wLjItNjkuNSwwYy00LjEsMC01LjMtMS01LjMtNS4yICAgQzIwNyw0MDAuMywyMDYuOSwzNzIuNywyMDYuOSwzNDV6IiBmaWxsPSIjNDk2MkEzIi8+PC9nPjwvc3ZnPg==") center no-repeat;
            }

            .icon-material_gm {
              background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Zz48cGF0aCBkPSJNMjU3LjEsNTA3LjlDMTE5LjIsNTA3LjksNy45LDM5NS40LDguNSwyNTUuNUM5LjEsMTE2LjksMTIwLjksNC44LDI1OS42LDYuMiAgIGMxMzYsMS4zLDI0NywxMTIuOCwyNDUuOSwyNTMuMUM1MDQuNCwzOTcuMSwzOTMuOSw1MDcuNSwyNTcuMSw1MDcuOXogTTI1NywyNS45QzEzMi45LDI1LjUsMjkuMywxMjYuNiwyOC4xLDI1NC41ICAgYy0xLjMsMTMwLjMsMTAyLjgsMjMyLjQsMjI2LjQsMjMzLjdjMTI1LjksMS4zLDIzMC43LTEwMC42LDIzMS4zLTIyOS4yQzQ4Ni41LDEyOS40LDM4NC4zLDI1LjksMjU3LDI1Ljl6IiBmaWxsPSIjRTY1QzRGIi8+PHBhdGggZD0iTTM4OC4xLDE0M2MxMy40LTEuNCwyNiw5LjMsMjYuOSwyMi45YzAuMiwzLjYsMCw3LjMsMCwxMWMtMS4yLDAtMi4xLDAuOC0zLjEsMS41ICAgYy0xMSw3LjktMjEuOSwxNS43LTMyLjksMjMuNmMtMzYuNywyNS4yLTczLjQsNTAuMy0xMTAsNzUuNmMtMy44LDIuNi04LjEsNC42LTExLjEsOC4zYy0xLjcsMC4zLTIuOC0wLjgtNC0xLjcgICBjLTI5LjYtMjAuNi01OS4zLTQxLjMtODguOS02MS45Yy0xMC4xLTctMjAuMS0xNC0zMS0yMS41YzAsMi43LDAsNC41LDAsNi4zYzAsMjguNiwwLDU3LjMsMCw4NS45YzAsMjUuMywwLjEsNTAuNiwwLjIsNzUuOSAgIGMwLDAuNy0wLjEsMS40LTAuMSwyLjFjLTE2LjYsMy4yLTMwLjctNC43LTM0LjQtMTkuNGMtMC41LTIuMS0wLjctNC4zLTAuNy02LjRjMC01OC43LDAuMS0xMTcuNS0wLjEtMTc2LjIgICBjLTAuMS0xNC45LDEzLjItMjguMSwyNy4xLTI2YzAuNSwwLjUsMC45LDEsMS40LDEuNGM0Mi4xLDMxLjIsODQuMiw2Mi40LDEyNi4yLDkzLjZjMi41LDEuOSw0LDEuNiw2LjMtMC4xICAgYzI2LjItMTkuNCw1Mi41LTM4LjcsNzguNy01OEMzNTUuMSwxNjcuNywzNzEuNiwxNTUuMywzODguMSwxNDN6IiBmaWxsPSIjRTY1QTREIi8+PHBhdGggZD0iTTEzNC4xLDM2OWMtMC4xLTI1LjMtMC4xLTUwLjYtMC4yLTc1LjljMC0yOC42LDAtNTcuMywwLTg1LjljMC0xLjgsMC0zLjUsMC02LjMgICBjMTAuOCw3LjUsMjAuOSwxNC41LDMxLDIxLjVjMjkuNiwyMC42LDU5LjMsNDEuMyw4OC45LDYxLjljMS4yLDAuOCwyLjMsMS45LDQsMS43YzAuMiwyLjIsMi4yLDIuOCwzLjcsMy44ICAgYzM0LDIzLjYsNjgsNDcsMTAxLjksNzAuOGM0LjMsMyw5LjMsNS4yLDEyLjYsOS42Yy0xLDEuMy0yLjQsMS0zLjcsMWMtNzguOCwwLTE1Ny42LTAuMS0yMzYuNC0wLjFjMC43LTEsMS40LTEuOSwyLjEtMi45ICAgYzIuMi0wLjcsNC4yLTEuNiw1LTRjNC4yLTAuNiw2LjctMy42LDkuMy02LjVjLTMuNiwxLjUtNywzLjEtOS41LDYuM2MtMi4yLDAuNy00LjIsMS42LTUsNEMxMzYuNiwzNjguMiwxMzUuNCwzNjguNiwxMzQuMSwzNjl6ICAgIE0xOTQsMzI5YzAuMywwLDAuNiwwLDEsMGMxLjMtMC43LDIuOS0xLDMtM2MwLjgsMCwxLjYtMC4yLDItMWMwLjMtMC4zLDAuNy0wLjcsMS0xYzAuOCwwLDEuNi0wLjIsMi0xYzAuMS0wLjIsMC4zLTAuMywwLjQtMC41ICAgYy0wLjIsMC4xLTAuMywwLjMtMC41LDAuNGMtMC44LDAtMS42LDAuMi0yLDFjLTAuMywwLjMtMC43LDAuNy0xLDFjLTAuOCwwLTEuNiwwLjItMiwxYy0xLjQsMC0yLjQsMC43LTMsMiAgIEMxOTQuNiwzMjguMywxOTQuMywzMjguNiwxOTQsMzI5Yy0wLjIsMC4xLTAuNCwwLjItMC41LDAuNEMxOTMuNywzMjkuMywxOTMuOSwzMjkuMiwxOTQsMzI5eiBNMTg4LDMzM2MwLjgsMCwxLjYtMC4yLDItMSAgIGMwLjgtMC4xLDEuNi0wLjIsMS41LTEuMmMwLTAuMS0wLjItMC4zLTAuMy0wLjNjLTEuMS0wLjEtMS4yLDAuNy0xLjMsMS41QzE4OS4xLDMzMiwxODguNCwzMzIuMSwxODgsMzMzYy0wLjQsMC4zLTAuNywwLjYtMS4xLDAuOSAgIGMtMC44LDAtMS42LDAuMi0yLDFjLTAuMywwLjMtMC43LDAuNy0xLDFjLTAuOCwwLTEuNiwwLjItMiwxYy0xLjQsMC4xLTIuNCwwLjctMywyYy0wLjMsMC4zLTAuNiwwLjctMSwxYy0wLjEsMC4yLTAuMywwLjMtMC40LDAuNSAgIGMwLjItMC4xLDAuMy0wLjMsMC41LTAuNGMwLjgsMCwxLjYtMC4yLDItMWMxLjItMC4xLDEuOS0wLjcsMi0yYzAuOCwwLDEuNi0wLjIsMi0xYzAuMy0wLjMsMC43LTAuNywxLTFjMC44LDAsMS42LTAuMiwyLTEgICBDMTg3LjQsMzMzLjcsMTg3LjcsMzMzLjQsMTg4LDMzM3ogTTE3MiwzNDRjLTAuOCwwLjEtMS42LDAuMi0xLjUsMS4zYzAsMC4xLDAuMiwwLjMsMC4zLDAuM0MxNzEuOCwzNDUuNiwxNzEuOSwzNDQuOCwxNzIsMzQ0ICAgYzAuOSwwLjEsMS42LTAuMSwyLjEtMC45YzAuOC0wLjEsMS42LTAuMiwxLjUtMS4zYzAtMC4xLTAuMi0wLjMtMC4zLTAuM2MtMS4xLTAuMS0xLjIsMC43LTEuMywxLjVDMTczLjEsMzQzLDE3Mi40LDM0My4yLDE3MiwzNDR6ICAgIE0xNTguOSwzNTIuOWMtMS40LDAuMS0yLjQsMC44LTMsMmMtMC43LDAuMi0xLjYsMC4zLTEuNSwxLjNjMCwwLjEsMC4yLDAuMywwLjMsMC4zYzEsMC4xLDEuMi0wLjcsMS40LTEuNWMxLjQsMCwyLjgtMC4yLDMtMiAgIGMwLjgsMCwxLjUtMC4yLDItMWMxLjQtMC4xLDIuNC0wLjgsMy0yYzAuNy0wLjIsMS42LTAuMiwxLjUtMS4zYzAtMC4xLTAuMi0wLjMtMC4zLTAuM2MtMS4xLTAuMS0xLjIsMC43LTEuMywxLjUgICBjLTEuNCwwLTIuOCwwLjEtMywyQzE2MC4xLDM1MiwxNTkuNCwzNTIuMiwxNTguOSwzNTIuOXogTTE2OC43LDM0Ny4yYy0wLjEtMC4zLTAuMS0wLjctMC4zLTAuOGMtMC4yLTAuMS0wLjYsMC0wLjgsMC4yICAgYy0wLjMsMC40LTAuMiwwLjksMC40LDAuOUMxNjguMSwzNDcuNiwxNjguNCwzNDcuNCwxNjguNywzNDcuMnoiIGZpbGw9IiNFNkUzRDYiLz48cGF0aCBkPSJNMzg4LjEsMTQzYy0xNi41LDEyLjMtMzMsMjQuNi00OS42LDM2LjljLTI2LjIsMTkuNC01Mi41LDM4LjYtNzguNyw1OGMtMi40LDEuOC0zLjgsMi02LjMsMC4xICAgYy00Mi0zMS4zLTg0LjEtNjIuNC0xMjYuMi05My42Yy0wLjUtMC40LTAuOS0wLjktMS40LTEuNGM1NC42LDAsMTA5LjItMC4xLDE2My45LTAuMUMzMjIuNSwxNDMsMzU1LjMsMTQzLDM4OC4xLDE0M3oiIGZpbGw9IiNGNkY0RUMiLz48cGF0aCBkPSJNMzc2LDM3MGMtMy4zLTQuNC04LjMtNi42LTEyLjYtOS42Yy0zMy45LTIzLjctNjgtNDcuMi0xMDEuOS03MC44Yy0xLjQtMS0zLjQtMS42LTMuNy0zLjggICBjMy0zLjcsNy4zLTUuNywxMS4xLTguM2MzNi42LTI1LjMsNzMuMy01MC40LDExMC03NS42YzAsNTYuMywwLDExMi42LDAuMSwxNjguOUMzNzgsMzcwLjcsMzc3LDM3MC4zLDM3NiwzNzB6IiBmaWxsPSIjQjZCNUFDIi8+PHBhdGggZD0iTTM3OS4xLDM3MWMwLTU2LjMsMC0xMTIuNi0wLjEtMTY4LjljMTEtNy45LDIxLjktMTUuNywzMi45LTIzLjZjMC45LTAuNywxLjgtMS41LDMuMS0xLjUgICBjMC4xLDE4LjUsMC4yLDM2LjksMC4yLDU1LjRjMCwzNi4xLDAsNzIuMiwwLDEwOC4zYzAsMi41LDAsNS0wLjEsNy41Yy0wLjYsMTIuNC02LjYsMTkuNC0xOC42LDIxLjcgICBDMzkwLjcsMzcxLDM4NC45LDM3MS43LDM3OS4xLDM3MXoiIGZpbGw9IiNCMTNBMzAiLz48cGF0aCBkPSJNMTM4LjEsMzY4LjFjLTAuNywxLTEuNCwxLjktMi4xLDIuOWMtMC43LDAtMS4zLDAtMiwwLjFjMC0wLjcsMC4xLTEuNCwwLjEtMi4xYzEuMy0wLjQsMi41LTAuNywzLjgtMS4xICAgQzEzNy45LDM2Ny45LDEzOC4xLDM2OC4xLDEzOC4xLDM2OC4xeiIgZmlsbD0iI0MxQzBCNiIvPjxwYXRoIGQ9Ik0xNDIuOSwzNjMuOWMyLjUtMy4xLDUuOS00LjgsOS41LTYuM2MtMi42LDIuOS01LjEsNS45LTkuMyw2LjVMMTQyLjksMzYzLjl6IiBmaWxsPSIjQzFDMEI2Ii8+PHBhdGggZD0iTTE0My4xLDM2NC4xYy0wLjksMi40LTIuOSwzLjMtNSw0YzAsMC0wLjItMC4yLTAuMi0wLjJjMC44LTIuNCwyLjktMy4zLDUtNCAgIEMxNDIuOSwzNjMuOSwxNDMuMSwzNjQuMSwxNDMuMSwzNjQuMXoiIGZpbGw9IiNDMUMwQjYiLz48cGF0aCBkPSJNMTk4LDMyNmMtMC4xLDEuOS0xLjgsMi4yLTMsM2MwLTAuMywwLTAuNywwLTFDMTk1LjYsMzI2LjcsMTk2LjYsMzI2LDE5OCwzMjZDMTk4LDMyNiwxOTgsMzI2LDE5OCwzMjZ6IiBmaWxsPSIjQzVDM0I5Ii8+PHBhdGggZD0iTTE3OC45LDMzOWMwLjYtMS4zLDEuNi0yLDMtMmwwLjEsMC4xYzAsMS4zLTAuNywxLjktMiwyQzE3OS43LDMzOSwxNzkuMywzMzksMTc4LjksMzM5eiIgZmlsbD0iI0MzQzJCOCIvPjxwYXRoIGQ9Ik0xNjQuMSwzNTAuMWMtMC42LDEuMy0xLjYsMS45LTMsMmMwLDAtMC4xLTAuMS0wLjEtMC4xYzAuMi0xLjksMS42LTIsMy0yTDE2NC4xLDM1MC4xeiIgZmlsbD0iI0MxQzBCNiIvPjxwYXRoIGQ9Ik0xNTUuOSwzNTQuOWMwLjYtMS4yLDEuNi0xLjksMy0ybDAuMSwwLjJjLTAuMiwxLjktMS41LDItMywyTDE1NS45LDM1NC45eiIgZmlsbD0iI0MxQzBCNiIvPjxwYXRoIGQ9Ik0xNzMuOSwzNDIuOWMwLjEtMC44LDAuMy0xLjYsMS4zLTEuNWMwLjEsMCwwLjMsMC4yLDAuMywwLjNjMCwxLjEtMC44LDEuMS0xLjUsMS4zTDE3My45LDM0Mi45eiIgZmlsbD0iI0MxQzBCNiIvPjxwYXRoIGQ9Ik0xNzIsMzQ0LjFjLTAuMSwwLjgtMC4yLDEuNi0xLjMsMS41Yy0wLjEsMC0wLjMtMC4yLTAuMy0wLjNDMTcwLjQsMzQ0LjEsMTcxLjIsMzQ0LjEsMTcyLDM0NC4xICAgQzE3MiwzNDQsMTcyLDM0NC4xLDE3MiwzNDQuMXoiIGZpbGw9IiNDMUMwQjYiLz48cGF0aCBkPSJNMTY4LjcsMzQ3LjJjLTAuMiwwLjEtMC41LDAuNC0wLjcsMC40Yy0wLjUtMC4xLTAuNy0wLjUtMC40LTAuOWMwLjEtMC4yLDAuNi0wLjMsMC44LTAuMiAgIEMxNjguNSwzNDYuNiwxNjguNiwzNDYuOSwxNjguNywzNDcuMnoiIGZpbGw9IiNDMUMwQjYiLz48cGF0aCBkPSJNMTYzLjksMzQ5LjljMC4xLTAuOCwwLjMtMS41LDEuMy0xLjVjMC4xLDAsMC4zLDAuMiwwLjMsMC4zYzAuMSwxLjEtMC44LDEuMS0xLjUsMS4zICAgQzE2NC4xLDM1MC4xLDE2My45LDM0OS45LDE2My45LDM0OS45eiIgZmlsbD0iI0MxQzBCNiIvPjxwYXRoIGQ9Ik0xNTYuMSwzNTUuMWMtMC4yLDAuOC0wLjMsMS41LTEuNCwxLjVjLTAuMSwwLTAuMy0wLjItMC4zLTAuM2MtMC4xLTEuMSwwLjgtMS4xLDEuNS0xLjMgICBDMTU1LjksMzU0LjksMTU2LjEsMzU1LjEsMTU2LjEsMzU1LjF6IiBmaWxsPSIjQzFDMEI2Ii8+PHBhdGggZD0iTTE5MCwzMzJjMC4xLTAuOCwwLjItMS42LDEuMy0xLjVjMC4xLDAsMC4zLDAuMiwwLjMsMC4zQzE5MS42LDMzMS45LDE5MC44LDMzMS45LDE5MCwzMzJMMTkwLDMzMnoiIGZpbGw9IiNDM0MyQjgiLz48cGF0aCBkPSJNMjAxLDMyNGMwLjQtMC44LDEuMi0xLDItMWwwLDBDMjAyLjYsMzIzLjgsMjAxLjksMzI0LDIwMSwzMjRMMjAxLDMyNHoiIGZpbGw9IiNDNUMzQjkiLz48cGF0aCBkPSJNMjAwLDMyNWMtMC40LDAuOC0xLjIsMS0yLDFjMCwwLTAuMS0wLjEtMC4xLTAuMUMxOTguNCwzMjUuMiwxOTkuMSwzMjUsMjAwLDMyNUMyMDAsMzI1LDIwMCwzMjUsMjAwLDMyNXoiIGZpbGw9IiNDNUMzQjkiLz48cGF0aCBkPSJNMTg1LDMzNWMwLjQtMC44LDEuMi0xLDItMWMwLDAsMC4xLDAuMSwwLjEsMC4xQzE4Ni42LDMzNC44LDE4NS45LDMzNSwxODUsMzM1QzE4NSwzMzUuMSwxODUsMzM1LDE4NSwzMzV6ICAgIiBmaWxsPSIjQzNDMkI4Ii8+PHBhdGggZD0iTTE4MiwzMzdjMC40LTAuOCwxLjItMSwyLTFsMC4xLDAuMUMxODMuNiwzMzYuOSwxODIuOSwzMzcsMTgyLDMzN0MxODIsMzM3LDE4MiwzMzcsMTgyLDMzN3oiIGZpbGw9IiNDM0MyQjgiLz48cGF0aCBkPSJNMTc4LjksMzM5YzAuNCwwLDAuOCwwLDEuMSwwYy0wLjUsMC44LTEuMiwxLTIsMWMwLDAtMC4xLTAuMS0wLjEtMC4xQzE3OC4zLDMzOS42LDE3OC42LDMzOS4zLDE3OC45LDMzOXoiIGZpbGw9IiNDMUMwQjYiLz48cGF0aCBkPSJNMTc0LDM0M2MtMC40LDAuOC0xLjIsMS0yLDFjMCwwLTAuMS0wLjEtMC4xLTAuMWMwLjQtMC44LDEuMi0xLDItMUMxNzMuOSwzNDIuOSwxNzQsMzQzLDE3NCwzNDN6IiBmaWxsPSIjQzFDMEI2Ii8+PHBhdGggZD0iTTE1OC45LDM1Mi45YzAuNC0wLjgsMS4yLTEsMi0xYzAsMCwwLjEsMC4xLDAuMSwwLjFjLTAuNCwwLjgtMS4yLDEtMiwxICAgQzE1OS4xLDM1My4xLDE1OC45LDM1Mi45LDE1OC45LDM1Mi45eiIgZmlsbD0iI0MxQzBCNiIvPjxwYXRoIGQ9Ik0xOTAsMzMyYy0wLjQsMC44LTEuMSwxLTIsMUwxODgsMzMzQzE4OC40LDMzMi4xLDE4OS4xLDMzMiwxOTAsMzMyQzE5MCwzMzIsMTkwLDMzMiwxOTAsMzMyeiIgZmlsbD0iI0MzQzJCOCIvPjxwYXRoIGQ9Ik0yMDMsMzIzYzAuMi0wLjEsMC4zLTAuMywwLjUtMC40QzIwMy4zLDMyMi43LDIwMy4yLDMyMi45LDIwMywzMjNDMjAzLDMyMywyMDMsMzIzLDIwMywzMjN6IiBmaWxsPSIjQzVDM0I5Ii8+PHBhdGggZD0iTTIwMSwzMjRjLTAuMywwLjMtMC43LDAuNy0xLDFjMCwwLTAuMS0wLjEtMC4xLTAuMUMyMDAuMywzMjQuNiwyMDAuNiwzMjQuMywyMDEsMzI0ICAgQzIwMSwzMjQsMjAxLDMyNCwyMDEsMzI0eiIgZmlsbD0iI0M1QzNCOSIvPjxwYXRoIGQ9Ik0xOTUsMzI4YzAsMC4zLDAsMC43LDAsMWMtMC4zLDAtMC42LDAuMS0xLDBMMTk0LDMyOUMxOTQuMywzMjguNiwxOTQuNiwzMjguMywxOTUsMzI4eiIgZmlsbD0iI0MzQzJCOCIvPjxwYXRoIGQ9Ik0xOTQsMzI5Yy0wLjIsMC4xLTAuMywwLjMtMC41LDAuNEMxOTMuNywzMjkuMywxOTMuOCwzMjkuMSwxOTQsMzI5QzE5NCwzMjksMTk0LDMyOSwxOTQsMzI5eiIgZmlsbD0iI0MzQzJCOCIvPjxwYXRoIGQ9Ik0xODQsMzM2YzAuMy0wLjMsMC43LTAuNywxLTFjMCwwLDAuMSwwLjEsMC4xLDAuMUMxODQuNywzMzUuNCwxODQuNCwzMzUuNywxODQsMzM2ICAgQzE4NCwzMzYsMTg0LDMzNiwxODQsMzM2eiIgZmlsbD0iI0MzQzJCOCIvPjxwYXRoIGQ9Ik0xNzgsMzQwYy0wLjIsMC4xLTAuMywwLjMtMC41LDAuNEMxNzcuNywzNDAuMywxNzcuOCwzNDAuMSwxNzgsMzQwQzE3OCwzNDAsMTc4LDM0MCwxNzgsMzQweiIgZmlsbD0iI0MxQzBCNiIvPjxwYXRoIGQ9Ik0xODgsMzMzYy0wLjMsMC4zLTAuNywwLjctMSwxYzAsMC0wLjEtMC4xLTAuMS0wLjFDMTg3LjMsMzMzLjYsMTg3LjYsMzMzLjMsMTg4LDMzMyAgIEMxODgsMzMzLDE4OCwzMzMsMTg4LDMzM3oiIGZpbGw9IiNDM0MyQjgiLz48L2c+PC9zdmc+") center no-repeat;
            }

            .icon-material_li {
              background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0icG9zdC1saW5rZWRpbiI+CgkJPHBhdGggZD0iTTQ1OSwwSDUxQzIyLjk1LDAsMCwyMi45NSwwLDUxdjQwOGMwLDI4LjA1LDIyLjk1LDUxLDUxLDUxaDQwOGMyOC4wNSwwLDUxLTIyLjk1LDUxLTUxVjUxQzUxMCwyMi45NSw0ODcuMDUsMCw0NTksMHogICAgIE0xNTMsNDMzLjVINzYuNVYyMDRIMTUzVjQzMy41eiBNMTE0Ljc1LDE2MC42NWMtMjUuNSwwLTQ1LjktMjAuNC00NS45LTQ1LjlzMjAuNC00NS45LDQ1LjktNDUuOXM0NS45LDIwLjQsNDUuOSw0NS45ICAgIFMxNDAuMjUsMTYwLjY1LDExNC43NSwxNjAuNjV6IE00MzMuNSw0MzMuNUgzNTdWMjk4LjM1YzAtMjAuMzk5LTE3Ljg1LTM4LjI1LTM4LjI1LTM4LjI1cy0zOC4yNSwxNy44NTEtMzguMjUsMzguMjVWNDMzLjVIMjA0ICAgIFYyMDRoNzYuNXYzMC42YzEyLjc1LTIwLjQsNDAuOC0zNS43LDYzLjc1LTM1LjdjNDguNDUsMCw4OS4yNSw0MC44LDg5LjI1LDg5LjI1VjQzMy41eiIgZmlsbD0iIzc1NzU3NSIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=") center no-repeat;
            }
          `}
        </style>
        <div style={{display: "none"}}>Contributions from https://www.iconfinder.com/rebininfotech, https://codepen.io/ruslan_khomiak/pen/QGmwMP</div>
      </div>
    );
  }
}

export default SocialFab;
