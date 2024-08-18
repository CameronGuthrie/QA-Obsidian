# Obsidian Notes Website

This repository contains a set of notes originally written in [Obsidian](https://obsidian.md/), a powerful knowledge base that works on top of a local folder of plain text Markdown files. These notes have been converted into a website using [Quartz](https://quartz.jzhao.xyz/), a fast and customizable static site generator, and are hosted on [Netlify](https://www.netlify.com/).

## Features

- **Obsidian Integration**: All notes are written and maintained in Obsidian, leveraging its powerful linking, tagging, and search features.
- **Quartz Conversion**: Notes are converted into a beautiful, fast, and responsive website using Quartz.
- **Netlify Hosting**: The website is automatically deployed and hosted on Netlify, ensuring quick access and reliable uptime.

## Demo Site

You can view a live demo of this site at: [qa-obsidian.netlify.app](https://qa-obsidian.netlify.app/)

## Getting Started

### Prerequisites

To work with this repository locally, you will need:

- [Git](https://git-scm.com/)
- [Obsidian](https://obsidian.md/)
- [Quartz](https://quartz.jzhao.xyz/) installed locally
- A Netlify account (optional, for hosting)

### Clone the Repository

```bash
git clone https://github.com/yourusername/obsidian-notes-website.git
cd obsidian-notes-website
```

### Set Up Your Local Environment

1. **Open the folder in Obsidian**:
   - Launch Obsidian and open the repository content folder as a vault.
   - You can edit or add notes directly within Obsidian.

2. **Set Up Quartz**:
   - Follow the [Quartz documentation](https://quartz.jzhao.xyz/getting-started) to configure Quartz for your notes.
   - Ensure Quartz is pointing to the correct directory where your notes are stored.

### Building and Serving the Site Locally

Once Quartz is initialized, you can see what your site looks like locally:

```bash
npx quartz build --serve
```

This command will start a local web server to run your Quartz site on your computer. Open a web browser and visit [http://localhost:8080/](http://localhost:8080/) to view it. This allows you to preview your notes as they will appear on the web before deploying them.

### Deploying to Netlify

To deploy your Quartz-powered website on Netlify:

1. **Log in to Netlify**:
   - Go to the [Netlify dashboard](https://app.netlify.com/) and log in.

2. **Add a New Site**:
   - Click “Add new site” and select your Git provider (e.g., GitHub, GitLab, Bitbucket).
   - Choose the repository containing your Quartz project.

3. **Configure the Build**:
   - Under “Build command”, enter:
     ```bash
     npx quartz build
     ```
   - Under “Publish directory”, enter:
     ```bash
     public
     ```

4. **Deploy the Site**:
   - Press “Deploy”. Once it’s live, you’ll receive a `*.netlify.app` URL to view your website.

5. **Custom Domain** (Optional):
   - To add a custom domain, navigate to “Domain management” in the left sidebar of the Netlify dashboard.

## Customization

- **Themes and Styles**: Customize the appearance of your Quartz site by modifying the configuration files.
- **Plugins**: Enhance functionality by adding Obsidian plugins. These plugins may not directly impact the static site but can improve your note-taking experience.

## Acknowledgements

- [Obsidian](https://obsidian.md/) for the powerful note-taking environment.
- [Quartz](https://quartz.jzhao.xyz/) for the fantastic static site generator.
- [Netlify](https://www.netlify.com/) for reliable and free hosting.