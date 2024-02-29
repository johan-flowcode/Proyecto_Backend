import "@/styles/globals.css";
//import Provider from "@components/Provider";

export const metadata = {
  title: "Artcopy",
  description: "Discover and Share Art",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
       
          <main>{children}</main>
       
      </body>
    </html>
  );
};

export default layout;