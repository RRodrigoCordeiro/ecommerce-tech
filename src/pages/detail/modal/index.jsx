import ProductDetail from "../ProductDetail";

function ProductModal({ isOpen, onClose, productId }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button 
          className="absolute top-2 right-2 text-red-500 text-xl" 
          onClick={onClose}
        >
          ✖
        </button>
        <ProductDetail id={productId} />
      </div>
    </div>
  );
}

export default ProductModal;
