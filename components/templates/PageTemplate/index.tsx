import React from "react";
import styles from "@/styles/PageTemplate.module.scss";
import Header from "@/components/organisms/Header";

type PageTemplateProps = {
  children?: React.ReactNode;
};

// Here using the styles from HomeTemplate.module.scss to demonstrate the use of CSS Modules
const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.content}>{children}</main>
      <footer className={styles.footer}>
        <p>Copyright 2024</p>
      </footer>
    </div>
  );
};

export default PageTemplate;
