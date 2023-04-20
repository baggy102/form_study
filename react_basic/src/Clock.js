function Clock() {
  return (
    <div className="clocck-container">
      {/* toLocaleTimeString() : 현재 사용자의 문화권에 맞는 시간을 표기해주는 것  */}
      <h1>현재시간은: {new Date().toLocaleTimeString()}</h1>
    </div>
  );
}

export default Clock; //외부에서 사용할 수 있게
