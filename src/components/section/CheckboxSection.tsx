import Checkbox from '../ui/Checkbox';
import Label from '../ui/Label';

const CheckboxSection = () => {
  return (
    <section className="p-5">
      <h2>Checkbox</h2>
      <div className="mt-4 max-w-lg">
        <h3>Common</h3>
        <div className="flex items-start mt-3 gap-x-4">
          <Checkbox id="comments" />
          <div>
            <Label htmlFor="comments">Comments</Label>
            <p className="text-gray-500 text-sm">
              Get notified when someones posts a comment on a posting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckboxSection;
