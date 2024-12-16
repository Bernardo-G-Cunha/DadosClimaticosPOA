#_______________________________Carrega Dados do Arquivo_______________________________

lista = {}
listaDatas = []

with open("Anexo_Arquivo_Dados_Projeto_Logica_e_programacao_de_computadores.csv") as csv:
  csv.readline()
  for linha in csv:
    dados = linha[:-1].split(",")
    data = dados[0].split("/")
    mes = data[1]
    ano = data[2]
    novo = {"mes": mes , "ano": ano , "precipitacao" : dados[1],  "temperatura maxima": dados[2] , "temperatura minima" : dados[3],
            "umidade": dados[6] , "velocidade do vento" : dados[7] }
    lista[dados[0]] = novo

    listaDatas.append(dados[0][3:5] + "/" + dados[0][6:10])


#__________________________________Função de Teste de Data__________________________________

def testeData(data):
  dataLista = data.split("/")
  if len(dataLista) != 2 or len(dataLista[0]) != 2 or len(dataLista[1]) != 4:
    print("Data no formato errado. Use o formato mm/aaaa ")
    return False

  elif data not in listaDatas:
    print("Data não encontrada. Digite meses entre 01/1961 e 06/2016")
    return False

  else:
    return True

#__________________________________Data Inicio__________________________________

print("------ Dados de clima de Porto Alegre, RS (01/1961 - 06/2016) ------")

dataInicio = input("Digite o mês de início dos dados que quer vizualizar (mm/aaaa): ")

dataInicioTeste = testeData(dataInicio)

while dataInicioTeste == False:
  dataInicio = input("Digite o mês de início dos dados no formato (mm/aaaa): ")
  dataInicioTeste = testeData(dataInicio)

#____________________________________Data Fim____________________________________

dataFim = input("Digite o mês de fim dos dados que quer vizualizar (mm/aaaa): ")

dataFimTeste = testeData(dataFim)

while dataFimTeste == False:
  dataFim = input("Digite o mês de fim dos dados no formato (mm/aaaa): ")
  dataFimTeste = testeData(dataFim)


#____________________________________Inverte Datas____________________________________

dataInicioLista = dataInicio.split("/")
dataFimLista = dataFim.split("/")


if int(dataInicioLista[1] + dataInicioLista[0]) > int(dataFimLista[1] + dataFimLista[0]):
  print("Data final é anterior a data de início. As datas foram invertidas automaticamente.")
  aux = dataInicio
  dataInicio = dataFim
  dataFim = aux

dataInicioLista = dataInicio.split("/")
dataFimLista = dataFim.split("/")


#____________________________________Escolher Dados____________________________________

dadoEsco = input("\nEscolha que dados quer ver \nTodos (digite 1) \nApenas de precipitação (digite 2) \nApenas temperatura (digite 3) \nApenas umidade e vento (digite 4) \nDigite um número: ")

while dadoEsco not in ["1", "2", "3", "4", "01", "02", "03", "04"]:
  dadoEsco = input("\nEscolha um número válido \nTodos (digite 1) \nApenas de precipitação (digite 2) \nApenas temperatura (digite 3) \nApenas umidade e vento (digite 4) \nDigite um número: ")

dadoEsco = int(dadoEsco)


while (dadoEsco > 4) or (dadoEsco < 1):
  print("Dado fora das opções disponíveis.")
  dadoEsco = int(input("Digite 1 para todos os dados, 2 para precipitação, 3 para temperatura ou 4 para umidade e vento.\n"))

if dadoEsco == 1:
  print("\nTodos os Dados:\n")

elif dadoEsco ==  2:
  print("\nPrecipitação\n")

elif dadoEsco ==  3:
  print("\nTemperaturas\n")

else:
  print("\nUmidade Relativa e Velocidade do Vento\n")

#________________________________Apresentação em Modo Texto________________________________

mesInicioStr = dataInicioLista[0]
anoInicioStr = dataInicioLista[1]

mesFimStr = dataFimLista[0]
anoFimStr = dataFimLista[1]


for chave, dado in lista.items():

  if int(dado["ano"] + dado["mes"]) >= int(anoInicioStr + mesInicioStr)  and int(dado["ano"] + dado["mes"]) <= int(anoFimStr + mesFimStr):
    if dadoEsco == 1:
      print(f"{chave} - Precipitação: {dado['precipitacao']} mm/m^2, Temperatura Máxima: {dado['temperatura maxima']} Cº, Temperatura Mínima: {dado['temperatura minima']} Cº")
      print(f"Umidade Relativa: {dado['umidade']} %, Velocidade do Vento: {dado['velocidade do vento']} m/s")
      print("-"*42, "\n")

    elif dadoEsco == 2:
      print(f"{chave} - Precipitação: {dado['precipitacao']} mm/m^2")
      print("-"*42, "\n")

    elif dadoEsco == 3:
      print(f"{chave} - Temperatura Máxima: {dado['temperatura maxima']} Cº, Temperatura Mínima: {dado['temperatura minima']} Cº")
      print("-"*42, "\n")

    elif dadoEsco == 4:
      print(f"Umidade Relativa: {dado['umidade']} %, Velocidade do Vento: {dado['velocidade do vento']} m/s")
      print("-"*42, "\n")

