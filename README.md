# DadosClimaticosPOA
Análise de dados meteorológicos de Porto Alegre (1961 - 2016) usando Python, incluindo estatísticas e visualizações gráficas.

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Bernardo-G-Cunha/DadosClimaticosPOA/blob/main/LICENSE) 

# Sobre o projeto
Essa é um projeto criado durante meu primeiro trimestre na faculdade, tratando-se de um programa que mostra estatísticas dos dados climáticos de Porto Alegre, RS, entre janeiro de 1961 e junho de 2016. Os dados computados são precipitação, temperaturas máxima e mínima, umidade relativa e velocidade do vento, retirados do arquivo "Anexo_Arquivo_Dados_Projeto_Logica_e_programacao_de_computadores.csv".

O programa permite o usuário escolher o período do qual quer ver os dados e que dados quer ver, sendo eles então apresentados. Além disso, apresenta o mês mais chuvoso de todo período do arquivo com a respectiva quantidade de chuva e um gráfico da temperatura mínima média de um mês escolhido pelo usuário (de 2006 a 2016).



# Tecnologias utilizadas
- Python
  -- Bibliotecas `datetime`, `calendar` e `matplotlib`

# Como executar o projeto

## Pré-requisitos
- Python 3 -- `matplotlib`

Será necessário instalar o matplotlib, caso não o tenha.

```bash
python -m pip install -U pip
python -m pip install -U matplotlib
```

Caso a instalação não funcione, você pode encontrar mais informações no site do matplotlib https://matplotlib.org/stable/install/index.html.

## Executando
```bash
# clonar repositório
git clone https://github.com/Bernardo-G-Cunha/DadosClimaticosPOA.git

# entrar na pasta do projeto
cd DadosClimaticosPOA

# executar o projeto
python3 dados_climaticos.py

# Se estiver usando Windows, pode acontecer de executar com esse código
py dados_climaticos.py
```
# Autor

Bernardo Garcia Cunha

https://www.linkedin.com/in/bernardo-gcunha
