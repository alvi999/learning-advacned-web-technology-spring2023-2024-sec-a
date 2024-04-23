import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <h1>New World</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Welcome</p>
      </footer>
    </div>
  );
};

export default Layout;
