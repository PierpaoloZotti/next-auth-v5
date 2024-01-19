const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col h-full items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-200 to-slate-800'>
      {children}
    </div>
  );
};

export default AuthLayout;
