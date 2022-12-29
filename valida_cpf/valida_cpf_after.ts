const CPF_QUOTIENT = 11

export function validatorCPF(cpf: string){
	if(!cpf) return false
	const isCpfLengthInRange = (cpf.length >= 11 && cpf.length <=14)
	if(!isCpfLengthInRange) return false
	const cpfNumbers = removeCPFMask(cpf)
	const isAllCpfDigitsTheSame = cpfNumbers.split("").every((c) => c === cpfNumbers[0])
	if(isAllCpfDigitsTheSame) return false
	return isDigitoVerificadorValido(cpf,calculateDigits(cpfNumbers));
}

function removeCPFMask(cpf:string) {
	return cpf.replace(".", "").replace(".", "").replace("-", "").replace(" ", "")
}

function calculateDigits(cpf: string){
	let firstDigitsSum = 0
	let secondDigitsSum = 0
	for (let nCount = 1; nCount < cpf.length - 1; nCount++) {
			let digito = parseInt(cpf.substring(nCount - 1, nCount));
			firstDigitsSum += ((11 - nCount) * digito)
			secondDigitsSum += ((12 - nCount) * digito)
	}
	const restFirst = calculateRestDigit(firstDigitsSum)
	secondDigitsSum += (restFirst * 2)
	const restSecond = calculateRestDigit(secondDigitsSum)
	return `${restFirst}${restSecond}`
}

function calculateRestDigit(digitsSum:number): number{
	const rest = digitsSum % CPF_QUOTIENT
	if(rest < 2) return 0
	return CPF_QUOTIENT - rest
}

function isDigitoVerificadorValido(cpf: string, calculatedDigits: string){
	let digitoVerificador = cpf.substring(cpf.length - 2, cpf.length);
	return (digitoVerificador === calculatedDigits)
}