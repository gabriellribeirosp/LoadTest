
# Outseara - Projeto de Testes de Carga

Este repositório contém a automação completa de testes de carga para o sistema Outseara, utilizando ferramentas modernas e configurado para execução local e em pipelines CI/CD com GitHub Actions.

---

## 📌 Tecnologias utilizadas

- **Java 17+**
- **Maven**
- **JMeter** (ou Gatling, dependendo do que você usou)
- **GitHub Actions** (para CI/CD)
- **Relatórios HTML**
- **Git Filter-Repo** (para otimização e limpeza do histórico Git)

---

## 📁 Estrutura do projeto

```
Outseara
├── .idea/                     # Configurações do IntelliJ
├── src/                       # Código-fonte dos testes
│   └── test/                  
│       └── java/
│           └── ...            # Scripts de carga
├── pom.xml                    # Gerenciador de dependências Maven
├── README.md                  # Este arquivo
└── .gitignore                 # Ignora arquivos locais
```

---

## 🚀 Como executar os testes de carga

> Pré-requisitos: Java, Maven e JMeter/Gatling instalados

1. **Clone o repositório**
   ```bash
   git clone https://github.com/gabriellribeirosp/Outseara.git
   cd Outseara
   ```

2. **Execute os testes com Maven**
   ```bash
   mvn clean test
   ```

3. **(Opcional) Gere relatórios**
   Dependendo da ferramenta utilizada (JMeter ou Gatling), os relatórios serão gerados automaticamente em `target/`.

---

## 🔄 Pipeline CI/CD

O projeto conta com uma pipeline GitHub Actions (`.github/workflows/ci.yml`) que:

- Instala dependências
- Executa os testes de carga
- Gera relatórios
- Publica artefatos (caso configurado)

---

## 🧹 Histórico Git limpo

Este projeto foi compactado e otimizado com `git filter-repo` para remover arquivos grandes do histórico, permitindo que o repositório seja clonado e versionado com eficiência (menos de 100MB).

---

## 📄 Licença

Este projeto é de código aberto e está licenciado sob os termos da licença MIT.

---

## 🙋‍♀️ Desenvolvido por

**Gabrielli Ribeiro**  
GitHub: [@gabriellribeirosp](https://github.com/gabriellribeirosp)
