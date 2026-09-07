const PageLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div
        className="animate-spin rounded-full h-16 w-16 border-b-4 border-t-4"
        style={{ borderColor: "#289D61" }}
      ></div>
    </div>
  );
};

export default PageLoader;
