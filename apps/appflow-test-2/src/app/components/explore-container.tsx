import './explore-container.scss';

import React from 'react';

import { CommonStuff } from '@appflow-monorepo-sandbox/common-stuff';

export const ExploreContainer = () => {
  return (
    <div className="container">
      <h1>Welcome to appflow-test-2!</h1>
      <strong>Ready to create an app?</strong>
      <p>
        Start with Ionic{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
      <CommonStuff />
    </div>
  );
};

export default ExploreContainer;
