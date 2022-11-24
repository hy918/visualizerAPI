import React from 'react'

import MyEditor from './Editer'
import MdEditorCommon from '@/components/MdEditor';
import './style.less';
const WriteArticle = () => {
  return (
    <div className='writeArticleRoot'>
      <MyEditor />
      <p>下面是markDown</p>
      <MdEditorCommon />
    </div>
  )
}
export default WriteArticle;