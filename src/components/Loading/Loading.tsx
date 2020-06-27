import React, { memo } from 'react';
import './Loading.scss';

const Loading = () => (
  <div className="loading">
    <div className="spinner">
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </div>
  </div>
);

export default memo(Loading);
