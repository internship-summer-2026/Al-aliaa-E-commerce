const Footer = () => {
  return (
    <footer className="bg-gray-100 p-6 mt-10">
      <div className="container mx-auto text-center text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} مداد العلياء. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
