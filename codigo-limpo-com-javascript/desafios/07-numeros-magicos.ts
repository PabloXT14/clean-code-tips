function lookForUpdates() {}

const INTERVAL_30_MINUTES_IN_MILLISECONDS = 1000 * 60 * 30

setInterval(lookForUpdates, INTERVAL_30_MINUTES_IN_MILLISECONDS)

function calculateDiscount(priceInCents, discountInPercentage) {
  return Math.ceil(priceInCents - priceInCents * (discountInPercentage / 100))
}
