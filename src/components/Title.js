import React, { useEffect } from 'react';

export const Title = () => {
  useEffect(() => {
    document.title = 'To-do App 📝';
  }, []);

  return (
    <h1 className="title">To-Do List</h1>
  )
}
