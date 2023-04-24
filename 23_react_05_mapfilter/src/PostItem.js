const PostItem = (props) => {
  // TODO: 부모 컴포넌트에서 넘겨주는 데이터(props) 구조 분해 할당
  console.log(props);
  const { id, title, body } = props;

  return (
    // TODO: 데이터 채우기
    <div className="PostItem">
      <div>
        <span className="id">NO.{id}</span>
        <span className="title">- {title}</span>
      </div>
      <p className="body">{body}</p>
    </div>
  );
};

export default PostItem;
