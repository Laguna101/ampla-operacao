(() => {
  const chunks = ["app-chunk-01.js","app-chunk-02.js","app-chunk-03.js","app-chunk-04.js","app-chunk-05.js","app-chunk-06.js","app-chunk-07.js","app-chunk-08.js","app-chunk-09.js","app-chunk-10.js","app-chunk-11.js","app-chunk-12.js","app-chunk-13.js","app-chunk-14.js","app-chunk-15.js","app-chunk-16.js","app-chunk-17.js"];
  window.__AMPLA_APP_CODE = "";
  chunks.reduce((chain, src) => chain.then(() => new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error("Falha ao carregar " + src));
    document.head.appendChild(script);
  })), Promise.resolve()).then(() => {
    const code = window.__AMPLA_APP_CODE;
    delete window.__AMPLA_APP_CODE;
    (0, eval)(code);
  }).catch((error) => {
    const target = document.getElementById("loginHelp") || document.body;
    target.textContent = "Erro ao carregar o sistema: " + error.message;
  });
})();
