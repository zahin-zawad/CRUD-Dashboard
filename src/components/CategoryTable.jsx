function CategoryTable({ categories, handleEdit, setCategories }) {
    const handleDelete = (slug) => {
      if (window.confirm('Are you sure you want to delete this category?')) {
        setCategories(categories.filter((category) => category.slug !== slug));
      }
    };
  
    return (
      <table className="w-full bg-white shadow-lg rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4">Category Name</th>
            <th className="py-2 px-4">Description</th>
            <th className="py-2 px-4">Order Count</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.slug} className="border-b">
              <td className="py-2 px-4">{category.name}</td>
              <td className="py-2 px-4">{category.slug}</td>
              <td className="py-2 px-4">{category.orderCount}</td>
              <td className="py-2 px-4">
                <button
                  className="text-blue-500 mr-2"
                  onClick={() => handleEdit(category)}
                >
                  Edit
                </button>
                <button
                  className="text-red-500"
                  onClick={() => handleDelete(category.slug)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default CategoryTable;
  