import React, { useState } from "react";
import styles from "./Pagenation.module.scss";

export default function Pagenation() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClickPage = (page: number) => setCurrentPage(page);
  return (
    <div className={styles.pagenation_list}>
      {new Array(15).fill(false).map((_, idx) => {
        const page = idx + 1;
        const buttonStyle = [
          styles.btn,
          currentPage === page ? styles.active : "",
        ];
        return (
          <button
            className={buttonStyle.join(" ")}
            key={`pagenation_${page}`}
            onClick={() => handleClickPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
