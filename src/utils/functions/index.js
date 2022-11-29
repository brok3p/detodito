export const calcularTotalCompra = (listaCompra) =>
    listaCompra.reduce((sum, item) => sum + item.price * item.cantidad, 0);

export const _calcularCantidadCompra = (listaCompra) =>
    listaCompra.reduce((sum, item) => sum + item.cantidad, 0);