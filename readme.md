
# Bexs Pay Checkout

  

Este é um projeto de front-end desenvolvido utilizando ReactJS em conjunto de outras bibliotecas.

  

Para garantir a qualidade e consistência do código, o projeto segue um conjunto de padrões e boas práticas recomendados para desenvolvimento de software com ReactJS. Esses padrões foram escolhidos com base em experiências anteriores e na comunidade de desenvolvedores, e têm como objetivo tornar o código mais legível, seguro, escalável e fácil de manter.

  

Algumas das sugestões de padrões que devem ser seguidos pelo desenvolvedor que trabalhou neste projeto incluem:

  

- Utilização de boas práticas de nomenclatura para componentes, métodos e

variáveis;

- Utilização de componentes reutilizáveis para facilitar a manutenção e

escalabilidade do código;

- Evite colocar lógica de negócios dentro dos componentes, mantenha-os

focados em sua função específica;

- Evite estilos aninhados excessivamente, mantenha o código limpo e

organizado;

- Utilize arquivos separados para componentes e estilos, tornando o

código mais modular e fácil de manter;

- Implementação e manutenção de testes automatizados para garantir o correto

funcionamento do código;

- Utilize comentários (sem excesso) para documentar o código e torná-lo

mais fácil de entender.

  
Este README contém informações sobre como instalar e executar o projeto em sua máquina, bem como detalhes sobre os padrões e boas práticas recomendados para o desenvolvimento do código. O objetivo é fornecer um guia claro para os desenvolvedores que irão contribuir com o projeto.

  

# Rodando o Projeto

  

## Pré-requisitos

  

- Node.js

- NPM

- Git

  

## Como Instalar

  

1. Clone este repositório no terminal do seu computador:

  

`git clone https://github.com/mattreginaldo/bexs-pay-app.git`

  

2. Navegue até o diretório raiz do projeto:

  

`cd bexs-pay-app`

  

3. Instale as dependências do projeto:

  

`npm install`

  

4. Inicie o servidor de desenvolvimento:

  

`npm start`

  

5. Abra o navegador e acesse o endereço `http://localhost:3000` para visualizar o projeto em execução.


# Rodando os Testes

Para rodar os testes basta rodar o seguinte comando: 

`npm test`

Ao gerar novos testes, lembre-se de manter o padrão criando o *`seu-componente.test.js`* dentro da pasta de cada componente ou página.


  
  

# Deploy Automatizado

  

Não se preocupe em fazer o deploy, mas mantenha-se focado na qualidade do seu código e respeite os padrões de processos descritos nesse item.


O deploy automático já está configurado para rodar quando o seu pull request for aprovado, mas para auxiliar no correto funcionamento da integração contínua, leia atentamente os seguintes estágios:
  

- Após commitar e fazer push da nova branch (sempre criar a partir de master), você

deve criar uma pull request para a master e descrever o que foi modificado na nova versão.

- Com a pull request criada você poderá observar que uma pipeline

rodará na aba **Actions** (GitHub Actions).

  

***Qual a função desta pipeline?***

  

Gerar o build corretamente, verificar se há conflitos entre sua branch e master e subir uma prévia do seu app para o Firebase Hosting.

  

***O que fazer se a pipeline gerar erros ou for bem sucedida?***

  

Em caso de erro❌, você deve investigar e corrigir o problema informado.

  

Em caso de sucesso✅, você e os administradores verão um comentário na sua pull request, com um link temporário gerado pelo Firebase Hosting, desta forma é possível testar a aplicação antes de fato subi-lá para produção (muito útil para Design Review).

  

- Os administradores ou responsáveis pelo repositório devem fazer o

Code Review, requisitar ajustes ou sugerir melhorias no código se necessário;

- Feito isto, o administrador pode aprovar e mesclar a branch na master, e então automaticamente o último processo entra em ação: a pipeline que faz o upload do build da aplicação para a hospedagem (Firebase Hosting).

  

*Se você desconhece algum item ou etapa deste processo, confira a documentação do [Github](https://docs.github.com/pt) e [Firebase Hosting](https://firebase.google.com/docs/hosting?hl=pt-br).*

