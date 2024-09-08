import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick} style={styles.button}>
    {label}
  </button>
);

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    margin: '10px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
};

export default Button;