#________________________________Mês Mais Chuvoso________________________________

listaDiasChuvosos = {}

def acumularDados(listaComDados, dadoRequerido, listaSendoCriada):

  for chave, dado in listaComDados.items():
    chaveSplit = chave.split("/")
    chaveAnoMes = (chaveSplit[2] + chaveSplit[1])
    if (chaveAnoMes) not in listaSendoCriada:
      listaSendoCriada[chaveAnoMes] =  0

    listaSendoCriada[chaveAnoMes] += float(dado[dadoRequerido])
    listaSendoCriada[chaveAnoMes] = round(listaSendoCriada[chaveAnoMes], 1)

  return listaSendoCriada

listaDiasChuvosos = acumularDados(lista, "precipitacao", listaDiasChuvosos)


for chave, valor in sorted(listaDiasChuvosos.items(), key=lambda x:x[1], reverse=True):
  chaveStr = chave[4:6] + "/" + chave[0:4]
  print(f"Mês mais chuvoso: {chaveStr}\nPrecipitação Total: {valor} mm/m^2")
  print("-"*42)
  break


#__________________________Média Temperatura Mínima de um Certo Mês__________________________

mesTempMed = input("Escolha o mês que quer ver a temperatura mínima média entre os anos 2006 e 2016 (use 2 dígitos): ")

meses = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]

def testeDataMes(data):
  if data not in meses:
    return False
  else:
    return True

mesTempMedTest = testeDataMes(mesTempMed)

while mesTempMedTest == False:
  mesTempMed = input("Digite o mês que quer ver usando 2 dígitos (ex: 01 para janeiro, 12 para dezembro): ")
  mesTempMedTest = testeDataMes(mesTempMed)

listaTempMinima = {}

listaTempMinima = acumularDados(lista, "temperatura minima", listaTempMinima)

listaMedTempMinima = []
listaMedTempMinimaAnos = []

print("\nTemperatura Mínima Média:")
print("(Obs: alguns meses possuem dados apenas até 2015.)\n")


if mesTempMed in ["01", "03", "05", "07", "08", "10", "12"]: dias = 31
elif mesTempMed in ["04", "06", "09", "11"]: dias = 30
else:
  if (int(mes[0:4]) % 4 == 0) and (int(mes[0:4]) % 100 != 0 or int(mes[0:4]) % 400 == 0): dias = 29
  else: dias =28

for mes, somaTemps in listaTempMinima.items():
  if mesTempMed == mes[4:6] and int(mes[0:4]) >= 2006 and int(mes[0:4]) <= 2016:
    tempMed = somaTemps/dias
    print(f"{mes[4:6] + '/' + mes[0:4]}: {round(tempMed, 2)} Cº\n")
    listaMedTempMinima.append(tempMed)
    listaMedTempMinimaAnos.append(mes[0:4])


#__________________________Média Temperatura Mínima Geral de Um Mês__________________________

medTempMinimaGeral = sum(listaMedTempMinima)/len(listaMedTempMinima)

if mesTempMed == "01":
  nomeMesTempMed = "Janeiro"
elif mesTempMed == "02":
  nomeMesTempMed = "Fevereiro"
elif mesTempMed == "03":
  nomeMesTempMed = "Março"
elif mesTempMed == "04":
  nomeMesTempMed = "Abril"
elif mesTempMed == "05":
  nomeMesTempMed = "Maio"
elif mesTempMed == "06":
  nomeMesTempMed = "Junho"
elif mesTempMed == "07":
  nomeMesTempMed = "Julho"
elif mesTempMed == "08":
  nomeMesTempMed = "Agosto"
elif mesTempMed == "09":
  nomeMesTempMed = "Setembro"
elif mesTempMed == "10":
  nomeMesTempMed = "Outubro"
elif mesTempMed == "11":
  nomeMesTempMed = "Novembro"
else:
  nomeMesTempMed = "Dezembro"

print(f"A média geral da temperatura mínima de {nomeMesTempMed} no período é {round(medTempMinimaGeral, 2)} Cº\n")

print("-"*125)


#____________________________Gráfico de Temperaturas Mínimas Médias____________________________

import matplotlib.pyplot as plt
import numpy as np

plt.figure(figsize=(12, 4))
plt.xticks(rotation=30, ha ="right")
plt.bar(listaMedTempMinimaAnos, listaMedTempMinima)
plt.xlabel("Ano")
plt.ylabel("Temperatura Mínima Média (Cº)")
plt.ylim(0, 20)
plt.yticks(np.arange(0, 21, 2))

for i, v in enumerate(listaMedTempMinima):
  plt.text(i, v+0.5, str(round(v, 2)), ha="center", fontsize=9)

plt.title(f"Média de Temperaturas Mínimas de {nomeMesTempMed}")
plt.show()

print("-"*125)
