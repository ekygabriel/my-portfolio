import BackButton from "@/app/contact/components/BackButton";

const WorksLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="mt-10 relative">
      <BackButton />
      <div className="mt-10">{children}</div>
    </div>
  );
};

export default WorksLayout;
