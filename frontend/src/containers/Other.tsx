import { FC, useState, useEffect } from "react";
// import MDEditor from "@uiw/react-md-editor";
import Layout from "components/Layout";

// // https://chaika.hatenablog.com/entry/2022/12/02/083000
// import { unified } from "unified";
// // markdown をパースする
// import remarkParse from "remark-parse";
// // Support GFM (tables, autolinks, tasklists, strikethrough)
// import remarkGfm from "remark-gfm";
// // HTML に変換する
// import remarkRehype from "remark-rehype";
// // HTMLタグなどでラップ
// import rehypeDocument from "rehype-document";
// // HTMLをフォーマット
// import rehypeFormat from "rehype-format";
// // サニタイズ
// import rehypeSanitize from "rehype-sanitize";
// // HTML にシリアライズ
// import rehypeStringify from "rehype-stringify";

// const parseMarkdown = async (text: string): Promise<string> => {
//   const file = await unified()
//     .use(remarkParse)
//     // .use(remarkGfm)
//     .use(remarkRehype)
//     .use(rehypeDocument)
//     .use(rehypeFormat)
//     // .use(rehypeSanitize)
//     .use(rehypeStringify)
//     .process(text);
//   // VText が返されるので String にして返す
//   return String(file);
// };

const Other: FC = () => {
  // const [markdown, setMarkdown] = useState<string | undefined>(
  //   "**Hello world!!!**"
  // );
  // // useEffect
  // useEffect(() => {
  //   const outLog = async () => {
  //     console.log(markdown);
  //     if (markdown) {
  //       let htmlString = await parseMarkdown(markdown);
  //       console.log(htmlString);
  //     }
  //   };
  //   outLog();
  // }, [markdown]);

  return (
    <>
      <Layout>
        <div>other</div>
        {/* <MDEditor
          value={markdown}
          onChange={(value) => {
            setMarkdown(value);
          }}
          previewOptions={{
            rehypePlugins: [[remarkParse]],
          }}
        />
        <MDEditor.Markdown
          source={markdown}
          style={{ whiteSpace: "pre-wrap" }}
          remarkPlugins={[remarkGfm]}
        /> */}
      </Layout>
    </>
  );
};

export default Other;
