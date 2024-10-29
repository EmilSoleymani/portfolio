import Markdown from "markdown-to-jsx"
import { useEffect, useState } from "react"
import Code from "./Code";
import Image from "./Image";
import InlineCode from "./InlineCode";
import Strikethrough from "./Strikethrough";
import Blockquote from "./Blockquote";

const Post = ( {contentPath, title, date} ) => {
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    fetch(contentPath)
      .then((response) => response.text())
      .then((data) => setPostContent(data))
      .catch((error) => console.log(error));
  }, [contentPath]);

  return (
    <article className="article">
      <div className="title-container">
        <h1 className="post-title">{title}</h1>
        <h3 className="post-subtitle">{date}</h3>
      </div>
      <div className="container">
        <div className="post-wrapper">
          <Markdown options={{
            overrides: {
              Code: {
                component: Code
              },
              code: {
                component: InlineCode
              },
              Line: {
                component: Strikethrough
              },
              blockquote: {
                component: Blockquote
              },
              Image: {
                component: Image
              }
            }
          }}>
            {postContent}
          </Markdown>
        </div>
      </div>
    </article>
  )
}

export default Post