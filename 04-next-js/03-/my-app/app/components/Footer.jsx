const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-auto">
      <div className="max-w-7xl mx-auto text-center">
        <p>
          © {new Date().getFullYear()} Shivam-dev-here. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;