import React,{ lazy, Suspense } from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello/>
    <Suspense fallback={<Hello />}>
      <Info/>
    </Suspense>
    
  </div>
);
