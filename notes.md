## DTO -> Data Transfer Object
é um padrão de projetos bastante utilizado para o transporte de dados entre diferentes componentes de um sistema, diferentes instâncias ou processos de um sistema distribuído ou diferentes sistemas via serialização.

A ideia consiste basicamente em agrupar um conjunto de atributos numa classe simples de forma a otimizar a comunicação.

Numa chamada remota, seria ineficiente passar cada atributo individualmente. Da mesma forma seria ineficiente ou até causaria erros passar uma entidade mais complexa.

**Além disso, muitas vezes os dados usados na comunicação não refletem exatamente os atributos do seu modelo. Então, um DTO seria uma classe que provê exatamente aquilo que é necessário para um determinado processo**

Exemplo:

```ts
// Aqui tenho uma entidade chamada Category
interface Category {
  id: string;
  name: string;
  description: string;
  createdAt?: Date;
}
```
```ts
/**
 * Aqui tenho uma função que hipoteticamente cria uma nova Category
 * Em um primeiro momento é válido dizer que preciso receber uma instância do 
 * Category na função mas no contexto geral é algo desnecessário.
 */
create({ name, description }: Category): void {
  const category = new Category({ name, description });

  this.db.save(category);
}
```
```ts
/**
 * Aqui eu posso criar uma nova interface que tem exatamente o que preciso pra
 * criar uma nova Category
 */
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

create({ name, description }: ICreateCategoryDTO): void {
  const category = new Category({ name, description });

  this.db.save(category);
}
```

## Testes
## Tipos
1. Unitários
Testa principalmente a regra de negócio.

2. Integração
> Request -> Routes -> Controllers -> UseCase -> Repository

> Response <- Repository <- UseCase <- Controllers <- Routes <- Request

### TDD - Test Driven Development