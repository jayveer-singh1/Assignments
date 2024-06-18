import React from 'react';

const DeleteButton = ({ id, onDelete }) => {
  const handleClick = () => {
    axios.delete(`https://dummyjson.com/products${id}`)
      .then(response => {
        console.log('Deleted successfully');
        onDelete(); 
      })
      .catch(error => {
        console.error('Error deleting:', error);
      });
  };

  return (
    <button onClick={handleClick}>Delete</button>
  );
};

export default DeleteButton;
