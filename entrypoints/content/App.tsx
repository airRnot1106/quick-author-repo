import { Button } from '@/components/button';
import { Check, Copy } from '@/components/icon';
import { FC } from 'react';

import './App.css';

const App: FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    const url = window.location.href;
    const [, , , author, repo] = url.split('/');
    if (author == null || repo == null) {
      return;
    }

    await navigator.clipboard.writeText(`${author}/${repo}`);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Button
      size="xs"
      type="button"
      style={{
        color: 'var(--colors-subtle)',
      }}
      onClick={handleCopy}
    >
      {isCopied ? <Check /> : <Copy />}
    </Button>
  );
};

export default App;
