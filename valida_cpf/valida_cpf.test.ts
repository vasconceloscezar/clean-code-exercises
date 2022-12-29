import { validatorCPF } from "./valida_cpf_after"

describe('Should Validate CPFs', () => { 
	const cpfValidator = validatorCPF
	test('CPF 111.111.111-11 must be invalid', () => { 
			const mockCPF = '111.111.111-11'
			expect(cpfValidator(mockCPF)).toBe(false)
	 })
	test('CPF 123.456.789-99 must be invalid', () => { 
			const mockCPF = '123.456.789-99'
			expect(cpfValidator(mockCPF)).toBe(false)
	 })
	test('CPF 935.411.347-80 must be valid', () => { 
			const mockCPF = '935.411.347-80'
			expect(cpfValidator(mockCPF)).toBe(true)
	 })
	test('CPF 111.444.777-35 must be valid', () => { 
			const mockCPF = '111.444.777-35'
			expect(cpfValidator(mockCPF)).toBe(true)
	 })
	test('CPF empty must be invalid', () => { 
			const mockCPF = ''
			expect(cpfValidator(mockCPF)).toBe(false)
	 })
	 test('CPF out of must be invalid', () => { 
			const mockCPF = '111.444.777-35333'
			expect(cpfValidator(mockCPF)).toBe(false)
	 })
	 test('CPF in range with invalid string must be invalid', () => { 
			const mockCPF = '111.444.777-2'
			expect(cpfValidator(mockCPF)).toBe(false)
	 })
	 test('CPF with letters must be invalid', () => { 
			const mockCPF = '111.444.aaa-23'
			expect(cpfValidator(mockCPF)).toBe(false)
	 })
 })
