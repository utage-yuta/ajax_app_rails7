const buildHTML=(XHR)=>{
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};


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
    XHR.onload=()=> {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const list=document.getElementById("list");
      const fromText=document.getElementById("content");
      list.insertAdjacentHTML("afterend",buildHTML(XHR));
      fromText.value= "";
    };
  });
};

// ページが読み込まれたときに実行されるように関数を定義している
window.addEventListener('turbo:load', post);