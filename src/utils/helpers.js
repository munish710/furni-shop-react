export const formatPrice = (number) => {
  const newNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  }).format((number * 50) / 100);
  return newNumber;
};

export const getUniqueValues = () => {};
