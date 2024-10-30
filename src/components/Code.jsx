import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone, faCheck } from '@fortawesome/free-solid-svg-icons';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
import java from 'react-syntax-highlighter/dist/esm/languages/prism/java';
import yaml from 'react-syntax-highlighter/dist/esm/languages/prism/yaml';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import xml from 'react-syntax-highlighter/dist/esm/languages/prism/xml-doc';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';

// For handling errors in syntax highlighting
import { ErrorBoundary } from 'react-error-boundary';

SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('java', java);
SyntaxHighlighter.registerLanguage('yaml', yaml);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('html', xml);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('jsx', jsx);

const Code = ({ children, language }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [copied])

  function errorCode(error){
    return (
      <div className='error-code-block-wrapper'>
        <p className='error-code-block'>Error: {error}</p>
      </div>
    )
  }

  return (
    <div className="code">
      <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
        <button className='icon copy-icon'>
          {copied ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faClone} />}
        </button>
      </CopyToClipboard>
      <ErrorBoundary
        fallbackRender={errorCode}>
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{borderRadius: "10px"}}
        >
          {children}
        </SyntaxHighlighter>
      </ErrorBoundary>
    </div>
  )
}

export default Code