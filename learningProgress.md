# Area de aprendizado

O que é uma `connection.pool` do mysql?

Um **connection.pool** é um cache de conexões de banco de dados mantido de forma que as conexões possam ser
reutilizadas quando requisições futuras ao banco de dados forem solicitadas. Em um pool de conexões,
após a conexão ser criada, ela é colocada no pool (depósito) e é usada novamente de forma que uma nova conexão
não precisa ser estabelecida. Se todas as conexões estiverem sendo usadas, uma nova conexão é feita e é adicionada ao pool.
O pool de conexões também reduz a quantidade de tempo que um usuário deve esperar para estabelecer uma conexão com o banco de dados.

Criando uma **connection.pool**

```js
const handleDatabase = () => {
  const mysql = require("mysql2/promise");
  const connection = mysql.createPool({
    uri: "mysql://pedro:19ls1esipedro@localhost:3306/sliderx",
  });

  return connection;
};
```
