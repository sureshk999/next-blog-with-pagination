# Boilerplate Blog with Pagination: A React/Next.js Project

Welcome to the GitHub repository for my custom-built boilerplate blog with pagination, designed using React and Next.js. This project is tailored for developers and content creators seeking a streamlined, efficient blogging platform that's easy to deploy and manage.

## Features

-   **Boilerplate Template**: A ready-to-use template for setting up a blog quickly and efficiently.
-   **Simple File Structure**: No complicated mess, files all over the place, or complex linking. Very easy to get started.
-   **Very Few Dependencies**: Minimal dependencies to keep the project lightweight and manageable.
-   **Superfast**: Leveraging Next.js for blazing fast performance.
-   **Basic CSS Styling Included**: Comes with basic styling to get you started, which you can easily expand upon.
-   **`_app.js` Routing and Layout**: Efficient routing and layout management with Next.js's `_app.js`.
-   **Basic Cards Included**: Pre-designed card components for displaying blog posts attractively.
-   **Pagination on Blog Pages and Individual Posts**: This feature is a highlight of the template, ensuring easy navigation and a clean, user-friendly interface.
-   **Image Optomisation with Next/Image**: Automatic optomisation of images through next/image.

![SuperFast](/images/ss.jpg)

## Dependencies

The project relies on the following dependencies:

```

"dependencies": {
  "@mdx-js/loader": "^3.0.0",
  "@next/mdx": "^14.0.4",
  "gray-matter": "^4.0.3",
  "next": "14.0.4",
  "next-mdx-remote": "^4.4.1",
  "react": "^18",
  "react-dom": "^18"
}

```

These dependencies include essential packages for MDX support, content parsing, and the core React and Next.js frameworks.

## File Tree

Simple File Structure

```
src                                                   
├─ _content                                           
│  ├─ A-Journey-Through-the-Mountains.mdx             
│  ├─ Building-A-NextJS-template-with-pagination.mdx  
│  ├─ Coding-Is-Fun.mdx                               
│  ├─ Creative-Commons.mdx                            
│  ├─ Deploy-With-Ease.mdx                            
│  ├─ Exploring-The-Depths-Of-The-Ocean.mdx           
│  ├─ Exploring-the-Hidden-Gems-of-Paris.mdx          
│  ├─ Support-Me.mdx                                  
│  ├─ The-Art-of-Making-Sourdough-Bread.mdx           
│  ├─ The-Future-of-AI:-Trends to-Watch-in-2023.mdx   
│  ├─ Urban-Photography-Tips.mdx                      
│  └─ Use-This-Template.mdx                           
├─ app                                                
│  └─ favicon.ico                                     
├─ components                                         
│  ├─ Footer.js                                       
│  ├─ Header.js                                       
│  ├─ MarkdownImage.js                                
│  └─ mdxComponents.js                                
├─ pages                                              
│  ├─ blog                                            
│  │  └─ [page].js                                    
│  ├─ posts                                           
│  │  └─ [slug].js                                    
│  ├─ _app.js                                         
│  ├─ about.js                                        
│  ├─ blog.js                                         
│  └─ index.js                                        
└─ styles                                             
   ├─ MarkdownImage.module.css                        
   ├─ blog.module.css                                 
   ├─ footer.module.css                               
   ├─ globals.css                                     
   ├─ header.module.css                               
   ├─ page.module.css                                 
   └─ post.module.css                                 
```

## How to Use This Repository

This repository contains the code for a blog template with pagination, utilizing MDX for content management.

### Cloning the Repository

To clone the repository and run it on your local machine, follow these steps:

1.  **Clone the Repository**:
     
    `git clone https://github.com/sureshk999/blog-with-paginate.git` 
    
2.  **Navigate to the Repository Folder**:
    
    
    `cd blog-with-paginate` 
    
3.  **Install Dependencies**: Make sure you have Node.js installed, then run:
    

    
    `npm install` 
    
    or if you use Yarn:
    

    
    `yarn install` 
    
4.  **Run the Application**:
    

    
    `npm run dev` 
    
    or with Yarn:
    

    
    `yarn dev` 
    
    The application will start running on `localhost:3000`.
    

### Customizing the Blog

-   Modify the MDX files under `_content` to add your blog posts.
-   Adjust styles in the `styles` directory to personalize the appearance.
-   Update `components` and `layout.js` in the `app` folder for structural changes.

## Live Demo

Check out the live demo of this blog template at [demo-blog-with-paginate.sureshkhirwadkar.dev](https://demo-blog-with-paginate.sureshkhirwadkar.dev/).

## Support

If you find this template useful and would like to support my work, please consider [buying me a coffee](https://www.buymeacoffee.com/sureshkhirwadkar). Your support is greatly appreciated!

## Photos
From Unsplash
Credit is attributed to the original photographers

## Follow Me

Follow my work at [sureshkhirwadkar.dev](https://sureshkhirwadkar.dev)