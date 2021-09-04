export default function getPrice(price) {
  return price === 0 ? "免費" : `$${price}`;
}
