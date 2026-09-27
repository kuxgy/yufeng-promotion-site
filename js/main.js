// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// 返回顶部按钮
var backBtn = document.createElement('button');
backBtn.innerHTML = '↑';
backBtn.setAttribute('aria-label', '返回顶部');
backBtn.style.cssText = 'position:fixed;bottom:24px;right:24px;width:44px;height:44px;border-radius:50%;background:#1a3a5c;color:#fff;border:none;font-size:20px;cursor:pointer;box-shadow:0 2px 12px rgba(0,0,0,.2);opacity:0;transition:opacity .3s;z-index:999;';
document.body.appendChild(backBtn);

window.addEventListener('scroll', function() {
  backBtn.style.opacity = window.scrollY > 400 ? '1' : '0';
});
backBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});