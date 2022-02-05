import Footer from "./Footer";
import Header from "./Header";
import WhatsApp from "./WhatsAppFloating";

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
      <WhatsApp />
    </main>
  );
};

export default Layout;
