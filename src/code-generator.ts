export function generateCodeEstonia(): string {
  const codeEstonia = Math.floor(Math.random() * 10000).toString()
  return `EST-${codeEstonia}`
}

export function generateCodeLatvia(): string {
  const codeLatvia = Math.floor(Math.random() * 10000).toString()
  return `LVA-${codeLatvia}`
}

export function generateCodeLithuania(): string {
  const codeLithuania = Math.floor(Math.random() * 10000).toString()
  return `LTU-${codeLithuania}`
}

console.log(generateCodeEstonia())
console.log(generateCodeLatvia())
console.log(generateCodeLithuania())
