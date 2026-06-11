(() => {
  const chunks = ["app-chunk-01.js","app-chunk-02.js","app-chunk-03.js","app-chunk-04.js","app-chunk-05.js","app-chunk-06.js"];
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
