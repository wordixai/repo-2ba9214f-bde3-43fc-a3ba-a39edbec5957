import MobileApp from '@/components/MobileApp';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <MobileApp />
      </div>
    </div>
  );
};

export default Index;