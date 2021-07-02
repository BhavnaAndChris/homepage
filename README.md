# Website: sointernational.love

[![build status](https://badgen.net/travis/SoInternational/sointernational.github.io/main?label=build)](https://travis-ci.com/github/SoInternational/sointernational.github.io)

The homepage of Bhavna and Chris (and Mimi).

## Getting Started

1. Clone the repo
2. Run `npm i` at the repo root to install dependencies.
3. Run `npm start` to test locally.
4. Commit and push the `main` branch to publish.
   * It'll take a few minutes to build and publish.

## Adding Blog Posts

Add a markdown file with the filename format `<YEAR>-<MONTH>-<DAY>-<TITLE>.md` to the [public/posts](public/posts) directory.

- Hyphens in the title will be replaced with spaces.
- [URL encoded](https://en.wikipedia.org/wiki/Percent-encoding) characters in the title will be decoded.

Edit the markdown file to write the post.

 - Add images to the [public/posts/assets](public/posts/assets) directory and reference them in the usual markdown way: `![title](assets/<filename>)`
