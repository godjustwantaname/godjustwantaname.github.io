window.addEventListener('load', function () {
  // CDN 构建暴露的全局变量是 L2D_WIDGET
  if (typeof L2D_WIDGET !== 'undefined' && L2D_WIDGET.createWidget) {
    L2D_WIDGET.createWidget({
      model: {
        path: 'https://model.hacxy.cn/cat-black/model.json',
      },
    });
  } else {
    console.warn('l2d-widget 尚未加载，或全局变量 L2D_WIDGET 结构不符预期');
  }
});