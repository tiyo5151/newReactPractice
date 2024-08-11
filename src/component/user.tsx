import React from 'react';
import type { User } from '../types/useUser';

export default function UserComponent(): React.ReactElement {
  const user: User = {
    name: 'Taro',
    age: 20,
    profile: 'I am a student.',
    checked: false,
  };

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.profile}</p>
      <p>{user.checked ? 'checked' : 'not checked'}</p>
    </div>
  );
}
