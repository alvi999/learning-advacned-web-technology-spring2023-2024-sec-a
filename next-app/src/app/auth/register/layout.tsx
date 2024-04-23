import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Next.js Register Page</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Footer content here</p>
      </footer>
    </div>
  );
};

export default Layout;
