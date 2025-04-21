import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function Highlight({
  children,
  color = 'yellow',
  fontWeight = 'bold',
}) {
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === 'dark';

  const getHighlightColor = (color) => {
    const lowerCaseColor = color.toLowerCase();
    if (isDarkTheme) {
      switch (lowerCaseColor) {
        case 'yellow':
          return 'rgba(255, 255, 153, 0.7)'; // 다크 모드용 연한 노란색
        case 'green':
          return 'rgba(144, 238, 144, 0.7)'; // 다크 모드용 연한 초록
        case 'blue':
          return 'rgba(173, 216, 230, 0.7)'; // 다크 모드용 연한 파랑
        case 'pink':
          return 'rgba(255, 182, 193, 0.7)'; // 다크 모드용 연한 분홍
        case 'orange':
          return 'rgba(255, 228, 196, 0.7)'; // 다크 모드용 연한 주황
        default:
          return 'rgba(255, 255, 153, 0.7)';
      }
    } else {
      switch (lowerCaseColor) {
        case 'yellow':
          return 'rgba(255, 255, 0, 0.7)';
        case 'green':
          return 'rgba(0, 255, 0, 0.5)';
        case 'blue':
          return 'rgba(0, 191, 255, 0.5)';
        case 'pink':
          return 'rgba(255, 105, 180, 0.5)';
        case 'orange':
          return 'rgba(255, 165, 0, 0.5)';
        default:
          return 'rgba(255, 255, 0, 0.7)';
      }
    }
  };

  const highlightStyle = {
    borderBottom: `3px solid ${getHighlightColor(color)}`,
    paddingBottom: '2px',
    fontWeight,
    transition: 'border-bottom 0.3s ease',
    filter: isDarkTheme ? 'brightness(0.8)' : 'none', 
  };

  return (
    <span
      style={highlightStyle}
    >
      {children}
    </span>
  );
}