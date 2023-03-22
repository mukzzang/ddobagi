import React from "react";
import VideoScroll from "../components/VideoScroll";
import BreadCrumbs from "../components/BreadCrumbs";
import styles from "./CategoryList.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../redux/RootReducer";
import TemporaryArray from "../components/TemporaryArray";
// 임시 리스트를 가져옴. 실제 서비스에서는 요청을 통해 해당 카테고리 아이템들의 리스트를 가져올 필요가 있음.
interface Videolist {
  situationThumbnail: string;
  progress: number;
  situationTitle: string;
  situationId: number;
  isCompleted: boolean;
}

function CategoryList() {
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  //
  // axios통신으로 리스트를 받아옴//
  const testArray: Videolist[] = TemporaryArray as Videolist[];
  // 가져온 리스트의 타입을 캐스팅
  return (
    <div className={styles.FContainer}>
      <img src="img/BlueHeader.png" alt="" className={styles.Header} />
      <div className={styles.BreadCrum}>
        <BreadCrumbs />
      </div>
      <div className={styles.CategoryName}>
        {language === "CN" ? "在家里" : language === "VI" ? "ở nhà" : "집에서"}
      </div>
      <VideoScroll color={"#FF6B6B"} videolist={testArray} />
      <div className={styles.CategoryName}>
        {language === "CN"
          ? "在学校"
          : language === "VI"
          ? "Ở trường"
          : "학교에서"}
      </div>
      <VideoScroll color={"#92B4EC"} videolist={testArray} />
      <div className={styles.CategoryName}>
        {language === "CN"
          ? "学习"
          : language === "VI"
          ? "tại cửa hàng"
          : "가게에서"}
      </div>
      <VideoScroll color={"#FFE69A"} videolist={testArray} />
      <div className={styles.CategoryName}>
        {language === "CN"
          ? "在操场上"
          : language === "VI"
          ? "tại sân chơi"
          : "놀이터에서"}
      </div>
      <VideoScroll color={"#84D88F"} videolist={testArray} />
      <div>푸터 들어가는 자리</div>
    </div>
  );
}

export default CategoryList;