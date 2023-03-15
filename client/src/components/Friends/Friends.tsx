import React from 'react';
import Follow from './Follow';
import Follower from './Follower';

export default function Friends() {
  return (
    <div style={{ display: 'flex' }}>
      <Follow />
      <Follower />
    </div>
  );
}
