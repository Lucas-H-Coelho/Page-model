const cssId = 'cssAgrupadoBase';
if (!document.getElementById(cssId)) {
  let head = document.getElementsByTagName('head')[0];
  let link = document.createElement('link');
  link.id = cssId;
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = '../public/css/base/base.css', '../public/css/base/generics.css', '../public/css/base/forms.css', '../public/css/base/fonts.css', '../public/css/base/typograph.css';
  link.media = 'all';
  head.appendChild(link);
}

  
  