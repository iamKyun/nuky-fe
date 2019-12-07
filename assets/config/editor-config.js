import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter'
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline'
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough'
import Code from '@ckeditor/ckeditor5-basic-styles/src/code'
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript'
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript'
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote'
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage'
import Heading from '@ckeditor/ckeditor5-heading/src/heading'
import Image from '@ckeditor/ckeditor5-image/src/image'
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption'
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle'
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar'
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload'
import Link from '@ckeditor/ckeditor5-link/src/link'
import List from '@ckeditor/ckeditor5-list/src/list'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock'
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight'
import Font from '@ckeditor/ckeditor5-font/src/font'
import Table from '@ckeditor/ckeditor5-table/src/table'
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar'

const getLanguageClass = (language) => {
  const fixedClass = 'line-numbers match-braces'
  return language == null
    ? fixedClass
    : 'language-' + language.trim() + ' ' + fixedClass
}

const defaultConfig = {
  plugins: [
    Essentials,
    Font,
    UploadAdapter,
    Autoformat,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Code,
    Subscript,
    Superscript,
    BlockQuote,
    EasyImage,
    Heading,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Link,
    List,
    Paragraph,
    Alignment,
    CodeBlock,
    Highlight,
    Table,
    TableToolbar
  ],
  toolbar: {
    items: [
      'heading',
      '|',
      'fontSize',
      'fontColor',
      'fontBackgroundColor',
      'highlight',
      '|',
      'alignment',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'code',
      'subscript',
      'superscript',
      '|',
      'imageUpload',
      'link',
      '|',
      'bulletedList',
      'numberedList',
      'insertTable',
      '|',
      'blockQuote',
      'codeBlock',
      '|',
      'undo',
      'redo'
    ]
  },
  image: {
    toolbar: ['imageStyle:full', 'imageStyle:side', '|', 'imageTextAlternative']
  },
  codeBlock: {
    languages: [
      {
        language: 'plaintext',
        label: 'Plain text',
        class: getLanguageClass()
      },
      {
        language: 'java',
        label: 'Java',
        class: getLanguageClass('java')
      },
      {
        language: 'javascript',
        label: 'JavaScript',
        class: getLanguageClass('javascript')
      },
      {
        language: 'Markup',
        label: 'HTML/XML',
        class: getLanguageClass('markup')
      },
      {
        language: 'sql',
        label: 'Sql',
        class: getLanguageClass('sql')
      },
      {
        language: 'bash',
        label: 'Bash',
        class: getLanguageClass('bash')
      },
      {
        language: 'css',
        label: 'CSS',
        class: getLanguageClass('css')
      }
    ]
  },
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
  }
}

export default defaultConfig
