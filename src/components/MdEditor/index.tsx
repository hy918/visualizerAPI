import React, { useState } from "react";
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import "react-markdown-editor-lite/lib/index.css";
const MdEditorCommon = () => {
  // 数据保存
  const [value, setValue] = useState("")
  const [linkUrl, setLinkUrl] = useState("");

  const mdParser = new MarkdownIt({
    html: true,
    linkify: false,
    typographer: true
  }).enable('image');

  // 检测markdown数据变化
  const handleEditorChange = ({ html, text }: { html: any, text: any }) => {
    setValue(text)
    console.log('handleEditorChange', html, text);
  }

  const onImageUpload = (file: any) => {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = (data: any) => {
        resolve(data?.target?.result);
      };
      reader.readAsDataURL(file);
    });
  }
  return (
    <MdEditor
      value={value}
      onChange={handleEditorChange}
      renderHTML={text => mdParser.render(text)}
      style={
        { height: 400 }
      }
      onImageUpload={onImageUpload}
      linkUrl={linkUrl}
    >
    </MdEditor>
  )
}
export default MdEditorCommon;

