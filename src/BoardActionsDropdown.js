import { COLOR } from "https://cdn.jsdelivr.net/npm/cm-chessboard@8.5.0/src/Chessboard.js";
import { Movetext } from '../src/common/Movetext.js';
import AbstractComponent from '../src/AbstractComponent.js';

export class BoardActionsDropdown extends AbstractComponent {
  mount() {
    this._el.children.item(0).addEventListener('click', (event) => {
      event.preventDefault();
      this._props.movesBrowser.props.chessboard.setOrientation(
        this._props.movesBrowser.props.chessboard.getOrientation() === COLOR.white ? COLOR.black : COLOR.white
      );
    });

    this._el.children.item(1).addEventListener('click', (event) => {
      event.preventDefault();
      const back = (this._props.movesBrowser.props.fen.length - this._props.movesBrowser.current - 1) * -1;
      navigator.clipboard.writeText(Movetext.substring(this._props.movesBrowser.props.movetext, back));
    });

    this._el.children.item(2).addEventListener('click', (event) => {
      event.preventDefault();
      navigator.clipboard.writeText(this._props.movesBrowser.props.fen[this._props.movesBrowser.current]);
    });
  }
}
