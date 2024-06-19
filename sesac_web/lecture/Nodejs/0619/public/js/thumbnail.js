console.log('!');

function uploadThumbnail(){
  //formData 객체
  /** 폼 전송할 때, 멀티미디어 파일을 비동기로 제출하고 싶다면! formData 객체 이용 */
  const formData = new FormData();
  /**  */
  const fileInput = document.querySelector('#userfile5');
  console.dir(fileInput);
  console.dir(fileInput.files);

  formData.append('thumbnail', fileInput.files[0]);

  axios({

    method : 'post',
    url : '/dynamicFile',
    data:formData,

    headers:{
      'content-type':'multipart/form-data',
    }
  }).then(function(res){
    console.log(res);
    document.querySelector('#uploadedImage').src = `/static/uploads/${res.data.filename}`;
  })
}