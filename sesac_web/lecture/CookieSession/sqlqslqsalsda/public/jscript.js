console.log('1');

// 모달 요소 선택
const modal1 = document.querySelector('.modal');
const closeBtn = document.querySelector('.close_btn');
const form = document.querySelector('form[name="modal_today"]');
const btn = document.querySelector('.modal_btn');

// 모달이 존재할 때만 관련 기능 실행
if (modal1) {
  window.onload = function() {
    modal1.style.display = 'flex';
  }

  if (btn) {
    btn.addEventListener('click', () => {
      let result = document.querySelector('#today_check').checked;
      console.log(result);
      if (result) {
        axios({
          method: 'post',
          url: '/setCookie',
          data: {
            result
          }
        }).then((res) => {
          console.log('thankyou');
        })
      }
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    if (closeBtn) {
      closeBtn.addEventListener('click', function(e) {
        modal1.style.display = 'none';
      })
    }

    modal1.addEventListener('click', function(e) {
      if (e.target === modal1) {
        modal1.style.display = 'none';
      }
    });

    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        modal1.style.display = 'none';
      });
    }
  });
}