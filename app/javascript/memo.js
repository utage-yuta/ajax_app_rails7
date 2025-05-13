function post (){
  const form=document.getElementById("form");
  form.addEventListener("submit", (e) => {
    // メモが重複されないようにしている
    e.preventDefault();
    const formData=new FormData(form);
    const XHR=new XMLHttpRequest();
    // リクエストの内容を指定している
    XHR.open("POST","/posts",true); 
    // サーバーからのレスポンスの形式を指定する
    XHR.responseType="json";
    // フォームの内容をサーバー側に送信する
    XHR.send(formData);
  });
};

// ページが読み込まれたときに実行されるように関数を定義している
window.addEventListener('turbo:load', post);