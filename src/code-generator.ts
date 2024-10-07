export function generateCodeEstonia(): string {
  const codeEstonia = Math.floor(1000 + Math.random() * 9000).toString()
  return `EST-${codeEstonia}`
}

export function generateCodeLatvia(): string {
  const codeLatvia = Math.floor(1000 + Math.random() * 9000).toString()
  return `LVA-${codeLatvia}`
}

export function generateCodeLithuania(): string {
  const codeLithuania = Math.floor(1000 + Math.random() * 9000).toString()
  return `LTU-${codeLithuania}`
}

console.log(generateCodeEstonia())
console.log(generateCodeLatvia())
console.log(generateCodeLithuania())
