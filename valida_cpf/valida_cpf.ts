export class ValidatorCPF {
	isCpfValid(cpf: string){
		if(cpf.length === 9) return true
		return false
	}
}