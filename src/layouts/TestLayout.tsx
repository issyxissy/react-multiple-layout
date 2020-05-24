import React from 'react';

const TestLayout: React.FC = ({children}) => {
  return (
    <div>
      <header>テストレイアウト</header>
      <article>{children}</article>
      <footer>フッター2</footer>
    </div>
  );
};

export default TestLayout;
