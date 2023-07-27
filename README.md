<h1 align="center">
  Moses: GPCCC website redesign 2023
</h1>

GPCCC website redesign using [Material UI](https://mui.com/) and [GatsbyJS](https://www.gatsbyjs.com).

## 🚀 Quick start

1.  **Set up the Gatsby development environment.**

    Follow the [installation guide](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/#installation-guide).

1.  **Clone the new GPCCC website.**

    Use the Gatsby CLI to clone the website.

    ```shell
    gatsby new moses https://github.com/gpccc/moses
    ```

1.  **Start developing.**

    Navigate into the new church website directory and start it up.

    ```shell
    cd moses/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    The site is now running at `http://localhost:8000`!

    _Note: There is also a second link: _`http://localhost:8000/___graphql`_. This is a tool to use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries)._

    Open the `moses` directory in VS Code and start editing. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories of this project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **Most developers can start with the [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head to [Gatsby documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

GPCCC redesign uses [Netlify](https://www.netlify.com/) for deployment and hosting. (We can consider [Gatsby Cloud](https://www.gatsbyjs.com/products/cloud/) in the future.)

Once changes are pushed to GitHub, Netlify will automatically build and deploy the changes to the [new GPCCC website](https://gpccc.netlify.app).

## :heart: Credits

[Gatsby's blank starter](https://github.com/gatsbyjs/gatsby-starter-hello-world) was used for this project.