// src/pages/posts/[slug].js

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import mdxComponents from '@/components/mdxComponents'; // Path to your MDX components
import Image from 'next/image';
import styles from '@/styles/post.module.css'
import Link from 'next/link';


export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src/_content'));

  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.mdx', '') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), 'src/_content', `${slug}.mdx`),
    'utf-8'
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  const heroImage = frontmatter.heroImage;

  // Fetch the list of all posts and sort them by date
  const files = fs.readdirSync(path.join(process.cwd(), 'src/_content'));
  const posts = files.map((filename) => {
    const postContent = fs.readFileSync(
      path.join(process.cwd(), 'src/_content', filename),
      'utf-8'
    );
    const { data: frontmatter } = matter(postContent);
    return { slug: filename.replace('.mdx', ''), frontmatter };
  });

  posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  const currentIndex = posts.findIndex((post) => post.slug === slug);

  const prevPost = currentIndex > 0 ? posts[currentIndex - 1].slug : null;
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1].slug : null;

  const mdxSource = await serialize(content, { scope: frontmatter });

  return { props: { frontmatter, mdxSource, prevPost, nextPost } };
}

const Post = ({ frontmatter, mdxSource, prevPost, nextPost }) => {
  const { title, heroImage, date } = frontmatter;
  const aspectRatio = 2 / 3;
  const width = 640;
  const height = width * aspectRatio;

  return (
    <>

    <div className={styles.blogPost}>
      <div>
        <h1>{title}</h1>
        <p>{date}</p>
        <span style={{ display: 'block', position: 'relative', borderRadius: '10px', overflow: 'hidden', width: `${width}px`, height: `${height}px`, marginLeft: 'auto', marginRight: 'auto' }}>
     
          <Image
            src={heroImage}
            alt="Description of the hero image"
            width={width}
            height={height}
          />
        </span>
        <MDXRemote {...mdxSource} components={mdxComponents} />
      </div>
      
      <div className={styles.pagination}>
        <span>
          {prevPost && (
            <Link href={`/posts/${prevPost}`}>
              <p>Previous Post</p>
            </Link>
          )}
          </span>


          <span>
          {nextPost && (
            <Link href={`/posts/${nextPost}`}>
              <p>Next Post</p>
            </Link>
          )}
          </span>
      </div>      
    </div>
    </>
  );
};

export default Post;
