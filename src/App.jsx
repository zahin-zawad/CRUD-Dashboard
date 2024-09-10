import { useState } from 'react';
import CategoryDrawer from './components/CategoryDrawer';
import CategoryTable from './components/CategoryTable';

function App() {
  const [categories, setCategories] = useState([
    { name: 'Electronics', slug: 'electronics', orderCount: 12 },
    { name: 'Books', slug: 'books', orderCount: 7 },
  ]);
  
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null); 

 
  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

 
  const updateCategory = (updatedCategory) => {
    setCategories(
      categories.map((category) =>
        category.slug === updatedCategory.slug ? updatedCategory : category
      )
    );
  };

  
  const handleEdit = (category) => {
    setEditingCategory(category);
    setDrawerOpen(true);
  };

  return (
    <div className="flex h-screen">
      
      <nav className="bg-gray-800 text-white w-1/5 min-w-max p-6">
        <ul>
          <li className="py-2">Dashboard</li>
          <li className="py-2">Products</li>
          <li className="py-2">Orders</li>
          <li className="py-2">Settings</li>
        </ul>
      </nav>

      
      <div className="flex-grow bg-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Product Categories</h1>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => { setDrawerOpen(true); setEditingCategory(null); }}
          >
            Add Category
          </button>
        </div>
        <CategoryTable
          categories={categories}
          handleEdit={handleEdit}
          setCategories={setCategories}
        />
      </div>

      
      {drawerOpen && (
        <CategoryDrawer
          setDrawerOpen={setDrawerOpen}
          addCategory={addCategory}
          updateCategory={updateCategory}
          editingCategory={editingCategory}
        />
      )}
    </div>
  );
}

export default App;
