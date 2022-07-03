interface ItemProps {
  src: string;
  className?: string;
}

function Item({ src, className }: ItemProps) {
  return (
    <div className="h-32 w-32">
      <img
        src={src}
        className={className}
        alt="Weapon"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default Item;
