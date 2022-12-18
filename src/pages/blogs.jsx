import React from 'react'
import { client } from '../libs/client';
import BlogId from './blog/[id]';

const blogs = () => {
  return (
    <div>
      <BlogId />
    </div>
  )
}

export const getStaticProps = async () => {
    const data = await client.get({
      endpoint: 'hello',
    });
  
    return {
      props: {
        data,
      },
    };
  };

export default blogs
