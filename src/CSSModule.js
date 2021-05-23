import React from "react";
import classNames from "classnames/bind";
import styles from "./CSSModule.module.css"


const cx = classNames.bind(styles);

const CSSModule = () => {
  console.log(styles);
  console.log(cx('wrapper'));
  return (
    <div className={cx('wrapper', 'inverted')}>
      {/* <div className={[styles.wrapper, styles.inverted].join(" ")}> */}
      {/* { <div className={`${styles.wrapper} ${styles.inverted}`}> } ES6 문법 */}
      {/* classnames 라이브러리 설치시 보다 간편하게 클래스 네임음 셋팅할수 있다. */}
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
