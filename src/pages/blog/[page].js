import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import styles from '@/styles/blog.module.css'; // Ensure the path is correct
import Image from 'next/image';


const postsPerPage = 3;

export async function getStaticProps({ params }) {
  const page = parseInt(params.page.substring(4), 10); // Extract the number from 'pageX'
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

  posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  const numOfPages = Math.ceil(posts.length / postsPerPage);
  const pageIndexStart = (page - 1) * postsPerPage;
  const pageIndexEnd = pageIndexStart + postsPerPage;
  const paginatedPosts = posts.slice(pageIndexStart, pageIndexEnd);

  return {
    props: {
      posts: paginatedPosts,
      currentPage: page,
      numOfPages,
    },
  };
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'src/_content');
  const files = fs.readdirSync(postsDirectory);
  const numOfPages = Math.ceil(files.length / postsPerPage);

  const paths = Array.from({ length: numOfPages }, (_, i) => ({
    params: { page: `page${i + 1}` },
  }));

  return {
    paths,
    fallback: false,
  };
}

// Calculate the height based on the 16:9 aspect ratio
const aspectRatio = 2 / 3;
const width = 320;
const height = width * aspectRatio;

const BlogPage = ({ posts, currentPage, numOfPages }) => {
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
                />
              </div>
            </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.pagination}>
        {currentPage > 1 && (
          <Link href={`/posts/page${currentPage - 1}`}>
            <p>Previous Page</p>
          </Link>
        )}
        <span> Page {currentPage} of {numOfPages} </span>
        {currentPage < numOfPages && (
          <Link href={`/posts/page${currentPage + 1}`}>
            <p>Next Page</p>
          </Link>
        )}
      </div>
    </div>
    </>
  );
};

export default BlogPage;
