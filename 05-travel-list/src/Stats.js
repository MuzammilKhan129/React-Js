export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packig list🚀</em>
      </p>
    );
  const numItem = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percentage = Math.round((packed / numItem) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything packed ✈"
          : `💼 You have ${numItem} items on your list, and you already packed ${packed} (
        ${percentage}%)`}
      </em>
    </footer>
  );
}
