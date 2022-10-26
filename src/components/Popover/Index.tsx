import * as React from "react";
import './Popover.scss';
import family from '../../assets/family.svg';

export default class Popover extends React.Component <{}> {
  render() {
    return (
      <div className="popover">
        <div className="popover__content">
          <img src={family} alt="Family" className="popover__content__img"/>
          <p className="popover__content__description">Baby's birth</p>
        </div>
      </div>
    );
  }
}