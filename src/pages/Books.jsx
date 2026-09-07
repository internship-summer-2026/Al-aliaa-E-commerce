import { useState, useEffect } from "react";
import {
    LuBookOpen,
    LuPlus,
    LuSearch,
    LuFilter,
    LuTrash2,
    LuPencil,
    LuEye,
    LuChevronDown,
    LuChevronRight,
    LuChevronLeft,
    LuX,
} from "react-icons/lu";

const categories = ["خيال علمي", "سيرة ذاتية", "شعر", "رواية", "علوم"];
const publishStatuses = ["منشور", "مسودة"];
const availabilityStatuses = ["متوفر", "قريباً", "غير متوفر"];

const mockBooks = [
    {
        id: 1,
        title: "مقدمة في الفيزياء",
        author: "د. أحمد زويل",
        category: "علوم",
        price: 120,
        availability: "متوفر",
        status: "مسودة",
    },
    {
        id: 2,
        title: "رواية 1984",
        author: "جورج أورويل",
        category: "خيال علمي",
        price: 55,
        availability: "متوفر",
        status: "منشور",
    },
    {
        id: 3,
        title: "الأيام",
        author: "طه حسين",
        category: "سيرة ذاتية",
        price: 38,
        availability: "قريباً",
        status: "منشور",
    },
    {
        id: 4,
        title: "ديوان نزار قباني",
        author: "نزار قباني",
        category: "شعر",
        price: 52,
        availability: "متوفر",
        status: "منشور",
    },
    {
        id: 5,
        title: "مئة عام من العزلة",
        author: "غابرييل ماركيز",
        category: "رواية",
        price: 60,
        availability: "متوفر",
        status: "منشور",
    },
    {
        id: 6,
        title: "الأمير",
        author: "نيقولا مكيافيلي",
        category: "علوم",
        price: 42,
        availability: "غير متوفر",
        status: "منشور",
    },
];

const PAGE_SIZE = 5;

function BookCover() {
    return (
        <div className="w-11 h-14 rounded-md bg-gradient-to-b from-gray-300 to-gray-400 flex items-center justify-center shadow-sm shrink-0">
            <LuBookOpen size={16} className="text-white/80" />
        </div>
    );
}

function Badge({ text }) {
    const colors = {
        متوفر: "bg-green-50 text-green-600",
        قريباً: "bg-blue-50 text-blue-600",
        "غير متوفر": "bg-gray-100 text-gray-500",
        منشور: "bg-green-50 text-green-600",
        مسودة: "bg-gray-100 text-gray-500",
    };

    return (
        <span
            className={`inline-flex whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium ${colors[text] || "bg-gray-100 text-gray-500"
                }`}
        >
            {text}
        </span>
    );
}

