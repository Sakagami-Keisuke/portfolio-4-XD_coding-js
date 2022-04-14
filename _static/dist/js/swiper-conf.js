const swiper = new Swiper('.swiper', {
	slidesPerView: 4,      // 一度に表示させるスライドの数
	spaceBetween: 155,     // スライド間の間隔px
	centeredSlides: true,  //1枚目のスライド中央配置
	autoplay: {
		delay: 5000,      // スライドの間隔（単位はミリ秒）
	  },
	  loop: true,

});
// 読み込みチェック
// alert("_static/dist/js/swiper-conf.js load OK!");