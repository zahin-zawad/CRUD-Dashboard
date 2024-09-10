import { useState, useEffect } from 'react';

function CategoryDrawer({ setDrawerOpen, addCategory, updateCategory, editingCategory }) {
  const [categoryName, setCategoryName] = useState('');
  const [slug, setSlug] = useState('');
  const [orderCount, setOrderCount] = useState(0);

  
  useEffect(() => {
    if (editingCategory) {
      setCategoryName(editingCategory.name);
      setSlug(editingCategory.slug);
      setOrderCount(editingCategory.orderCount);
    } else {
      
      setCategoryName('');
      setSlug('');
      setOrderCount(0);
    }
  }, [editingCategory]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const category = { name: categoryName, slug, orderCount };

    if (editingCategory) {
      updateCategory(category); 
    } else {
      addCategory(category);
    }
    
    setDrawerOpen(false);
  };

  return (
    <div className="fixed top-0 right-0 h-full w-1/4 bg-white shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">
        {editingCategory ? 'Edit Category' : 'Add New Category'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Category Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Description</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Order Count</label>
          <input
            type="number"
            className="w-full border border-gray-300 p-2 rounded"
            value={orderCount}
            onChange={(e) => setOrderCount(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="text-gray-500 mr-4"
            onClick={() => setDrawerOpen(false)}
          >
            Cancel
          </button>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            {editingCategory ? 'Update Category' : 'Add Category'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CategoryDrawer;
