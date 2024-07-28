import { useCallback, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TAGS = {
  b: '*',
  strong: '*',
  i: '_',
  em: '_',
  s: '~',
  del: '~',
  p: '\n',
  br: '\n',
  ol: '',
  ul: '',
  li: '\n• '
} as const;

export const SlackToolbar = () => {
  const [text, setText] = useState('');

  const transformSlackMarkdownToHTML = (markdown: any) => {
    const html = markdown
      .replace(/\n/g, '<br>')
      .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
      .replace(/__([^_]+)__/g, '<b>$1</b>')
      .replace(/\*([^*]+)\*/g, '<i>$1</i>')
      .replace(/_([^_]+)_/g, '<i>$1</i>')
      .replace(/~~([^~]+)~~/g, '<s>$1</s>')
      .replace(/\n\s*\*\s*/g, '\n<li>')
      .replace(/<\/li>\n<li>/g, '\n<li>')
      .replace(/^<li>/, '')
      .replace(/<\/li>$/, '');

    return html;
  };

  const htmlToSlackMarkdown = useCallback(
    (html: any) => {
      let isOrderedList = false;
      let numericListIndex = 1;

      const markdown = html
        .replace('<li></li>', '') // empty list
        .replace('<li><br></li>', '<li></li>') // empty /n list item
        .replace('<li>&nbsp;</li>', '<li></li>')
        .replace('<li><strong><em><s>&nbsp;</s></em></strong>', '<li></li>')
        .replace('&nbsp;', '\n')
        .replace(/<\/?([a-z]+)>/gi, (tag: string) => {
          if (tag === '<ol>') isOrderedList = true;

          if (tag === '<li>' && isOrderedList) return `\n${numericListIndex}. `;
          if (tag === '</li>') {
            numericListIndex = numericListIndex + 1;
            return '';
          }

          if (tag === '</ol>' || tag === '</ul>') {
            isOrderedList = false;
            numericListIndex = 1;
            return '\n';
          }

          const tagWithoutSlash = tag.replace(
            /<\/?([a-z]+)>/gi,
            '$1'
          ) as keyof typeof TAGS;
          return TAGS[tagWithoutSlash] || '';
        })
        .replace('<span class="ql-cursor">', ''); // remove cursor

      return markdown.trim();
    },
    [text]
  );

  const handleTextChange = useCallback((value: any) => setText(value), [text]);

  const handleClick = useCallback(() => {
    const formattedRequestPayload = { text: htmlToSlackMarkdown(text) };
    setText(transformSlackMarkdownToHTML(text));
    console.log(
      { text, formattedRequestPayload },
      transformSlackMarkdownToHTML(text)
    );
  }, [text]);

  return (
    <div>
      <ReactQuill
        value={text}
        modules={{
          toolbar: [
            ['bold', 'italic', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['clean']
          ]
        }}
        onChange={handleTextChange}
      />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};
