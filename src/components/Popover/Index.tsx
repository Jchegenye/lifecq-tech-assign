import * as React from "react";
import './Popover.scss';

type PopoverProps = {
  imageUrl: string,
  imageAlt: string,
  description: string,
  canHover: boolean,
  placement: string,
  isActive: boolean
}

export default class Popover extends React.Component <PopoverProps> {
  static defaultProps = {
    imageAlt: '',
    description: '',
    canHover: true,
    placement: 'tc', //Check popover.scss for more arrow placements
    isActive: false 
  };
  
  render() {
    const vm = this;
    
    return (
      <div className={vm.props.isActive ? 'popover active':'popover'}>
        <div className={"popover__arrow popover__arrow--"+ vm.props.placement}></div>
        <div className="popover__content">
          <img src={vm.props.imageUrl} alt={vm.props.imageAlt} className="popover__content__img"/>
          <p className="popover__content__description">{ vm.props.description }</p>
        </div>
      </div>
    );
  }
}