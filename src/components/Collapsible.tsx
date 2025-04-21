import React, { useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './styles.module.css';

export default function Collapsible({ 
  children, 
  title, 
  className = '', 
  defaultOpen = false 
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === 'dark';

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapsible-container ${className}`} style={{
      margin: '1rem 0',
      borderRadius: '8px',
      overflow: 'hidden',
      border: `1px solid ${isDarkTheme ? '#4b5563' : '#e5e7eb'}`,
      backgroundColor: isDarkTheme ? '#1f2937' : '#ffffff',
      transition: 'all 0.3s ease'
    }}>
      <div 
        className="collapsible-header"
        onClick={toggleCollapsible}
        style={{
          padding: '12px 16px',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: isDarkTheme ? '#2d3748' : '#f3f4f6',
          color: isDarkTheme ? '#e5e7eb' : '#1f2937',
          userSelect: 'none'
        }}
      >
        <span>{title}</span>
        <span style={{ 
          transition: 'transform 0.3s ease',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
        }}>
          {isOpen ? '▲' : '▼'}
        </span>
      </div>
      <div
        className="collapsible-content"
        style={{
          padding: isOpen ? '16px' : '0 16px',
          maxHeight: isOpen ? '1000px' : '0',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          color: isDarkTheme ? '#e5e7eb' : '#1f2937',
          opacity: isOpen ? 1 : 0
        }}
      >
        {children}
      </div>
    </div>
  );
}