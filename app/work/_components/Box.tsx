import Link from "next/link";

const Box: React.FC<{
  children: React.ReactNode;
  className?: string;
  href?: string;
}> = ({ children, className, href = "#" }) => {
  return (
    <Link
      href={href}
      style={{
        boxShadow: "0px 8.524px 30px 0px rgba(0, 0, 0, 0.09)",
        borderBottom: "border-bottom: 1px solid #8F8F8F",
        borderRadius: "18px",
        transition: "500ms ease",
      }}
      className={
        "bg-white w-60 h-60 lg:w-72 lg:h-72 rounded-2xl p-4 relative flex items-center justify-center  shrink-0 hover:scale-105 " +
        className
      }
    >
      {children}
    </Link>
  );
};

export default Box;
