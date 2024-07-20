import React from 'react';
import BlogListPaginator from '@theme/BlogListPaginator';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CustomBlogPostItem from '../../components/CustomBlogPostItem';
import styles from './styles.module.css';

function BlogListPage(props) {
  const {siteConfig} = useDocusaurusContext();
  const {metadata, items} = props;

  return (
    <Layout
      title={`Blog | ${siteConfig.title}`}
      description="Blog posts">
      <div className={styles.blogContainer}>
        <div className={styles.blogPosts}>
          {items.map(({content: BlogPostContent}) => (
            <CustomBlogPostItem key={BlogPostContent.metadata.permalink} post={BlogPostContent} />
          ))}
        </div>
        <BlogListPaginator metadata={metadata} />
      </div>
    </Layout>
  );
}

export default BlogListPage;
