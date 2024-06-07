// Booleans

const user = {
  name: 'Diego Fernandes',
  height: 190,
  hasTicket: true,
}

const necessaryHeightInCentimeters = 130

const currentHour = new Date('2024-06-07 13:00:00').getHours()

const isParkOpen = currentHour >= 9 && currentHour < 18

if (!isParkOpen) {
  throw new Error('O parque está fechado!')
}

const doesUserHasTicket = user.hasTicket

if (!doesUserHasTicket) {
  throw new Error('O Diego não possui um bilhete para entrar no parque!')
}

const canEnterToy = user.height >= necessaryHeightInCentimeters

if (!canEnterToy) {
  throw new Error('O Diego não pode entrar no brinquedo!')
} 

console.log('O Diego se divertiu muito! :)')
