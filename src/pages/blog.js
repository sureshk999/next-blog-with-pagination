import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import styles from '@/styles/blog.module.css';
import Image from 'next/image';


// Set your desired number of posts per page
const postsPerPage = 3;

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'src/_content');
  const files = fs.readdirSync(postsDirectory);

  let posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '');
    const markdownWithMeta = fs.readFileSync(
      path.join(postsDirectory, filename),
      'utf-8'
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  // Sort posts by date
  posts = posts.sort((a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
  });

  // Calculate the total number of pages
  const numOfPages = Math.ceil(posts.length / postsPerPage);

  // Only get posts for the first page
  const paginatedPosts = posts.slice(0, postsPerPage);

  return {
    props: {
      posts: paginatedPosts,
      currentPage: 1,
      numOfPages,
    },
  };
}

// Calculate the height based on the 16:9 aspect ratio
const aspectRatio = 2 / 3;
const width = 320;
const height = width * aspectRatio;

const HomePage = ({ posts, currentPage, numOfPages }) => {
  return (
    <>

    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>Blog Posts</h1>
      <ul className={styles.postsList}>
        {posts.map((post) => (
          <li key={post.slug} className={styles.postItem}>
            <Link href={`/posts/${post.slug}`}>
            <div className={styles.blogCard} style={{ width: '400px' }}>
              <p className={styles.postTitle}>{post.frontmatter.title}</p>
              <p className={styles.postDate}>{post.frontmatter.date}</p>
              <div className={styles.imageContainer}>
                <Image
                  src={post.frontmatter.heroImage}
                  alt="Description of the hero image"
                  width={width}
                  height={height}
                  className={styles.blogImage}
                />
              </div>
            </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className={styles.pagination}>
        {currentPage > 1 && (
          <Link href={`/blog/page${currentPage - 1}`}>
            <p>Previous Page</p>
          </Link>
        )}
        <span> Page {currentPage} of {numOfPages} </span>
        {currentPage < numOfPages && (
          <Link href={`/blog/page${currentPage + 1}`}>
            <p>Next Page</p>
          </Link>
        )}
      </div>
    </div>
    </>
  );
};

export default HomePage;
