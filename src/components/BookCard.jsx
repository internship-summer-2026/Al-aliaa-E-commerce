import { LuShoppingBag, LuTrash } from "react-icons/lu";

function BookCard({ book, onRemove, onAddToCart }) {
  return (
    <div className="relative bg-white rounded-xl shadow-sm flex flex-col">

      <button
        onClick={() => onRemove(book.id)}
        aria-label="حذف من المفضلة"
        className="absolute top-2 left-2 w-8 h-8 bg-white rounded-[6px] shadow flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-200"
      >
        <LuTrash />
      </button>

      <div className="aspect-[3/4] bg-gray-100 rounded-t-xl" />

      <div className="px-4 pt-3 text-center">
        <p className="text-sm text-gray-800 font-medium">{book.title}</p>
        <p className="text-xs text-gray-500 mb-1">{book.author}</p>
        <p className="font-bold">{book.price.toFixed(2)} ر.س</p>        
      </div>

      <hr className="border-gray-300 my-4 " />

      <button
        onClick={() => onAddToCart(book)}
        className="mx-4 mb-10 mt-3 py-2 bg-green-700 hover:bg-green-800 text-white text-sm rounded-[10px] flex items-center justify-center gap-2"
      >
        <span>اضف الى السلة</span>
        <LuShoppingBag className="fill-white text-green-700" />
      </button>
    </div>
  );
}

export default BookCard;