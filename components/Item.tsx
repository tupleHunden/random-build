interface ItemProps {
  src: string;
  className?: string;
  alt?: string;
}

function Item({ src, className, alt }: ItemProps) {
  return (
    <div className="h-32 w-32">
      <img
        src={src}
        className={className}
        alt={alt || "Albion Item"}
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default Item;
