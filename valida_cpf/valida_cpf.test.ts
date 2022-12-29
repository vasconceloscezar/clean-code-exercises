import { ValidatorCPF } from "./valida_cpf";

test('CPF must be 9 digits', () => { 
	const mockCPF = '98765432'
	const cpfValidator = new ValidatorCPF()

	expect(cpfValidator.isCpfValid(mockCPF)).toBe(true)
 })