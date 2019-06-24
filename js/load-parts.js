// 指定されたパーツを読み込むよ
// divにdata-load-parts属性で読み込みたいHTMLを指定してね
// <div data-load-parts="/parts/header.html"></div>

// jquery使っているので先に読み込むこと
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

$(function () {
    $("div[data-load-parts]").each((i, e) => {
        let partsPath = $(e).data("load-parts")
        $(e).load(partsPath)
    });
})
