# Desafio SonarCloud
<div align="center">
<label><h2>Desafio</h2></label>

![Imersão Full Stack && Full Cycle](https://fullcycle.com.br/wp-content/themes/fullcycle/assets/images/fullcycle-logo.svg)
</div>

<p>Nesse desafio, iremos consolidar os conhecimentos em relação a criação de uma pipeline de CI realizando os seguintes passos.
<p>Crie uma pequena aplicação simples em node.js (qualquer aplicação mesmo)
<p>Crie testes de unidade para essa aplicação
<p>Crie uma pipeline de CI utilizando o Github actions que:
<ul>
    <li>Instale a aplicação</li>
    <li>Execute os testes</li>
    <li>Execute o SonarCloud</li>
</ul>
<p>Suba essa aplicação para um repositório público no Github e ative o status check para que seja possível dar o merge apenas se a aplicação passar na pipeline de CI e também se a aplicação passar no quality gate do SonarCloud.
<p>Crie uma Pull Request (PR) realizando todo o processo.

<br>

# References

- [Desafio](https://plataforma.fullcycle.com.br/courses/173/168/115/conteudos?projeto=53&fase=251)
- [Jest](https://jestjs.io/)
- [SonarQube](https://docs.sonarqube.org/latest/setup/get-started-2-minutes/)

<br>

# comandos úteis

```bash
docker run -d --name sonarqube -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true -p 9000:9000 sonarqube:latest
```