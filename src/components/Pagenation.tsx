import React, { useState, useEffect } from "react";
import styles from "./Pagenation.module.scss";
import first from "assets/icon/page_end.png";
import page10 from "assets/icon/page_10.png";
import next from "assets/icon/page_next.png";

export default function Pagenation() {
  const [currentPage, setCurrentPage] = useState(1);
  const [startPage, setStartPage] = useState(1);
  const btnList = new Array(15).fill(false);
  const lastPage = btnList.length;
  const lastPageList = Math.floor(lastPage / 10) * 10 + 1;

  const handleClickPage = (page: number) => setCurrentPage(page);
  const handleClickFirst = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    setStartPage(1);
  };
  const handleClickPrev10 = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage(currentPage - 10 >= 1 ? currentPage - 10 : 1);
    setStartPage(currentPage - 10 >= 1 ? startPage - 10 : 1);
  };
  const handleClickPrev = (e: React.MouseEvent) => {
    e.preventDefault();
    const prevPage = currentPage - 1;
    setCurrentPage(currentPage === 1 ? 1 : prevPage);
    prevPage < startPage && setStartPage(startPage > 1 ? startPage - 10 : 1);
  };
  const handleClickNext = (e: React.MouseEvent) => {
    e.preventDefault();
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage < lastPage ? nextPage : lastPage);
    setStartPage(nextPage > startPage * 10 ? startPage + 10 : startPage);
  };
  const handleClickNext10 = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage(currentPage + 10 < lastPage ? currentPage + 10 : lastPage);
    setStartPage(currentPage + 10 >= lastPage ? lastPageList : startPage + 10);
  };
  const handleClickLast = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage(lastPage);
    setStartPage(Math.floor(lastPage / 10) * 10 + 1);
  };
  useEffect(() => {
    console.log({ currentPage, startPage });
  }, [currentPage, startPage]);
  return (
    <div className={styles.pagenation_list}>
      <div className={styles.first} onClick={handleClickFirst}>
        <img src={first} alt="" />
      </div>
      <div className={styles.pre10} onClick={handleClickPrev10}>
        <img src={page10} alt="" />
      </div>
      <div className={styles.pre} onClick={handleClickPrev}>
        <img src={next} alt="" />
      </div>
      {btnList.slice(startPage - 1, startPage + 9).map((_, idx) => {
        const page = startPage + idx;
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
      <div className={styles.next} onClick={handleClickNext}>
        <img src={next} alt="" />
      </div>
      <div className={styles.next10} onClick={handleClickNext10}>
        <img src={page10} alt="" />
      </div>
      <div className={styles.last} onClick={handleClickLast}>
        <img src={first} alt="" />
      </div>
    </div>
  );
}
