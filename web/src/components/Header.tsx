import React from 'react';

import '../styles/components/header.css';

interface Props {
  title: string;
  count: number;
}

export default function Header({ title, count }: Props) {
  return (
    <div id="app-header">
      <h1>{title}</h1>
      <span>{count} orfanatos</span>
    </div>
  );
}
