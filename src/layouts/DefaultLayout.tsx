import React from 'react';

const DefaultLayout: React.FC = ({children}) => {
  return (
    <div>
      <header>デフォルトレイアウト</header>
      <article>{children}</article>
      <footer>フッター</footer>
    </div>
  );
};

export default DefaultLayout;
