import {
  generateCodeEstonia,
  generateCodeLatvia,
  generateCodeLithuania,
} from '../src/code-generator'

test('Check if Estonian code starts with EST-', () => {
  expect(generateCodeEstonia().startsWith('EST-')).toBe(true)
})

test('Check if generated Estonian code consist from 8 numbers', () => {
  expect(generateCodeEstonia().length).toBe(8)
})

test('Check if Estonian code format country prefix and four digits ', () => {
  expect(/EST-\d{4}/.test(generateCodeEstonia())).toBe(true)
})

test('Check if Latvian code starts with LVA-', () => {
  expect(generateCodeLatvia().startsWith('LVA-')).toBe(true)
})

test('Check if generated Latvian code consist from 8 numbers', () => {
  expect(generateCodeLatvia().length).toBe(8)
})

test('Check if Latvian code format country prefix and four digits ', () => {
  expect(/LVA-\d{4}/.test(generateCodeLatvia())).toBe(true)
})

test('Check if Lithuanian code starts with LTU-', () => {
  expect(generateCodeLithuania().startsWith('LTU-')).toBe(true)
})

test('Check if generated Lithuanian code consist from 8 numbers', () => {
  expect(generateCodeLithuania().length).toBe(8)
})

test('Check if Lithuanian code format country prefix and four digits ', () => {
  expect(/LTU-\d{4}/.test(generateCodeLithuania())).toBe(true)
})
