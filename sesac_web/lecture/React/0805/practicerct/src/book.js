const VookComponent = (props) => {
  const{title, author, price, type} = props;
  return (
    <div>
      <div className="book-wrapper">
        <div className="book-main-itle"> 이번주 베스트 셀러</div>
        <div className="book-image"></div>
        <div className="book-title">{title}</div>
        <div className="book-subtitle">누가 오리를 죽였을까?</div>
        <div className="book-writter">저자:{author}</div>
        <div className="book-price">가격:{price}</div>
        <div className="book-type">구분:{type}</div>
      </div>
    </div>
  );
}


export default VookComponent;