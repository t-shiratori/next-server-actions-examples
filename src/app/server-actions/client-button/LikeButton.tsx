'use client';

import { useState } from 'react';
import { incrementLike } from './actions';
import { Button } from '@/components/Button';

type Props = { initialLikes: number };

export const LikeButton = ({ initialLikes }: Props) => {
  const [likes, setLikes] = useState(initialLikes);

  return (
    <>
      <p>Total Likes: {likes}</p>
      <Button
        label="like"
        onClick={async () => {
          const updatedLikes = await incrementLike(likes);
          setLikes(updatedLikes.likes);
        }}
      />
    </>
  );
};
