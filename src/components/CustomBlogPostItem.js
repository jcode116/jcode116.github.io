import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './CustomBlogPostItem.module.css';

function CustomBlogPostItem({post}) {
  const {frontMatter, metadata} = post;
  const imageUrl = useBaseUrl(frontMatter.image);
  const postUrl = metadata.permalink;

  return (
    <div className={styles.blogPost}>
      <Link to={postUrl}>
        <img
          className={styles.blogPostImage}
          src={imageUrl}
          alt={frontMatter.title}
        />
      </Link>
      <div className={styles.blogPostTitle}>
        <Link to={postUrl}>{frontMatter.title}</Link>
      </div>
    </div>
  );
}

export default CustomBlogPostItem;
