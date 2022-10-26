import * as React from "react";
import './Popover.scss';

type PopoverProps = {
  imageUrl: string,
  imageAlt: string,
  description: string,
  canHover: boolean,
  placement: string
}

export default class Popover extends React.Component <PopoverProps> {
  static defaultProps = {
    imageAlt: '',
    description: '',
    canHover: true,
    placement: 'tc' //Check popover.scss for more arrow placement
  };
  
  render() {
    const vm = this;
    
    return (
      <div className="popover">
        <div className={"popover__arrow popover__arrow--"+ vm.props.placement}></div>
        <div className="popover__content">
          <img src={vm.props.imageUrl} alt={vm.props.imageAlt} className="popover__content__img"/>
          <p className="popover__content__description">{ vm.props.description }</p>
        </div>
      </div>
    );
  }
}