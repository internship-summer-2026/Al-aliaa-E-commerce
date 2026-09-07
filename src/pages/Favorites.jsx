import { useState } from "react";
import { LuCircleCheck } from "react-icons/lu";
import BookCard from "../components/BookCard";

// هتيجي من الـ API بعدين، دلوقتي بيانات وهمية للتجربة
const initialBooks = [
  { id: 1, title: "عودة شارلوك هولمز", author: "آرثر كونان دويل", price: 40.0, image: null },
  { id: 2, title: "بصير", author: "أحمد خالد توفيق", price: 45.0, image: null },
  { id: 3, title: "عهد أبانوخ", author: "محمد جلال", price: 35.0, image: null },
  { id: 4, title: "ألا يمكنني الرحيل؟", author: "لي جيسوم لي", price: 50.0, image: null },
  { id: 5, title: "ألا يمكنني الرحيل؟", author: "لي جيسوم لي", price: 50.0, image: null },
  { id: 6, title: "ألا يمكنني الرحيل؟", author: "لي جيسوم لي", price: 50.0, image: null },
  { id: 7, title: "ألا يمكنني الرحيل؟", author: "لي جيسوم لي", price: 50.0, image: null },
  { id: 8, title: "ألا يمكنني الرحيل؟", author: "لي جيسوم لي", price: 50.0, image: null },
];

function Favorites() {
  const [books, setBooks] = useState(initialBooks);
  const [search, setSearch] = useState("");
  const [toasts, setToasts] = useState([]); // [{ id, message, visible }]

  const showToast = (message) => {
    const id = Date.now() + Math.random();

    setToasts((prev) => [...prev, { id, message, visible: false }]);

    // فريم إضافي عشان الـ transition يشتغل من حالة مخفية لحالة ظاهرة
    requestAnimationFrame(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, visible: true } : t))
      );
    });

    // إخفاء الرسالة دي بس بعد شوية
    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, visible: false } : t))
      );
    }, 2200);

    // شيلها نهائيًا من الـ array بعد ما تخلص الحركة
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2500);
  };

  const handleRemove = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
    showToast("تم حذف الكتاب من المفضلة");
  };

  const handleAddToCart = (book) => {
    console.log("تمت الإضافة إلى السلة:", book);
  };

  const filteredBooks = books.filter((book) =>
    book.title.includes(search)
  );

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">

      {/* Toast Notifications (Stacked) */}
      <div className="fixed top-5 right-5 z-50 flex flex-col-reverse gap-2 items-end">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`flex items-center gap-2 bg-green-600 text-white text-sm font-medium px-4 py-3 rounded-xl shadow-lg shadow-green-900/20 ring-1 ring-white/10 transition-all duration-300 ease-out ${
              t.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-3"
            }`}
          >
            <LuCircleCheck className="text-lg shrink-0" />
            <span>{t.message}</span>
          </div>
        ))}
      </div>

      {/* الهيدر */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 py-4">
        <div className="flex w-full sm:w-auto">
          <button className="bg-green-700 text-white px-6 rounded-r-md text-sm shrink-0">
            بحث
          </button>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="بحث"
            className="border border-gray-300 rounded-l-md px-3 py-2 w-full sm:w-56 text-sm text-right outline-none min-w-0"
          />
        </div>
        <span className="text-sm text-gray-600">الرئيسية / عربة التسوق</span>
      </div>

      {/* العنوان */}
      <h1 className="text-center text-2xl font-bold mt-4 mb-10 relative w-fit mx-auto">
        المفضلة
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-14 h-1 bg-green-700 rounded-full" />
      </h1>

      {/* المحتوى */}
      {filteredBooks.length === 0 ? (
        <p className="text-center text-gray-400 py-16">
          لا توجد منتجات في المفضلة حاليًا
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 pb-16">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onRemove={handleRemove}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;