```
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  
  if (quantidade < 12) {
    const macas = quantidade * 1.30
  } else if (quantidade >= 12) {
    const macas = quantidade * 1.00
  }
  return macas
} 
```