# Deploy no GitHub Pages

Este pacote publica a versao estatica do sistema AMPLA.

## Importante

GitHub Pages nao roda `server.js` e nao salva arquivo JSON central no servidor.

Nesta versao:

- Google Login funciona depois que a URL do GitHub Pages for adicionada no Google Cloud.
- A tela, permissoes, graficos, convites, exportacao CSV/JSON e arquivo local funcionam.
- Os dados ficam no navegador de quem usa.

Para banco central, historico compartilhado e backups no servidor, usar Render, VPS, Easypanel ou outro host Node com o pacote `entrega-producao.zip`.

## Depois de publicar

Adicionar a URL publica do GitHub Pages no Google Cloud:

```text
https://USUARIO.github.io
```

Local:

```text
Google Cloud Console > APIs e servicos > Credenciais > OAuth Client > Authorized JavaScript origins
```

Para este deploy, a origem ja configurada foi:

```text
https://laguna101.github.io
```

A URL completa do site fica com o caminho do repositorio:

```text
https://laguna101.github.io/ampla-operacao/
```

## Entrada

O gestor inicial liberado e:

```text
felipe1227ferreiralemos@gmail.com
```

Depois que ele entrar, copia os convites de gestor, backoffice e diretoria dentro do proprio app.
