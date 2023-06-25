import Markdown from "markdown-to-jsx"
import { useEffect, useState } from "react"
import Code from "./Code";
import InlineCode from "./InlineCode";

const Post = ( {contentPath} ) => {
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    fetch(contentPath)
      .then((response) => response.text())
      .then((data) => setPostContent(data))
      .catch((error) => console.log(error));
  }, [contentPath]);

  return (
    <article className="article">
      <div className="container">
        <div className="post-wrapper">
          <Markdown options={{
            overrides: {
              Code: {
                component: Code
              },
              code: {
                component: InlineCode
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