export default function Books() {
    useEffect(() => {
        const link = document.createElement("link");

        link.href =
            "https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap";

        link.rel = "stylesheet";

        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);

    const [books, setBooks] = useState(mockBooks);
    const [search, setSearch] = useState("");
    const [showFilters, setShowFilters] = useState(false);

    const [categoryFilter, setCategoryFilter] = useState("");
    const [publishFilter, setPublishFilter] = useState("");
    const [availabilityFilter, setAvailabilityFilter] = useState("");

    const [selected, setSelected] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [editingBook, setEditingBook] = useState(null);

    /* ================= FILTER ================= */

    const filteredBooks = books.filter(
        (b) =>
            (b.title.includes(search) || b.author.includes(search)) &&
            (categoryFilter === "" || b.category === categoryFilter) &&
            (publishFilter === "" || b.status === publishFilter) &&
            (availabilityFilter === "" ||
                b.availability === availabilityFilter)
    );

    /* ================= PAGINATION ================= */

    const totalPages = Math.max(
        1,
        Math.ceil(filteredBooks.length / PAGE_SIZE)
    );

    const safePage = Math.min(currentPage, totalPages);

    const paginatedBooks = filteredBooks.slice(
        (safePage - 1) * PAGE_SIZE,
        safePage * PAGE_SIZE
    );

    const backToFirstPage = () => {
        setCurrentPage(1);
    };

    /* ================= SELECTION ================= */

    const toggleSelect = (id) => {
        setSelected((prev) =>
            prev.includes(id)
                ? prev.filter((x) => x !== id)
                : [...prev, id]
        );
    };

    const toggleSelectAll = () => {
        const currentPageIds = paginatedBooks.map(
            (book) => book.id
        );

        const allSelected =
            currentPageIds.length > 0 &&
            currentPageIds.every((id) =>
                selected.includes(id)
            );

        if (allSelected) {
            setSelected((prev) =>
                prev.filter(
                    (id) => !currentPageIds.includes(id)
                )
            );
        } else {
            setSelected((prev) => [
                ...new Set([...prev, ...currentPageIds]),
            ]);
        }
    };

    const allCurrentPageSelected =
        paginatedBooks.length > 0 &&
        paginatedBooks.every((book) =>
            selected.includes(book.id)
        );

    /* ================= DELETE ================= */

    const deleteSelected = () => {
        setBooks((prev) =>
            prev.filter(
                (book) => !selected.includes(book.id)
            )
        );

        setSelected([]);
    };

    const deleteBook = (id) => {
        setBooks((prev) =>
            prev.filter((book) => book.id !== id)
        );

        setSelected((prev) =>
            prev.filter((x) => x !== id)
        );
    };

    /* ================= STATUS ================= */

    const changeStatusSelected = (status) => {
        setBooks((prev) =>
            prev.map((book) =>
                selected.includes(book.id)
                    ? { ...book, status }
                    : book
            )
        );
    };

    /* ================= FILTER RESET ================= */

    const resetFilters = () => {
        setCategoryFilter("");
        setPublishFilter("");
        setAvailabilityFilter("");
        setCurrentPage(1);
    };

    /* ================= EDIT ================= */

    const openEdit = (book) => {
        setEditingBook({ ...book });
    };

    const closeEdit = () => {
        setEditingBook(null);
    };

    const saveEdit = () => {
        if (!editingBook) return;

        setBooks((prev) =>
            prev.map((book) =>
                book.id === editingBook.id
                    ? editingBook
                    : book
            )
        );

        setEditingBook(null);
    };

    return (
        <div
            dir="rtl"
            className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6 font-['Cairo']"
        >
            <div className="w-full max-w-[1400px] mx-auto">

                {/* ================= HEADER ================= */}

                <div className="sticky top-0 z-20 bg-gray-50 pb-3 sm:pb-5">
                    <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl">

                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-4">

                            <div className="flex items-center gap-3 min-w-0">

                                <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center shrink-0">
                                    <LuBookOpen
                                        size={20}
                                        className="text-white"
                                    />
                                </div>

                                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">
                                    إدارة الكتب
                                </h1>

                            </div>

                            <button
                                type="button"
                                onClick={() => {
                                    const newBook = {
                                        id: Date.now(),
                                        title: "كتاب تجريبي",
                                        author: "مؤلف تجريبي",
                                        category: "رواية",
                                        price: 50,
                                        availability: "متوفر",
                                        status: "مسودة",
                                    };

                                    console.log("📚 New book added:", newBook);
                                }}
                                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
                            >
                                <LuPlus size={16} />
                                إضافة كتاب جديد
                            </button>

                        </div>

                    </div>
                </div>

                {/* ================= SEARCH + FILTERS ================= */}

                <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-4 sm:mb-5">

                    <div className="flex flex-col sm:flex-row gap-3">

                        <div className="relative flex-1 min-w-0">

                            <LuSearch
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                size={16}
                            />

                            <input
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    backToFirstPage();
                                }}
                                placeholder="ابحث عن كتاب أو مؤلف..."
                                className="w-full border border-gray-200 rounded-lg pr-9 pl-3 py-2.5 text-sm outline-none focus:border-green-500 transition-colors"
                            />

                        </div>

                        <button
                            type="button"
                            onClick={() =>
                                setShowFilters(
                                    (prev) => !prev
                                )
                            }
                            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-green-600 text-green-600 px-4 py-2.5 rounded-lg text-sm shrink-0 hover:bg-green-50 transition-colors"
                        >
                            <LuFilter size={16} />
                            تصفية
                        </button>

                    </div>

                    {/* ================= FILTER OPTIONS ================= */}

                    {showFilters && (
                        <div className="mt-5 pt-5 border-t border-gray-100">

                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-4 text-sm">

                                <span className="font-medium text-gray-700">
                                    خيارات التصفية
                                </span>

                                <button
                                    type="button"
                                    onClick={resetFilters}
                                    className="self-start sm:self-auto text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    إعادة تعيين
                                </button>

                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                                {/* CATEGORY */}

                                <div>

                                    <label className="block text-xs text-gray-500 mb-1.5">
                                        الفئة
                                    </label>

                                    <div className="relative">

                                        <select
                                            value={categoryFilter}
                                            onChange={(e) => {
                                                setCategoryFilter(
                                                    e.target.value
                                                );
                                                backToFirstPage();
                                            }}
                                            className="w-full appearance-none border border-gray-200 rounded-lg pr-3 pl-7 py-2.5 text-sm bg-white outline-none focus:border-green-500"
                                        >

                                            <option value="">
                                                جميع الفئات
                                            </option>

                                            {categories.map(
                                                (category) => (
                                                    <option
                                                        key={category}
                                                        value={category}
                                                    >
                                                        {category}
                                                    </option>
                                                )
                                            )}

                                        </select>

                                        <LuChevronDown
                                            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                                            size={14}
                                        />

                                    </div>

                                </div>

                                {/* PUBLISH STATUS */}

                                <div>

                                    <label className="block text-xs text-gray-500 mb-1.5">
                                        حالة النشر
                                    </label>

                                    <div className="relative">

                                        <select
                                            value={publishFilter}
                                            onChange={(e) => {
                                                setPublishFilter(
                                                    e.target.value
                                                );
                                                backToFirstPage();
                                            }}
                                            className="w-full appearance-none border border-gray-200 rounded-lg pr-3 pl-7 py-2.5 text-sm bg-white outline-none focus:border-green-500"
                                        >

                                            <option value="">
                                                الكل
                                            </option>

                                            {publishStatuses.map(
                                                (status) => (
                                                    <option
                                                        key={status}
                                                        value={status}
                                                    >
                                                        {status}
                                                    </option>
                                                )
                                            )}

                                        </select>

                                        <LuChevronDown
                                            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                                            size={14}
                                        />

                                    </div>

                                </div>

                                {/* AVAILABILITY */}

                                <div>

                                    <label className="block text-xs text-gray-500 mb-1.5">
                                        حالة التوفر
                                    </label>

                                    <div className="relative">

                                        <select
                                            value={availabilityFilter}
                                            onChange={(e) => {
                                                setAvailabilityFilter(
                                                    e.target.value
                                                );
                                                backToFirstPage();
                                            }}
                                            className="w-full appearance-none border border-gray-200 rounded-lg pr-3 pl-7 py-2.5 text-sm bg-white outline-none focus:border-green-500"
                                        >

                                            <option value="">
                                                الكل
                                            </option>

                                            {availabilityStatuses.map(
                                                (status) => (
                                                    <option
                                                        key={status}
                                                        value={status}
                                                    >
                                                        {status}
                                                    </option>
                                                )
                                            )}

                                        </select>

                                        <LuChevronDown
                                            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                                            size={14}
                                        />

                                    </div>

                                </div>

                            </div>

                        </div>
                    )}

                </div>

                {/* ================= BULK ACTIONS ================= */}

                {selected.length > 0 && (
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-green-50 border border-green-200 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3.5 mb-4 sm:mb-5 text-sm">

                        <div className="flex flex-wrap items-center gap-3 sm:gap-4">

                            <span className="font-medium text-gray-700">
                                {selected.length} كتاب محدد
                            </span>

                            <span className="hidden sm:inline text-gray-300">
                                |
                            </span>

                            <button
                                type="button"
                                onClick={() =>
                                    setSelected([])
                                }
                                className="text-gray-500 hover:text-gray-700"
                            >
                                إلغاء التحديد
                            </button>

                        </div>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">

                            <div className="relative">

                                <select
                                    defaultValue=""
                                    onChange={(e) => {
                                        if (e.target.value) {
                                            changeStatusSelected(
                                                e.target.value
                                            );

                                            e.target.value = "";
                                        }
                                    }}
                                    className="w-full sm:w-auto appearance-none border border-gray-200 rounded-lg pl-7 pr-3 py-2.5 text-sm bg-white outline-none"
                                >

                                    <option
                                        value=""
                                        disabled
                                    >
                                        تغيير الحالة
                                    </option>

                                    {publishStatuses.map(
                                        (status) => (
                                            <option
                                                key={status}
                                                value={status}
                                            >
                                                {status}
                                            </option>
                                        )
                                    )}

                                </select>

                                <LuChevronDown
                                    className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                                    size={14}
                                />

                            </div>

                            <button
                                type="button"
                                onClick={deleteSelected}
                                className="flex items-center justify-center gap-1.5 border border-gray-200 bg-white rounded-lg px-3 py-2.5 text-red-600 hover:bg-red-50 transition-colors"
                            >
                                <LuTrash2 size={14} />
                                حذف المحدد
                            </button>

                        </div>

                    </div>
                )}

                {/* ================= TABLE ================= */}

                <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden">

                    <div className="w-full overflow-x-auto">

                        <table className="w-full min-w-[950px] text-right text-sm">

                            <thead>

                                <tr className="text-gray-400 text-xs border-b border-gray-100">

                                    <th className="p-4 w-8">

                                        <input
                                            type="checkbox"
                                            checked={
                                                allCurrentPageSelected
                                            }
                                            onChange={
                                                toggleSelectAll
                                            }
                                            className="w-4 h-4 accent-green-600 cursor-pointer"
                                        />

                                    </th>

                                    <th className="p-4 font-medium">
                                        الغلاف
                                    </th>

                                    <th className="p-4 font-medium">
                                        معلومات الكتاب
                                    </th>

                                    <th className="p-4 font-medium">
                                        الفئة
                                    </th>

                                    <th className="p-4 font-medium">
                                        السعر
                                    </th>

                                    <th className="p-4 font-medium">
                                        التوفر
                                    </th>

                                    <th className="p-4 font-medium">
                                        الحالة
                                    </th>

                                    <th className="p-4 font-medium">
                                        الإجراءات
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {paginatedBooks.length === 0 && (
                                    <tr>

                                        <td
                                            colSpan={8}
                                            className="p-12 text-center text-gray-400"
                                        >
                                            <div className="flex flex-col items-center justify-center">

                                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                                                    <LuBookOpen
                                                        size={20}
                                                        className="text-gray-400"
                                                    />
                                                </div>

                                                <p className="text-sm">
                                                    لا توجد نتائج
                                                </p>

                                            </div>
                                        </td>

                                    </tr>
                                )}

                                {paginatedBooks.map(
                                    (book) => (
                                        <tr
                                            key={book.id}
                                            className={`border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors ${selected.includes(
                                                book.id
                                            )
                                                ? "bg-green-50/40"
                                                : ""
                                                }`}
                                        >

                                            {/* CHECKBOX */}

                                            <td className="p-4">

                                                <input
                                                    type="checkbox"
                                                    checked={selected.includes(
                                                        book.id
                                                    )}
                                                    onChange={() =>
                                                        toggleSelect(
                                                            book.id
                                                        )
                                                    }
                                                    className="w-4 h-4 accent-green-600 cursor-pointer"
                                                />

                                            </td>

                                            {/* COVER */}

                                            <td className="p-4">

                                                <BookCover />

                                            </td>

                                            {/* BOOK INFO */}

                                            <td className="p-4">

                                                <div className="min-w-0">

                                                    <div className="font-medium text-gray-800 max-w-[220px] truncate">
                                                        {book.title}
                                                    </div>

                                                    <div className="text-xs text-gray-400 max-w-[220px] truncate">
                                                        {book.author}
                                                    </div>

                                                </div>

                                            </td>

                                            {/* CATEGORY */}

                                            <td className="p-4 text-gray-600 whitespace-nowrap">
                                                {book.category}
                                            </td>

                                            {/* PRICE */}

                                            <td className="p-4 text-gray-600 whitespace-nowrap">
                                                {book.price.toFixed(
                                                    2
                                                )}{" "}
                                                ر.س
                                            </td>

                                            {/* AVAILABILITY */}

                                            <td className="p-4">
                                                <Badge
                                                    text={
                                                        book.availability
                                                    }
                                                />
                                            </td>

                                            {/* STATUS */}

                                            <td className="p-4">
                                                <Badge
                                                    text={
                                                        book.status
                                                    }
                                                />
                                            </td>

                                            {/* ACTIONS */}

                                            <td className="p-4">

                                                <div className="flex items-center gap-2">

                                                    {/* VIEW */}

                                                    <div className="relative group">

                                                        <button
                                                            type="button"
                                                            aria-label="عرض"
                                                            className="w-8 h-8 flex items-center justify-center rounded-lg text-blue-500 hover:bg-blue-50 hover:text-blue-600 transition-all duration-150"
                                                        >
                                                            <LuEye
                                                                size={
                                                                    16
                                                                }
                                                            />
                                                        </button>

                                                        <span className="pointer-events-none absolute bottom-full right-1/2 translate-x-1/2 mb-2 whitespace-nowrap rounded-md bg-gray-900 px-2.5 py-1.5 text-[11px] font-medium text-white opacity-0 shadow-lg transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 z-30">

                                                            عرض

                                                            <span className="absolute top-full right-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-gray-900" />

                                                        </span>

                                                    </div>

                                                    {/* EDIT */}

                                                    <div className="relative group">

                                                        <button
                                                            type="button"
                                                            aria-label="تعديل"
                                                            onClick={() =>
                                                                openEdit(
                                                                    book
                                                                )
                                                            }
                                                            className="w-8 h-8 flex items-center justify-center rounded-lg text-green-600 hover:bg-green-50 hover:text-green-700 transition-all duration-150"
                                                        >
                                                            <LuPencil
                                                                size={
                                                                    16
                                                                }
                                                            />
                                                        </button>

                                                        <span className="pointer-events-none absolute bottom-full right-1/2 translate-x-1/2 mb-2 whitespace-nowrap rounded-md bg-gray-900 px-2.5 py-1.5 text-[11px] font-medium text-white opacity-0 shadow-lg transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 z-30">

                                                            تعديل

                                                            <span className="absolute top-full right-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-gray-900" />

                                                        </span>

                                                    </div>

                                                    {/* DELETE */}

                                                    <div className="relative group">

                                                        <button
                                                            type="button"
                                                            aria-label="حذف"
                                                            onClick={() =>
                                                                deleteBook(
                                                                    book.id
                                                                )
                                                            }
                                                            className="w-8 h-8 flex items-center justify-center rounded-lg text-red-500 hover:bg-red-50 hover:text-red-600 transition-all duration-150"
                                                        >
                                                            <LuTrash2
                                                                size={
                                                                    16
                                                                }
                                                            />
                                                        </button>

                                                        <span className="pointer-events-none absolute bottom-full right-1/2 translate-x-1/2 mb-2 whitespace-nowrap rounded-md bg-gray-900 px-2.5 py-1.5 text-[11px] font-medium text-white opacity-0 shadow-lg transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 z-30">

                                                            حذف

                                                            <span className="absolute top-full right-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-gray-900" />

                                                        </span>

                                                    </div>

                                                </div>

                                            </td>

                                        </tr>
                                    )
                                )}

                            </tbody>

                        </table>

                    </div>

                    {/* ================= PAGINATION ================= */}

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4 sm:px-5 py-3.5 border-t border-gray-100 text-sm">

                        <span className="text-gray-400">

                            عرض{" "}

                            {filteredBooks.length === 0
                                ? 0
                                : (safePage - 1) *
                                PAGE_SIZE +
                                1}

                            {" - "}

                            {Math.min(
                                safePage * PAGE_SIZE,
                                filteredBooks.length
                            )}

                            {" من "}

                            {filteredBooks.length} نتيجة

                        </span>

                        <div className="flex items-center justify-between sm:justify-end gap-1.5">

                            <button
                                type="button"
                                onClick={() =>
                                    setCurrentPage(
                                        (p) =>
                                            Math.max(
                                                1,
                                                p - 1
                                            )
                                    )
                                }
                                disabled={
                                    safePage === 1
                                }
                                className="flex items-center gap-1 border border-gray-200 rounded-lg px-2.5 sm:px-3 py-1.5 text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                            >
                                <LuChevronRight
                                    size={14}
                                />

                                <span className="hidden xs:inline">
                                    السابق
                                </span>

                                <span className="sm:hidden">
                                    السابق
                                </span>
                            </button>

                            <div className="flex items-center gap-1">

                                {Array.from(
                                    {
                                        length: totalPages,
                                    },
                                    (_, i) => i + 1
                                ).map(
                                    (pageNumber) => (
                                        <button
                                            type="button"
                                            key={
                                                pageNumber
                                            }
                                            onClick={() =>
                                                setCurrentPage(
                                                    pageNumber
                                                )
                                            }
                                            className={`w-8 h-8 rounded-lg font-medium transition-colors ${pageNumber ===
                                                safePage
                                                ? "bg-green-600 text-white"
                                                : "text-gray-500 hover:bg-gray-100"
                                                }`}
                                        >
                                            {
                                                pageNumber
                                            }
                                        </button>
                                    )
                                )}

                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    setCurrentPage(
                                        (p) =>
                                            Math.min(
                                                totalPages,
                                                p + 1
                                            )
                                    )
                                }
                                disabled={
                                    safePage ===
                                    totalPages
                                }
                                className="flex items-center gap-1 border border-gray-200 rounded-lg px-2.5 sm:px-3 py-1.5 text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                            >
                                <span>
                                    التالي
                                </span>

                                <LuChevronLeft
                                    size={14}
                                />
                            </button>

                        </div>

                    </div>

                </div>

            </div>

            {/* ================= EDIT MODAL ================= */}

            {editingBook && (
                <div
                    className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-3 sm:p-4"
                    onClick={closeEdit}
                >

                    <div
                        className="bg-white rounded-xl sm:rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-4 sm:p-5"
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    >

                        {/* MODAL HEADER */}

                        <div className="flex items-center justify-between mb-4">

                            <h2 className="text-lg font-bold text-gray-800">
                                تعديل بيانات الكتاب
                            </h2>

                            <button
                                type="button"
                                onClick={closeEdit}
                                aria-label="إغلاق"
                                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                            >
                                <LuX size={18} />
                            </button>

                        </div>

                        <div className="space-y-3">

                            {/* TITLE */}

                            <div>

                                <label className="block text-xs text-gray-500 mb-1">
                                    العنوان
                                </label>

                                <input
                                    type="text"
                                    value={
                                        editingBook.title
                                    }
                                    onChange={(e) =>
                                        setEditingBook(
                                            (prev) => ({
                                                ...prev,
                                                title: e
                                                    .target
                                                    .value,
                                            })
                                        )
                                    }
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-green-500"
                                />

                            </div>

                            {/* AUTHOR */}

                            <div>

                                <label className="block text-xs text-gray-500 mb-1">
                                    المؤلف
                                </label>

                                <input
                                    type="text"
                                    value={
                                        editingBook.author
                                    }
                                    onChange={(e) =>
                                        setEditingBook(
                                            (prev) => ({
                                                ...prev,
                                                author: e
                                                    .target
                                                    .value,
                                            })
                                        )
                                    }
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-green-500"
                                />

                            </div>

                            {/* CATEGORY + PRICE */}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                                <div>

                                    <label className="block text-xs text-gray-500 mb-1">
                                        الفئة
                                    </label>

                                    <select
                                        value={
                                            editingBook.category
                                        }
                                        onChange={(e) =>
                                            setEditingBook(
                                                (prev) => ({
                                                    ...prev,
                                                    category:
                                                        e
                                                            .target
                                                            .value,
                                                })
                                            )
                                        }
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white outline-none focus:border-green-500"
                                    >

                                        {categories.map(
                                            (category) => (
                                                <option
                                                    key={
                                                        category
                                                    }
                                                    value={
                                                        category
                                                    }
                                                >
                                                    {
                                                        category
                                                    }
                                                </option>
                                            )
                                        )}

                                    </select>

                                </div>

                                <div>

                                    <label className="block text-xs text-gray-500 mb-1">
                                        السعر
                                    </label>

                                    <input
                                        type="number"
                                        min="0"
                                        value={
                                            editingBook.price
                                        }
                                        onChange={(e) =>
                                            setEditingBook(
                                                (prev) => ({
                                                    ...prev,
                                                    price: Number(
                                                        e
                                                            .target
                                                            .value
                                                    ),
                                                })
                                            )
                                        }
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-green-500"
                                    />

                                </div>

                            </div>

                            {/* AVAILABILITY + STATUS */}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                                <div>

                                    <label className="block text-xs text-gray-500 mb-1">
                                        حالة التوفر
                                    </label>

                                    <select
                                        value={
                                            editingBook.availability
                                        }
                                        onChange={(e) =>
                                            setEditingBook(
                                                (prev) => ({
                                                    ...prev,
                                                    availability:
                                                        e
                                                            .target
                                                            .value,
                                                })
                                            )
                                        }
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white outline-none focus:border-green-500"
                                    >

                                        {availabilityStatuses.map(
                                            (status) => (
                                                <option
                                                    key={
                                                        status
                                                    }
                                                    value={
                                                        status
                                                    }
                                                >
                                                    {status}
                                                </option>
                                            )
                                        )}

                                    </select>

                                </div>

                                <div>

                                    <label className="block text-xs text-gray-500 mb-1">
                                        حالة النشر
                                    </label>

                                    <select
                                        value={
                                            editingBook.status
                                        }
                                        onChange={(e) =>
                                            setEditingBook(
                                                (prev) => ({
                                                    ...prev,
                                                    status: e
                                                        .target
                                                        .value,
                                                })
                                            )
                                        }
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white outline-none focus:border-green-500"
                                    >

                                        {publishStatuses.map(
                                            (status) => (
                                                <option
                                                    key={
                                                        status
                                                    }
                                                    value={
                                                        status
                                                    }
                                                >
                                                    {status}
                                                </option>
                                            )
                                        )}

                                    </select>

                                </div>

                            </div>

                        </div>

                        {/* MODAL BUTTONS */}

                        <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2 mt-5">

                            <button
                                type="button"
                                onClick={closeEdit}
                                className="w-full sm:w-auto px-4 py-2.5 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                إلغاء
                            </button>

                            <button
                                type="button"
                                onClick={saveEdit}
                                className="w-full sm:w-auto px-4 py-2.5 text-sm text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
                            >
                                حفظ التعديلات
                            </button>

                        </div>

                    </div>

                </div>
            )}

        </div>
    );
}