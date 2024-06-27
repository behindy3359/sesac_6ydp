const formData = document.forms['board-post-form'];

const writePost = () => {
  console.log('버튼 클릭됨!');
  const now = new Date();
  const formattedTime = now.toISOString().slice(0, 19).replace('T', ' '); // ISO 형식을 MySQL datetime 형식으로 변환

  axios({
    method: 'post',
    url: '/posting',
    data: {
      title: formData.postTitle.value,
      writer: formData.postWriter.value,
      content: formData.postContent.value,
      time: formattedTime, // 수정된 시간 형식
    }
  }).then((res) => {
    console.log(res);
  });
};
