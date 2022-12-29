import validate from "./valida_cpf_before"

describe('Should Validate CPFs', () => { 
	const cpfValidator = validate
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
 })
