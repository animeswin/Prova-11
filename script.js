let balance = 1000

function performOperation() {
  const operacao = document.querySelector("#operacao").value
  const valor = parseFloat(document.querySelector("#valor").value)
  const resultado = document.querySelector("#resultado")

  if (isNaN(valor) || valor <= 0) {
    resultado.textContent = "Por favor, insira um valor válido."
    return
  }

  switch (operacao) {
    case "consultar":
      resultado.textContent = `Saldo atual: R$ ${balance.toFixed(2)}`
      break
    case "sacar":
      if (valor > balance) {
        resultado.textContent = "Saldo insuficiente."
      } else {
        balance -= valor;
        resultado.textContent = `Saque realizado com sucesso. Saldo atual: R$ ${balance.toFixed(
          2
        )}`
      }
      break;
    case "depositar":
      balance += valor
      resultado.textContent = `Depósito realizado com sucesso. Saldo atual: R$ ${balance.toFixed(
        2
      )}`
      break;
    default:
      resultado.textContent = "Operação inválida."
  }
}