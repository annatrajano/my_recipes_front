Este projeto contém os requisitos realizados por _[Anna Beatriz Garcia Trajano de Sá](www.linkedin.com/in/anna-beatriz-trajano-de-sá)_ enquanto cursava o curso de Pós-Graduação da PUC-RIO em Engenharia de Software. Ele engloba as disciplinas estudadas na primeira sprint (Desenvolvimento Full Stack Básico) e corresponde à parte Front-end da aplicação.

# Project Recipes App

Neste projeto desenvolvi um app de receitas, utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API!

Nele será possível ver, criar, filtar (por categoria) e deletar receitas!

A base de dados foram duas APIs distintas, uma para receitas já existentes e outra de criação própria para poder cadastrá-las em um banco de dados.

Veja o exemplo a seguir do layout do projeto!

## Layout

Login Page             
:-------------------------:|
![Screeshot](./public/images/login.png)  |

Home Page           |  Recipe Category Page
:-------------------------:|:-------------------------:
![Screeshot](./public/images/home.png)  |  ![Screenshot](./public/images/cat1.png)

Recipe Category Page          |  Form Page
:-------------------------:|:-------------------------:
![Screeshot](./public/images/cat2.png)  |  ![Screenshot](./public/images/form.png)

Recipes          |  
:-------------------------:|
![Screeshot](./public/images/recipes.png)  |

 
## Instalação do projeto localmente:
 
Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em _annagarcia@id.uff.br_ 

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:
```javascript
  mkdir projetos
```

2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd projetos
  git clone git@github.com:annabiatrajano/my_recipes_front.git
```

3. Acesse o diretório do projeto e depois utilize o comando **npm i** para instalar todas as dependências necessárias:
```javascript
  cd my_recipes_front
  npm i
```

4. Por último, rode o comando **npm start** e acesse o projeto via browser, no caminho `http://localhost:3000/project-recipes-app`.

```javascript
  npm start
```

## Habilidades Desenvolvidas

Neste projeto, desenvolvi as seguintes habilidades:

 - Componentes reativos e modulares;
 - Arquivos estáticos;
 - React Router;
 - Gerenciamento de estados globais: Context API;
 - CSS Module;
 
 ## Referências
 [React](https://legacy.reactjs.org/docs/getting-started.html)<br>
 [TheMeal DB ](https://www.themealdb.com/api.php)<br>
 [Documentação oficial do React sobre Context API](https://reactjs.org/docs/context.html)<br>
 [CSS Module](https://blog.logrocket.com/a-deep-dive-into-css-modules/)<br>
 [React Icons](https://react-icons.github.io/react-icons/)<br>
 [Conventional Commits](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13)<br>


## Escopo do Projeto

 - Componentes
 - Tela de Login
 - Tela principal de receitas
 - Tela para cadastrar uma nova receita
 - Tela de receitas cadastradas
