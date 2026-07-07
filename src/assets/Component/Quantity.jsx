import useCartStore from "../store/cartStore";

const Quantity = () => {
  const quantity = useCartStore((state) => state.quantity);
  const increase = useCartStore((state) => state.increase);
  const decrease = useCartStore((state) => state.decrease);

  return (
    <div className="flex items-end gap-6">
      <div>
        <h3 className="mb-2 font-semibold">Quantity</h3>

        <div className="flex items-center justify-between border rounded-md w-24 h-10 px-3">
          <button onClick={decrease}>-</button>

          <span>{quantity}</span>

          <button onClick={increase}>+</button>
        </div>
      </div>

      <button className="bg-slate-800 text-white px-8 h-10 rounded-md">
        View Cart
      </button>
    </div>
  );
};

export default Quantity;
