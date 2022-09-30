# PROJETO MAGIC CARDS

# ESTE É UM PROJETO FEITO EM REACT

Neste aplicativo, voce será capaz de criar sua própria carta.

Passo a passo da aplicação:

### 1.[X] - Criar o formulário para adicionar as cartas
### 2.[X] - Colocar as props necessárias
### 3.[X] - Criar e renderizar o componente Card com as props necessárias
### 4.[X] - Criar o preview da carta
### 5.[X] - Validando o botao de salvar no formulário
#### Regras de validação:
O botão só deve estar habilitado se todas as informações do formulário estiverem preenchidas;

Os campos Nome, Descrição, Imagem e Raridade devem conter alguma informação (os inputs não podem estar vazios).

A soma dos valores dos 3 atributos (attr1-input, attr2-input e attr3-input) não pode ultrapassar o valor 210.

Cada um dos três atributos pode ter no máximo 90 pontos cada.

Os atributos não podem receber valores negativos.

O que será verificado
Será validado se o botão salvar está desabilitado quando a página é renderizada pela primeira vez.
Será validado se o botão salvar está desabilitado se o campo nome estiver vazio.
Será validado se o botão salvar está desabilitado se o campo imagem estiver vazio.
Será validado se o botão salvar está desabilitado se o campo descrição estiver vazio.
Será validado se o botão salvar está desabilitado se o campo do atributo 1 for maior que 90.
Será validado se o botão salvar está desabilitado se o campo do atributo 1 for menor que 0.
Será validado se o botão salvar está desabilitado se o campo do atributo 2 for maior que 90.
Será validado se o botão salvar está desabilitado se o campo do atributo 2 for menor que 0.
Será validado se o botão salvar está desabilitado se o campo do atributo 3 for maior que 90.
Será validado se o botão salvar está desabilitado se o campo do atributo 3 for menor que 0.
Será validado se o botão salvar está desabilitado se a somatória dos campos de atributos for maior que 210.
Será validado se o botão salvar é habilitado ao preencher todos os campos do formulário corretamente.

#[] - Criar a função do botao salvar
#[] - Criar a validação das cartas
#[] - Exibir as cartas salvas no estado
#[] - Criar o botao de remover carta do baralho
#[] - Criar o filtro pelo nome da carta
#[] - Criar o filtro pela raridade da carta
#[] - Criar o filtro de carta super
