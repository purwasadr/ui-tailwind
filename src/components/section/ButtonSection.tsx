import Button from '@/components/ui/Button';

const ButtonSection = () => {
  return (
    <section className="p-5">
      <h2>Button</h2>
      <div className="mt-4">
        <h3>Size</h3>
        <div className="flex items-center mt-5 gap-x-4">
          <Button size="small">Small</Button>
          <Button>Base</Button>
          <Button size="large">Large</Button>
        </div>
      </div>
      <div className="mt-4">
        <h3>Variant</h3>
        <div className="flex items-center mt-5 gap-x-4">
          <Button>Primary</Button>
          <Button intent="secondary" size={'base'}>
            Secondary
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ButtonSection;
