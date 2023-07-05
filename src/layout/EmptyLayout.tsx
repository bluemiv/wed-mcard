import { ReactNode } from 'react';

interface TEmptyLayoutProps {
  children: ReactNode;
}

export default function EmptyLayout({ children }: TEmptyLayoutProps) {
  return <div className="min-h-screen max-w-mcard m-auto">{children}</div>;
}
