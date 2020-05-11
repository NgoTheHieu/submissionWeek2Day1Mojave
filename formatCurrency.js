function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    });
    return formatter.format(value);
  }
  console.log(formatCurrency("USD",215.51));
  console.log(formatCurrency("CNY",26984));
  console.log(formatCurrency("VND",5800.175));