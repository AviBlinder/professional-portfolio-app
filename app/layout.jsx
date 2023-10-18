import Navbar from './components/Navbar';
import './globals.css';
// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Professional Portfolio',
  description: 'Working Experience, Projects and more',
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      {/* <div className="main"> */}
      <div className="">
        {/* <div className="gradient" /> */}
        <div className="" />
      </div>
      <div className="app">{children}</div>
    </body>
  </html>
);

export default RootLayout;
