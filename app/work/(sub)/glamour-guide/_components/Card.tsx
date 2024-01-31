const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      style={{
        borderRadius: "6px",
        boxShadow: "0px 4px 23.2px 0px rgba(0, 0, 0, 0.09)",
      }}
      className={"p-3 md:p-6 bg-white " + className}
    >
      {children}
    </div>
  );
};

export default Card;
