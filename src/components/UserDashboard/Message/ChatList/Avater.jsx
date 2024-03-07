"use cliet";
import Image from "next/image";
import React, { Component } from "react";

export default class Avatar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="avatar">
        <div className="avatar-img">
          <Image width={200} height={200} alt="" src={this.props.image} />
        </div>
        <span className={`isOnline ${this.props.isOnline}`}></span>
      </div>
    );
  }
}
